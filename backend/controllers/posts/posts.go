package posts

import (
	"encoding/json"
	"net/http"

	"github.com/lazarok09/go-blog/database"
	"github.com/lazarok09/go-blog/models/posts"
	"github.com/lazarok09/go-blog/odm"
	"go.mongodb.org/mongo-driver/bson"
)

const Route string = "/posts"

func Handler(w http.ResponseWriter, r *http.Request) {

	database, ctx, disconnectOnDefer, cancel := database.Connect()
	defer disconnectOnDefer()

	postsCollection := database.Collection("posts")

	var results []posts.Post

	filter := bson.D{}

	cursor, err := postsCollection.Find(ctx, filter)

	if err != nil {
		w.Write([]byte("An error occured when try to find one result"))
		return
	}

	limit, _ := odm.GetLimitFromQuery("limit", r)

	if limit >= 1 {
		for i := 0; i <= limit; i++ {
			var result posts.Post
			cursor.Next(ctx)

			if err := cursor.Decode(&result); err != nil {
				w.Write([]byte("An error occured when try to decode results"))
				break
			}
			results = append(results, result)
			continue

		}

		if err := cursor.Err(); err != nil {
			w.Write([]byte("An error occured inside the database cursor iterator"))
			return
		}

	} else {
		if err = cursor.All(ctx, &results); err != nil {
			w.Write([]byte("An error occured inside cursor all iteration"))

		}
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
