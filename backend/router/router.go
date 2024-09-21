package router

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/lazarok09/go-blog/config"
	"github.com/lazarok09/go-blog/controllers/authors"
	"github.com/lazarok09/go-blog/controllers/categories"
	"github.com/lazarok09/go-blog/controllers/components_menu_menu_links"
	"github.com/lazarok09/go-blog/controllers/posts"
	"github.com/lazarok09/go-blog/controllers/settings"
	"github.com/lazarok09/go-blog/controllers/tags"
	"github.com/lazarok09/go-blog/controllers/upload_file"
)

func insertCors(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", config.ALLOWED_HOST)
}

func InitRoutes() {
	r := mux.NewRouter()

	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Welcome Sir"))
	})

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

	r.HandleFunc("/tags/{slug}", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)

		tags.BySlug(w, r)
	})
	r.HandleFunc("/tags", func(w http.ResponseWriter, r *http.Request) {
		insertCors(w)

		tags.All(w, r)
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
		Addr: config.SERVER_URL,
		// Good practice to set timeouts to avoid Slowloris attacks.
		WriteTimeout: time.Second * 15,
		ReadTimeout:  time.Second * 15,
		IdleTimeout:  time.Second * 60,
		Handler:      r, // Pass our instance of gorilla/mux in.
	}

	fmt.Printf("Listen server at %s", config.SERVER_URL)
	log.Fatal(srv.ListenAndServe())
}
