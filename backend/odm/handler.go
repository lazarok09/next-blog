package odm

import (
	"errors"
	"net/http"
	"strconv"
	"strings"
)

// From a queryName search it using the request to bring the limit int or an error. Limit zero is the default
func GetLimitFromQuery(queryName string, r *http.Request) (limit int, err error) {
	query := r.URL.Query()

	if query.Has(queryName) {
		limitC, err := strconv.ParseInt(query.Get("limit"), 10, 64)

		if err != nil {
			return 0, err
		}
		return int(limitC), nil
	}
	return 0, errors.New("the provided query was not founded")

}

const (
	ErrorCollectionConnect  = "An error ocurred when try to find a [placeholder] collection"
	ErrorCollectionIterate  = "An error ocurred when try iterate the cursor of [placeholder] collection"
	ErrorCollectionMarshall = "An error ocurred when try to marshall the [placeholder] collection"
)

// Given a string, the collection is puted inside the placeholder pattern based in the message provided.
// Expected a str with [placeholder] at some place to replace.

func ReplaceErrorWith(str string, collection string) string {
	result := strings.Replace(str, "[placeholder]", collection, 1)
	return result
}
