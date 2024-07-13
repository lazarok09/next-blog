package users_permissions_role

import "go.mongodb.org/mongo-driver/bson/primitive"

type UsersPermissionsRole struct {
	ID primitive.ObjectID `bson:"_id"`
	// Usually referes to the Authenticated or Public state
	Name        string `bson:"name"`
	Description string `bson:"description"`
	// public or authenticated
	Type string `bson:"type"`
}
