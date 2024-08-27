package posts

import (
	"encoding/json"

	"net/http"

	"github.com/gorilla/mux"
	"github.com/lazarok09/go-blog/database"
	"github.com/lazarok09/go-blog/models/posts"
	"github.com/lazarok09/go-blog/odm"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

// Promise.all([callbacks, callbacks]) - ctx global

func BySlug(w http.ResponseWriter, r *http.Request) {

	database, ctx, disconnectOnDefer, cancel := database.Connect()
	defer disconnectOnDefer()

	postsCollection := database.Collection("posts")

	var result []posts.Post

	vars := mux.Vars(r)
	slug := vars["slug"]

	matchStage := bson.D{{Key: "$match", Value: bson.D{{Key: "slug", Value: slug}}}}

	categoriesStage := bson.D{{Key: "$lookup", Value: bson.D{{Key: "from", Value: "categories"}, {Key: "localField", Value: "categories"}, {Key: "foreignField", Value: "_id"}, {Key: "as", Value: "categories"}}}}
	tagsStage := bson.D{{Key: "$lookup", Value: bson.D{{Key: "from", Value: "tags"}, {Key: "localField", Value: "tags"}, {Key: "foreignField", Value: "_id"}, {Key: "as", Value: "tags"}}}}

	cursor, err := postsCollection.Aggregate(ctx, mongo.Pipeline{matchStage, categoriesStage, tagsStage})

	if err != nil {
		w.Write([]byte(err.Error()))
		return
	}

	if err = cursor.All(ctx, &result); err != nil {
		w.Write([]byte(err.Error()))
	}
	response, err := json.Marshal(result)

	defer cancel()
	if err != nil {
		w.Write([]byte("An error occured when marshall the results from database"))
		return
	}
	w.Write(response)
	defer cursor.Close(ctx)
}

func All(w http.ResponseWriter, r *http.Request) {

	database, ctx, disconnectOnDefer, cancel := database.Connect()
	defer disconnectOnDefer()
	searchTerm, _ := odm.GetStringFromQuery("search", r)
	limit, _ := odm.GetNumberFromQuery("limit", r)
	offset, _ := odm.GetNumberFromQuery("offset", r)

	postsCollection := database.Collection("posts")
	indexModel := mongo.IndexModel{
		Keys: bson.D{{Key: "title", Value: "text"}},
	}

	if _, err := postsCollection.Indexes().CreateOne(ctx, indexModel); err != nil {
		w.Write([]byte("An error occurred when creating the index for title search"))
		return
	}

	var results []posts.Post

	pipeline := mongo.Pipeline{}

	if offset >= 1 {
		skipStage := bson.D{{Key: "$skip", Value: offset}}
		pipeline = append(pipeline, skipStage)
	}
	if limit >= 1 {
		limitStage := bson.D{{Key: "$limit", Value: limit}}
		pipeline = append(pipeline, limitStage)

	}

	if len(searchTerm) >= 1 {
		// transform key value
		matchStage := bson.D{{Key: "$match", Value: bson.D{{Key: "$text", Value: bson.D{{Key: "$search", Value: searchTerm}, {Key: "$caseSensitive", Value: false}}}}}}
		// verify the code below to use the correct bson.D strucut using key value

		pipeline = append(pipeline, matchStage)
	}

	categoriesStage := bson.D{{Key: "$lookup", Value: bson.D{{Key: "from", Value: "categories"}, {Key: "localField", Value: "categories"}, {Key: "foreignField", Value: "_id"}, {Key: "as", Value: "categories"}}}}

	tagsStage := bson.D{{Key: "$lookup", Value: bson.D{{Key: "from", Value: "tags"}, {Key: "localField", Value: "tags"}, {Key: "foreignField", Value: "_id"}, {Key: "as", Value: "tags"}}}}

	pipeline = append(pipeline, categoriesStage)
	pipeline = append(pipeline, tagsStage)

	cursor, err := postsCollection.Aggregate(ctx, pipeline)

	if err != nil {
		w.Write([]byte(err.Error()))
		return
	}

	if err = cursor.All(ctx, &results); err != nil {
		w.Write([]byte("An error occured inside cursor all iteration"))
	}
	response, err := json.Marshal(results)

	defer cancel()
	if err != nil {
		w.Write([]byte("An error occured when marshall the results from database"))
		return
	}
	w.Write(response)
	defer cursor.Close(ctx)

}
