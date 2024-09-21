package main

import (
	"github.com/lazarok09/go-blog/config"

	"github.com/lazarok09/go-blog/router"
)

func main() {
	config.InitConfig()

	router.InitRoutes()

}
