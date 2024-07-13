package users_permissions_user

import "go.mongodb.org/mongo-driver/bson/primitive"

type UsersPermissionsUser struct {
	ID        primitive.ObjectID `bson:"_id"`
	Confirmed bool               `bson:"confirmed"`
	Blocked   bool               `bson:"blocked"`
	Username  string             `bson:"username"`
	Email     string             `bson:"email"`
	Password  string             `bson:"password"`
	Provider  string             `bson:"provider"`
	CreatedAt primitive.DateTime `bson:"createdAt"`
	UpdatedAt primitive.DateTime `bson:"updatedAt"`
	// Points to the CMS administrator account _id
	CreatedBy primitive.ObjectID `bson:"created_by"`
	// Points to authenticated role
	Role primitive.ObjectID `bson:"role"`
	// Points to the CMS administrator account _id
	UpdatedBy primitive.ObjectID `bson:"updated_by"`
}
