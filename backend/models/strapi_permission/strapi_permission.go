package strapi_permission

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type StrapiPermission struct {
	ID         primitive.ObjectID   `bson:"_id"`
	Conditions []interface{}        `bson:"conditions"`
	Properties PermissionProperties `bson:"properties"`
	CreatedAt  time.Time            `bson:"createdAt"`
	UpdatedAt  time.Time            `bson:"updatedAt"`
	// Points to a StrapiRole _id
	Role primitive.ObjectID `bson:"role"`
}

type PermissionProperties struct {
	Subject *string `bson:"subject"`
	Action  string  `bson:"action"`
}
