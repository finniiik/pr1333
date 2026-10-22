const { Op } = require('sequelize');
const { User, Post } = require('./models');

async function getUsersWithRecentPosts() {
  return User.findAll({
    include: [{
      model: Post,
      as: 'posts',
      where: { publishedAt: { [Op.gt]: '2023-01-01' } },
      required: true,
    }],
    order: [
      ['name', 'ASC'],
      [{ model: Post, as: 'posts' }, 'publishedAt', 'DESC'],
    ],
  });
}

module.exports = getUsersWithRecentPosts;
