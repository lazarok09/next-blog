package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

var MONGODB_CONNECT_STR string

func InitConfig() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")

	}
	MONGODB_CONNECT_STR = os.Getenv("MONGO_CONNECT_STR")

}
