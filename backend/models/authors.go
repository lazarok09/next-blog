package authors

import "go.mongodb.org/mongo-driver/bson/primitive"

type Author struct {
	Id           primitive.ObjectID `bson:"_id"`
	DisplayName  string             `bson:"displayName"`
	Slug         string             `bson:"slug"`
	Published_At primitive.DateTime `bson:"published_at"`
	Created_At   primitive.DateTime `bson:"created_at"`
	Updated_At   primitive.DateTime `bson:"updated_at"`
	CreatedBy    string             `bson:"createdBy"`
	UpdateBy     string             `bson:"updatedBy"`
}
