package categories

import (
	"encoding/json"
	"net/http"

	"github.com/lazarok09/go-blog/database"
	"github.com/lazarok09/go-blog/models/categories"
	"github.com/lazarok09/go-blog/odm"

	"go.mongodb.org/mongo-driver/bson"
)

const handlerName = "categories"

func Handler(w http.ResponseWriter, r *http.Request) {
	db, ctx, disconnect, _ := database.Connect()
	defer disconnect()

	categoriesCollection := db.Collection(handlerName)
	var categories []categories.Category
	filter := bson.D{}

	cursor, err := categoriesCollection.Find(ctx, filter)

	if err != nil {
		w.Write([]byte(odm.ReplaceErrorWith(odm.ErrorCollectionConnect, handlerName)))
		return
	}

	defer cursor.Close(ctx)

	if err = cursor.All(ctx, &categories); err != nil {
		w.Write([]byte(odm.ReplaceErrorWith(odm.ErrorCollectionIterate, handlerName)))
		return
	}
	result, err := json.Marshal(categories)
	if err != nil {
		w.Write([]byte(odm.ReplaceErrorWith(odm.ErrorCollectionMarshall, handlerName)))

		return
	}
	w.Write(result)

}
