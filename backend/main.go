package main

import (
	"fmt"

	"github.com/lazarok09/go-blog/config"

	"github.com/lazarok09/go-blog/router"
)

func main() {
	fmt.Println("Welcome back master")
	config.InitConfig()

	router.InitRoutes()

}
