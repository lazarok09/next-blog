package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

var MONGODB_CONNECT_STR string
var DATABASE_NAME string
var ALLOWED_HOST string
var SERVER_URL string

func InitConfig() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")

	}
	MONGODB_CONNECT_STR = os.Getenv("MONGO_CONNECT_STR")
	ALLOWED_HOST = os.Getenv("ALLOWED_HOST")
	DATABASE_NAME = os.Getenv("DATABASE_NAME")
	SERVER_URL = os.Getenv("SERVER_URL")

}
