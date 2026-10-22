const sequelize = require('../database');
const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, { foreignKey: 'authorId', as: 'posts' });
Post.belongsTo(User, { foreignKey: 'authorId', as: 'author' });

module.exports = { sequelize, User, Post };
