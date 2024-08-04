package upload_file

import "go.mongodb.org/mongo-driver/bson/primitive"

type ProviderMetadata struct {
	PublicID     string `bson:"public_id"`
	ResourceType string `bson:"resource_type"`
}
type Image struct {
	Name   string  `bson:"name"`
	Hash   string  `bson:"hash"`
	Ext    string  `bson:"ext"`
	Mime   string  `bson:"mime"`
	Width  int32   `bson:"width"`
	Height int32   `bson:"height"`
	Size   float64 `bson:"size"`
	Path   string  `bson:"path,omitempty"`
	Url    string  `bson:"url"`
}

type Formats struct {
	Thumbnail Image `bson:"thumbnail"`
	Large     Image `bson:"large"`
	Medium    Image `bson:"medium"`
	Small     Image `bson:"small"`
}

type Related struct {
	Id    primitive.ObjectID `bson:"_id"`
	Ref   primitive.ObjectID `bson:"ref"`
	Kind  string             `bson:"kind"`
	Field string             `bson:"field"`
}

type UploadFile struct {
	ID               primitive.ObjectID `bson:"_id"`
	Name             string             `bson:"name"`
	AlternativeText  string             `bson:"alternativeText"`
	Caption          string             `bson:"caption"`
	Hash             string             `bson:"hash"`
	Ext              string             `bson:"ext"`
	Mime             string             `bson:"mime"`
	Size             float64            `bson:"size"`
	Width            int                `bson:"width"`
	Height           int                `bson:"height"`
	URL              string             `bson:"url"`
	ProviderMetadata ProviderMetadata   `bson:"provider_metadata"`
	Provider         string             `bson:"provider"`
	Formats          Formats            `bson:"formats"`
	Related          []Related          `bson:"related"`
	CreatedAt        primitive.DateTime `bson:"createdAt"`
	UpdatedAt        primitive.DateTime `bson:"updatedAt"`
	CreatedBy        primitive.ObjectID `bson:"created_by"`
	UpdatedBy        primitive.ObjectID `bson:"updated_by"`
}
