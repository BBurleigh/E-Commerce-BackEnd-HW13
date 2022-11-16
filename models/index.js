// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
    //unique: false
    // through a unique tag - none of the properties match another tag property
 
})

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
})

// Product and Tag are not parent/child - need a foreign key to connect one to the other (and vice versa)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// designing how these tables are going to talk to each other

// no onDelete, which would delete Products if Category was deleted (ripple effect)