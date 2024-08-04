package categories

import "go.mongodb.org/mongo-driver/bson/primitive"

type Category struct {
	ID          primitive.ObjectID `bson:"_id"`
	DisplayName string             `bson:"displayName"`
	Slug        string             `bson:"slug"`
	PublishedAt primitive.DateTime `bson:"published_at"`
	CreatedAt   primitive.DateTime `bson:"createdAt"`
	UpdatedAt   primitive.DateTime `bson:"updatedAt"`
	CreatedBy   primitive.ObjectID `bson:"created_by"`
	UpdatedBy   primitive.ObjectID `bson:"updated_by"`
}
