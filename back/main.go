package main

import (
	"fmt"

	"github.com/lazarok09/go-blog/config"
	"github.com/lazarok09/go-blog/database"
)

func main() {
	fmt.Println("hello world")
	config.InitConfig()

	database.Connect()
	
}
