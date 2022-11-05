// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// TODO: Products belongsTo Category
Product.belongsTo(Category)

// TODO: Categories have many Products
Category.hasMany(Product)

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
  model: ProductTag,
  foreignKey: 'product_id',
  },
  as: 'product_tags',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
  model: ProductTag,
  foreignKey: 'tag_id',
  },
  as: 'product_tags',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
