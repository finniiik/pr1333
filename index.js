const { sequelize } = require('./models');
const seed = require('./seed');
const q = require('./queries');

function print(title, data) {
  console.log(`\n${title}`);
  console.log(JSON.stringify(data, null, 2));
}

async function main() {
  await sequelize.sync({ force: true });
  await seed();

  print('1. getUsersWithRecentPosts', await q.getUsersWithRecentPosts());
  print('2. getAllAuthorsIncludingEmpty', await q.getAllAuthorsIncludingEmpty());
  print('3. getStudentsInAdvancedCourses', await q.getStudentsInAdvancedCourses());
  print('4. getOrdersWithBulkItems', await q.getOrdersWithBulkItems());
  print('5. getActiveUsersWithPublishedPosts', await q.getActiveUsersWithPublishedPosts());

  await sequelize.close();
}

main();
