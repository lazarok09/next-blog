package components_menu_menu_links

import "go.mongodb.org/mongo-driver/bson/primitive"

type ComponentsMenuMenuLinks struct {
	Id     primitive.ObjectID `bson:"_id"`
	NewTab bool               `bson:"newTab"`
	Link   string             `bson:"link"`
	Text   string             `bson:"text"`
}
