package users_permissions_permission

import "go.mongodb.org/mongo-driver/bson/primitive"

type UsersPermissionsPermission struct {
	ID   primitive.ObjectID `bson:"_id"`
	Type string             `bson:"type"`

	Controller string `bson:"controller"`

	// points to update, create, delete and others TODO: find the enum
	Action  string `bson:"action"`
	Enabled bool   `bson:"enabled"`
	Policy  string `bson:"policy"`
	// Points to the UsersPermissionsRole struct id
	Role primitive.ObjectID `bson:"role"`
}
