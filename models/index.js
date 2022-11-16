// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Products.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

// Categories have many Products

Category.hasMany(Products, {
  foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// designing how these tables are going to talk to each other

// no onDelete, which would delete Products if Category was deleted (ripple effect)