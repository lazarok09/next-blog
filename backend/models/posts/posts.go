package posts

import "go.mongodb.org/mongo-driver/bson/primitive"

type Post struct {
	Id            primitive.ObjectID   `bson:"_id"`
	AllowComments bool                 `bson:"allowComments"`
	Tags          []primitive.ObjectID `bson:"tags"`
	Categories    []primitive.ObjectID `bson:"categories"`
	Title         string               `bson:"title"`
	Slug          string               `bson:"slug"`
	Excerpt       string               `bson:"excerpt"`
	Content       string               `bson:"content"`
	PublishedAt   primitive.DateTime   `bson:"published_at"`
	CreatedAt     primitive.DateTime   `bson:"createdAt"`
	UpdatedAt     primitive.DateTime   `bson:"updatedAt"`
	CreatedBy     primitive.ObjectID   `bson:"created_by"`
	UpdatedBy     primitive.ObjectID   `bson:"updated_by"`
	Author        primitive.ObjectID   `bson:"author"`
	Cover         primitive.ObjectID   `bson:"cover"`
}
