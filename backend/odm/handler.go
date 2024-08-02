package odm

import (
	"errors"
	"net/http"
	"strconv"
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
