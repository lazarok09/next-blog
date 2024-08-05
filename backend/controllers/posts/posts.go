package posts

import (
	"encoding/json"
	"net/http"

	"github.com/lazarok09/go-blog/database"
	"github.com/lazarok09/go-blog/models/posts"
	"github.com/lazarok09/go-blog/odm"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const Route string = "/posts"

func Handler(w http.ResponseWriter, r *http.Request) {

	database, ctx, disconnectOnDefer, cancel := database.Connect()
	defer disconnectOnDefer()

	postsCollection := database.Collection("posts")

	var results []posts.Post

	filter := bson.D{}

	limit, _ := odm.GetNumberFromQuery("limit", r)
	offset, _ := odm.GetNumberFromQuery("offset", r)

	ops := options.Find()

	if limit >= 1 {
		ops.SetLimit(limit)

	}

	if offset >= 1 {
		ops.SetSkip(offset)
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
