package tags

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/lazarok09/go-blog/database"
	"github.com/lazarok09/go-blog/models/tags"
	"github.com/lazarok09/go-blog/odm"
	"go.mongodb.org/mongo-driver/bson"
)

const handlerName = "tags"

func BySlug(w http.ResponseWriter, r *http.Request) {

	database, ctx, disconnectOnDefer, cancel := database.Connect()
	defer disconnectOnDefer()

	postsCollection := database.Collection("tags")

	var result []tags.Tag

	vars := mux.Vars(r)
	slug := vars["slug"]

	filter := bson.D{{"slug", slug}}

	cursor, err := postsCollection.Find(ctx, filter)

	if err != nil {
		w.Write([]byte(odm.ReplaceErrorWith(odm.ErrorCollectionConnect, handlerName)))
		return
	}

	if err = cursor.All(ctx, &result); err != nil {
		w.Write([]byte(odm.ReplaceErrorWith(odm.ErrorCollectionIterate, handlerName)))
		return
	}
	response, err := json.Marshal(result)

	defer cancel()

	if err != nil {
		w.Write([]byte(odm.ReplaceErrorWith(odm.ErrorCollectionMarshall, handlerName)))
		return
	}

	w.Write(response)
	defer cursor.Close(ctx)
}

func All(w http.ResponseWriter, r *http.Request) {
	db, ctx, disconnectOnDefer, disconnectCtx := database.Connect()
	defer disconnectOnDefer()
	defer disconnectCtx()
	tagsCollection := db.Collection(handlerName)

	filter := bson.D{}

	cursor, err := tagsCollection.Find(ctx, filter)

	if err != nil {
		w.Write([]byte(odm.ReplaceErrorWith(odm.ErrorCollectionConnect, handlerName)))
		return
	}

	var results []tags.Tag

	if err = cursor.All(ctx, &results); err != nil {
		w.Write([]byte(odm.ReplaceErrorWith(odm.ErrorCollectionIterate, handlerName)))
		return
	}

	result, err := json.Marshal(results)
	if err != nil {
		w.Write([]byte(odm.ReplaceErrorWith(odm.ErrorCollectionMarshall, handlerName)))
		return
	}

	w.Write(result)
}
