package authors

type Author struct {
	DisplayName  string `json:"displayName"`
	Slug         string `json:"slug"`
	Published_At string `json:"published_at"`
	Created_At   string `json:"created_at"`
	Updated_At   string `json:"updated_at"`
	Id           string `json:"id"`
	CreatedBy    string `json:"createdBy"`
	UpdateBy     string `json:"updatedBy"`
}
