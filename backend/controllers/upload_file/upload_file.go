package upload_file

import (
	"encoding/json"
	"net/http"

	"github.com/lazarok09/go-blog/database"
	"github.com/lazarok09/go-blog/models/upload_file"
	"github.com/lazarok09/go-blog/odm"
	"go.mongodb.org/mongo-driver/bson"
)

const handlerName = "upload_file"

func Handler(w http.ResponseWriter, r *http.Request) {
	db, ctx, disconnectDb, disconnectCtx := database.Connect()

	defer disconnectCtx()
	defer disconnectDb()
	uploadFileCollection := db.Collection(handlerName)

	filter := bson.D{}

	cursor, err := uploadFileCollection.Find(ctx, filter)

	if err != nil {
		w.Write([]byte(odm.ReplaceErrorWith(odm.ErrorCollectionConnect, handlerName)))
		return
	}
	var results []upload_file.UploadFile

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
