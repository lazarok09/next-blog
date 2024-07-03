package database

import (
	"context"
	"fmt"
	"time"

	"github.com/lazarok09/go-blog/config"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

// mongodb+srv://lazarok09:<password>@cluster0.9bo4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

func Connect() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(config.MONGODB_CONNECT_STR))
	defer func() {
		if err = client.Disconnect(ctx); err != nil {
			panic(err)
		}
	}()

	err = client.Ping(ctx, readpref.Primary())

	if err != nil {
		panic("Failure when connect database")
	}

	collection := client.Database("strapi-blog").Collection("authors")

	if err != nil {
		panic("Error when accessing the authors for testing")
	}
	var result struct{}

	collection.FindOne(ctx, bson.D{}).Decode(&result)

	fmt.Println(result)

}
