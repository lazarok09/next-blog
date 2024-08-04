package authors

import "go.mongodb.org/mongo-driver/bson/primitive"

type Author struct {
	ID          primitive.ObjectID `bson:"_id"`
	DisplayName string             `bson:"displayName"`
	Slug        string             `bson:"slug"`
	PublishedAt primitive.DateTime `bson:"published_at"`
	CreatedAt   primitive.DateTime `bson:"createdAt"`
	UpdatedAt   primitive.DateTime `bson:"updatedAt"`
	CreatedBy   string             `bson:"created_by"`
	UpdateBy    string             `bson:"updated_by"`
}
