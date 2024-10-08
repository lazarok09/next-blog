package posts

import (
	"github.com/lazarok09/go-blog/models/categories"
	"github.com/lazarok09/go-blog/models/tags"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Post struct {
	ID            primitive.ObjectID    `bson:"_id"`
	AllowComments bool                  `bson:"allowComments"`
	Tags          []tags.Tag            `bson:"tags"`
	Categories    []categories.Category `bson:"categories"`
	Title         string                `bson:"title"`
	Slug          string                `bson:"slug"`
	Excerpt       string                `bson:"excerpt"`
	Content       string                `bson:"content"`
	PublishedAt   primitive.DateTime    `bson:"published_at"`
	CreatedAt     primitive.DateTime    `bson:"createdAt"`
	UpdatedAt     primitive.DateTime    `bson:"updatedAt"`
	CreatedBy     primitive.ObjectID    `bson:"created_by"`
	UpdatedBy     primitive.ObjectID    `bson:"updated_by"`
	Author        primitive.ObjectID    `bson:"author"`
	Cover         primitive.ObjectID    `bson:"cover"`
}
