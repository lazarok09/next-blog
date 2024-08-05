package router

import (
	"fmt"
	"log"
	"net/http"

	"github.com/lazarok09/go-blog/controllers/authors"
	"github.com/lazarok09/go-blog/controllers/categories"
	"github.com/lazarok09/go-blog/controllers/components_menu_menu_links"
	"github.com/lazarok09/go-blog/controllers/posts"
	"github.com/lazarok09/go-blog/controllers/settings"
	"github.com/lazarok09/go-blog/controllers/tags"
	"github.com/lazarok09/go-blog/controllers/upload_file"
)

const AllowedHost = "http://localhost:3000"

func insertCors(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", AllowedHost)
}

func InitRoutes() {

	http.HandleFunc("/posts", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)
		posts.Handler(w, r)
	})
	http.HandleFunc("/settings", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)

		settings.Handler(w, r)
	})
	http.HandleFunc("/authors", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)

		authors.Handler(w, r)
	})
	http.HandleFunc("/categories", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)

		categories.Handler(w, r)
	})
	http.HandleFunc("/tags", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)

		tags.Handler(w, r)
	})
	http.HandleFunc("/components_menu_menu_links", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)

		components_menu_menu_links.Handler(w, r)
	})
	http.HandleFunc("/upload_file", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)

		upload_file.Handler(w, r)
	})

	fmt.Println("Listen server at port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
