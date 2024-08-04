package authors

import (
	"encoding/json"
	"net/http"

	"github.com/lazarok09/go-blog/database"
	"github.com/lazarok09/go-blog/models/authors"
	"go.mongodb.org/mongo-driver/bson"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	db, ctx, disconnect, _ := database.Connect()
	defer disconnect()

	authorsCollection := db.Collection("authors")

	filter := bson.D{}

	var authorsResult []authors.Author

	cursor, err := authorsCollection.Find(ctx, filter)

	if err != nil {
		w.Write([]byte("An error ocurred when try to find the authors collection"))
		return
	}
	if cursor.All(ctx, &authorsResult); err != nil {
		w.Write([]byte("An error ocurred when try to decode results to bson"))
		return
	}
	item, err := json.Marshal(authorsResult)

	if err != nil {
		w.Write([]byte("An error ocurred when marshaling the results to json"))
		return
	}
	w.Write(item)

}
