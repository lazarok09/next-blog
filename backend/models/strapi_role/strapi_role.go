package strapi_role

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type StrapiRole struct {
	ID          primitive.ObjectID `bson:"_id"`
	Name        string             `bson:"name"`
	Code        string             `bson:"code"`
	Description string             `bson:"description"`
	CreatedAt   primitive.DateTime `bson:"createdAt"`
	UpdatedAt   primitive.DateTime `bson:"updatedAt"`
}
