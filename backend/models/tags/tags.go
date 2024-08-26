package tags

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Tag struct {
	ID           primitive.ObjectID `bson:"_id"`
	DisplayName  string             `bson:"displayName"`
	Slug         string             `bson:"slug"`
	Published_At primitive.DateTime `bson:"published_at"`
	Created_At   primitive.DateTime `bson:"createdAt"`
	UpdatedAt    primitive.DateTime `bson:"updatedAt"`
	CreatedBy    primitive.ObjectID `bson:"created_by"`
	UpdatedBy    primitive.ObjectID `bson:"updated_by"`
}
