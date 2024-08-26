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
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Promise.all([callbacks, callbacks]) - ctx global

func BySlug(w http.ResponseWriter, r *http.Request) {

	database, ctx, disconnectOnDefer, cancel := database.Connect()
	defer disconnectOnDefer()

	postsCollection := database.Collection("posts")

	var result []posts.Post

	vars := mux.Vars(r)
	slug := vars["slug"]

	matchStage := bson.D{{"$match", bson.D{{"slug", slug}}}}

	categoriesStage := bson.D{{"$lookup", bson.D{{"from", "categories"}, {"localField", "categories"}, {"foreignField", "_id"}, {"as", "categories"}}}}
	tagsStage := bson.D{{"$lookup", bson.D{{"from", "tags"}, {"localField", "tags"}, {"foreignField", "_id"}, {"as", "tags"}}}}

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

	postsCollection := database.Collection("posts")
	indexModel := mongo.IndexModel{
		Keys: bson.D{{"title", "text"}},
	}

	if _, err := postsCollection.Indexes().CreateOne(ctx, indexModel); err != nil {
		w.Write([]byte("An error occurred when creating the index for title search"))
		return
	}

	var results []posts.Post

	searchTerm, _ := odm.GetStringFromQuery("search", r)
	limit, _ := odm.GetNumberFromQuery("limit", r)
	offset, _ := odm.GetNumberFromQuery("offset", r)

	ops := options.Find()

	if limit >= 0 {
		ops.SetLimit(limit)

	}

	if offset >= 0 {
		ops.SetSkip(offset)
	}
	filter := bson.D{}

	if len(searchTerm) >= 1 {
		filter = bson.D{{"$text", bson.D{{"$search", searchTerm}}}}
	}

	cursor, err := postsCollection.Find(ctx, filter, ops)

	if err != nil {
		w.Write([]byte("An error occured when try to find one result"))
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
