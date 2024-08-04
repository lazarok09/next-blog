package settings

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type MenuLink struct {
	ID   primitive.ObjectID `bson:"_id"`
	Kind string             `bson:"kind"`
	Ref  primitive.ObjectID `bson:"ref"`
}

type Settings struct {
	ID              primitive.ObjectID `bson:"_id"`
	Published_At    primitive.DateTime `bson:"published_at"`
	BlogDescription string             `bson:"blogDescription"`
	BlogName        string             `bson:"blogName"`
	MenuLink        []MenuLink         `bson:"menuLink"`
	CreatedAt       primitive.DateTime `bson:"createdAt"`
	UpdatedAt       primitive.DateTime `bson:"updatedAt"`
	Text            string             `bson:"text"`
	Logo            primitive.ObjectID `bson:"logo"`
	CreatedBy       primitive.ObjectID `bson:"created_by"`
	UpdatedBy       primitive.ObjectID `bson:"updated_by"`
}
