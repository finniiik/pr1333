const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Post = sequelize.define('Post', {
  title: { type: DataTypes.STRING, allowNull: false },
  publishedAt: { type: DataTypes.DATE, allowNull: false },
});

module.exports = Post;
