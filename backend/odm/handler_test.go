package odm

import (
	"net/http"
	"net/url"
	"reflect"
	"testing"
)

type GetNumberFromQueryTest struct {
	queryName            string
	queryValue           string
	ErrorMessageExpected string
	ErrorExpected        bool
}

func TestGetNumberFromQuery(t *testing.T) {

	testRampage := []GetNumberFromQueryTest{
		{
			queryName:            "",
			queryValue:           "",
			ErrorMessageExpected: ErrorGetNumberFromQueryEmptyValue,
			ErrorExpected:        true,
		},
		{
			queryName:            "Lazaro",
			queryValue:           "25",
			ErrorMessageExpected: "",
			ErrorExpected:        false,
		},
		{
			queryName:            "Lazaro",
			queryValue:           "0,5",
			ErrorMessageExpected: ErrorGetNumberFromQueryInvalidNumber,
			ErrorExpected:        true,
		},
		{
			queryName:            "Lazaro2",
			queryValue:           "0,5",
			ErrorMessageExpected: "",
			ErrorExpected:        true,
		}}

	// iterate over multiple inputs / outputs

	for index, currentTest := range testRampage {
		req := requestFactory(currentTest.queryName, currentTest.queryValue)
		value, err := GetNumberFromQuery(currentTest.queryName, req)

		if err != nil {
			errMessage := err.Error()

			if currentTest.ErrorExpected && errMessage != ErrorGetNumberFromQueryEmptyValue {
				t.Errorf("Empty values was founded at the test %d", index)
			}
			if currentTest.ErrorExpected && errMessage != ErrorGetNumberFromQueryInvalidNumber {
				t.Errorf("Invalid numbers was tried to be parsed at the query value")
			}

			if !currentTest.ErrorExpected && err != nil {
				t.Error(err)
			}
		}
		if !currentTest.ErrorExpected && !reflect.ValueOf(value).IsValid() {
			t.Fatal("Error validating the number")
		}

	}

}

func requestFactory(queryName, queryValue string) *http.Request {
	req := &http.Request{
		URL: &url.URL{
			RawQuery: url.Values{queryName: []string{queryValue}}.Encode(),
		},
	}
	return req
}
