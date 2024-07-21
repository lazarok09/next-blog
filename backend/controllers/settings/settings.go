package settings

import (
	"encoding/json"
	"net/http"

	"github.com/lazarok09/go-blog/database"
	"github.com/lazarok09/go-blog/models/settings"

	"go.mongodb.org/mongo-driver/bson"
)

const Route string = "/settings"

func Handler(w http.ResponseWriter, r *http.Request) {

	database, ctx, disconnectOnDefer := database.Connect()

	defer disconnectOnDefer()

	settingsCollection := database.Collection("settings")

	filter := bson.D{}
	var results settings.Settings

	cursor, err := settingsCollection.Find(*ctx, filter)

	if err != nil {
		panic("An error ocurred when find the collection")
	}
	if err = cursor.All(*ctx, &results); err != nil {
		if err != nil {
			w.Write([]byte("An error occured when marshall the results from database"))
			panic(err)
		}
	}

	response, err := json.Marshal(results)
	if err != nil {
		panic(err)
	}

	w.Write(response)

}
