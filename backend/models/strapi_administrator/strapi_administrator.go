package strapi_administrator

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type StrapiAdministrator struct {
	ID                primitive.ObjectID   `bson:"_id"`
	IsActive          bool                 `bson:"isActive"`
	Blocked           bool                 `bson:"blocked"`
	Roles             []primitive.ObjectID `bson:"roles"`
	Username          string               `bson:"username"`
	RegistrationToken string               `bson:"registrationToken"`
	Email             string               `bson:"email"`
	Password          string               `bson:"password"`
	FirstName         string               `bson:"firstname"`
	LastName          string               `bson:"lastname"`
}
