package odm

import (
	"errors"
	"net/http"
	"strconv"
	"strings"
)

const (
	// when a empty value is founded in the query name
	ErrorGetNumberFromQueryEmptyValue string = "The provided query name was not founded in the url query constructor"
	// when a invalid number is founded in the query value
	ErrorGetNumberFromQueryInvalidNumber string = "The provided query name was not founded in the url query constructor"
)

// From a queryName  using the request, bring the limit int or an error.
// Check for valid positive int64
// Limit zero is the default
func GetNumberFromQuery(queryName string, r *http.Request) (limit int64, err error) {
	query := r.URL.Query()
	var emptyValue = ErrorGetNumberFromQueryEmptyValue
	var invalidNumbers = ErrorGetNumberFromQueryInvalidNumber

	if query.Has(queryName) && len(query.Get(queryName)) >= 1 {
		query, err := strconv.ParseInt(query.Get(queryName), 10, 64)

		if err != nil {
			return 0, errors.New(invalidNumbers)
		}
		return query, nil
	}
	return 0, errors.New(emptyValue)

}

// From a queryName search it using the request to bring the limit int or an error. Limit zero is the default
func GetStringFromQuery(queryName string, r *http.Request) (searchTerm string, err error) {
	query := r.URL.Query()

	if query.Has(queryName) {
		query := query.Get(queryName)

		if err != nil {
			return "", err
		}
		return query, nil
	}
	return "", errors.New("the provided query was not founded")

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
