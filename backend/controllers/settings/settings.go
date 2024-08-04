package settings

import (
	"encoding/json"
	"net/http"

	"github.com/lazarok09/go-blog/database"
	"github.com/lazarok09/go-blog/models/settings"

	"go.mongodb.org/mongo-driver/bson"
)

func Handler(w http.ResponseWriter, r *http.Request) {

	database, ctx, disconnectOnDefer, cancel := database.Connect()
	defer disconnectOnDefer()

	settingsCollection := database.Collection("settings")

	var results settings.Settings

	filter := bson.D{}

	err := settingsCollection.FindOne(ctx, filter).Decode(&results)

	if err != nil {
		w.Write([]byte("An error occured when try to find one result"))
	}

	response, err := json.Marshal(results)

	defer cancel()

	if err != nil {
		w.Write([]byte("An error occured when marshall the results from database"))
		return
	}

	w.Write(response)

}
