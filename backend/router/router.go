package router

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
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
	r := mux.NewRouter()

	r.HandleFunc("/posts/{slug}", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)
		posts.BySlug(w, r)
	})
	r.HandleFunc("/posts", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)
		posts.All(w, r)
	})

	r.HandleFunc("/settings", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)

		settings.Handler(w, r)
	})
	r.HandleFunc("/authors", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)

		authors.Handler(w, r)
	})
	r.HandleFunc("/categories", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)

		categories.Handler(w, r)
	})
	r.HandleFunc("/tags", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)

		tags.Handler(w, r)
	})
	r.HandleFunc("/components_menu_menu_links", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)

		components_menu_menu_links.Handler(w, r)
	})
	r.HandleFunc("/upload_file", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)

		upload_file.Handler(w, r)
	})
	srv := &http.Server{
		Addr: "0.0.0.0:8080",
		// Good practice to set timeouts to avoid Slowloris attacks.
		WriteTimeout: time.Second * 15,
		ReadTimeout:  time.Second * 15,
		IdleTimeout:  time.Second * 60,
		Handler:      r, // Pass our instance of gorilla/mux in.
	}

	fmt.Println("Listen server at port 8080")
	log.Fatal(srv.ListenAndServe())
}
