package router

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/lazarok09/go-blog/database"
)

func InitRoutes() {

	http.HandleFunc("/posts", func(w http.ResponseWriter, r *http.Request) {
		result := database.Connect()

		response, err := json.Marshal(result)

		if err != nil {
			w.Write([]byte("An error occured when marshall the results from database"))
			return
		}
		w.Write(response)

	})

	fmt.Println("Listen server at port 6000")
	log.Fatal(http.ListenAndServe(":6000", nil))
}
