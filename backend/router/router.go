package router

import (
	"fmt"
	"log"
	"net/http"

	"github.com/lazarok09/go-blog/controllers/authors"
	"github.com/lazarok09/go-blog/controllers/categories"
	"github.com/lazarok09/go-blog/controllers/posts"
	"github.com/lazarok09/go-blog/controllers/settings"
)

func InitRoutes() {

	http.HandleFunc("/posts", func(w http.ResponseWriter, r *http.Request) {
		posts.Handler(w, r)
	})
	http.HandleFunc("/settings", func(w http.ResponseWriter, r *http.Request) {
		settings.Handler(w, r)
	})
	http.HandleFunc("/authors", func(w http.ResponseWriter, r *http.Request) {
		authors.Handler(w, r)
	})
	http.HandleFunc("/categories", func(w http.ResponseWriter, r *http.Request) {
		categories.Handler(w, r)
	})

	fmt.Println("Listen server at port 6000")
	log.Fatal(http.ListenAndServe(":6000", nil))
}
