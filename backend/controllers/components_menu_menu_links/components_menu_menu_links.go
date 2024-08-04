package components_menu_menu_links

import (
	"encoding/json"
	"net/http"

	"github.com/lazarok09/go-blog/database"
	"github.com/lazarok09/go-blog/models/components_menu_menu_links"
	"github.com/lazarok09/go-blog/odm"
	"go.mongodb.org/mongo-driver/bson"
)

const handlerName = "components_menu_menu_links"

func Handler(w http.ResponseWriter, r *http.Request) {
	db, ctx, disconnectDb, disconnectCtx := database.Connect()
	menuLinksCollection := db.Collection(handlerName)
	defer disconnectDb()

	filter := bson.D{}

	cursor, err := menuLinksCollection.Find(ctx, filter)
	defer disconnectCtx()

	if err != nil {
		w.Write([]byte(odm.ReplaceErrorWith(odm.ErrorCollectionConnect, handlerName)))
		return
	}
	var results []components_menu_menu_links.ComponentsMenuMenuLinks

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
