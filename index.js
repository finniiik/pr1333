const { sequelize, User, Post } = require('./models');
const getUsersWithRecentPosts = require('./getUsersWithRecentPosts');

async function main() {
  await sequelize.sync({ force: true });

  const anna = await User.create({ name: 'Anna', email: 'anna@mail.ru' });
  const boris = await User.create({ name: 'Boris', email: 'boris@mail.ru' });
  const ivan = await User.create({ name: 'Ivan', email: 'ivan@mail.ru' });

  await Post.bulkCreate([
    { title: 'Post 1', publishedAt: '2023-05-10', authorId: anna.id },
    { title: 'Post 2', publishedAt: '2024-02-01', authorId: anna.id },
    { title: 'Post 3', publishedAt: '2022-12-01', authorId: boris.id },
    { title: 'Post 4', publishedAt: '2023-03-15', authorId: ivan.id },
  ]);

  const users = await getUsersWithRecentPosts();
  console.log(JSON.stringify(users, null, 2));

  await sequelize.close();
}

main();
