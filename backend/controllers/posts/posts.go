package posts

import (
	"encoding/json"
	"net/http"

	"github.com/lazarok09/go-blog/database"
	"github.com/lazarok09/go-blog/models/posts"
	"go.mongodb.org/mongo-driver/bson"
)

const Route string = "/posts"

func Handler(w http.ResponseWriter, r *http.Request) {

	database, ctx, disconnectOnDefer := database.Connect()
	defer disconnectOnDefer()

	postsCollection := database.Collection("posts")

	var result posts.Post

	filter := bson.D{}

	postsCollection.FindOne(*ctx, filter).Decode(&result)

	response, err := json.Marshal(result)

	if err != nil {
		w.Write([]byte("An error occured when marshall the results from database"))
		return
	}

	w.Write(response)

}
