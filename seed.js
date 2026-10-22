const { User, Post, Author, Book, Student, Course, Order, Item } = require('./models');

async function seed() {
  const anna = await User.create({ name: 'Anna', email: 'anna@mail.ru' });
  const boris = await User.create({ name: 'Boris', email: 'boris@mail.ru', isActive: false });
  await User.create({ name: 'Ivan', email: 'ivan@mail.ru' });

  await Post.bulkCreate([
    { title: 'Post 1', publishedAt: '2023-05-10', status: 'published', authorId: anna.id },
    { title: 'Post 2', publishedAt: '2024-02-01', status: 'draft', authorId: anna.id },
    { title: 'Post 3', publishedAt: '2022-12-01', status: 'published', authorId: boris.id },
    { title: 'Post 4', publishedAt: '2023-08-20', status: 'published', authorId: boris.id },
  ]);

  const pushkin = await Author.create({ firstName: 'Alexander', lastName: 'Pushkin', country: 'Russia' });
  const tolstoy = await Author.create({ firstName: 'Lev', lastName: 'Tolstoy', country: 'Russia' });
  await Author.create({ firstName: 'Anton', lastName: 'Chekhov', country: 'Russia' });

  await Book.bulkCreate([
    { title: 'Eugene Onegin', year: 1833, genre: 'novel', authorId: pushkin.id },
    { title: 'War and Peace', year: 1869, genre: 'novel', authorId: tolstoy.id },
    { title: 'Anna Karenina', year: 1877, genre: 'novel', authorId: tolstoy.id },
  ]);

  const petr = await Student.create({ name: 'Petr', group: 'IS-21' });
  const maria = await Student.create({ name: 'Maria', group: 'IS-22' });

  const math = await Course.create({ title: 'Math', credits: 5 });
  const history = await Course.create({ title: 'History', credits: 2 });
  const physics = await Course.create({ title: 'Physics', credits: 4 });

  await petr.addCourses([math, physics]);
  await maria.addCourses([history]);

  const order1 = await Order.create({ number: 'A-001', status: 'paid' });
  const order2 = await Order.create({ number: 'A-002' });

  await Item.bulkCreate([
    { productName: 'Pen', quantity: 5, price: 20, orderId: order1.id },
    { productName: 'Notebook', quantity: 3, price: 150, orderId: order1.id },
    { productName: 'Bag', quantity: 1, price: 1200, orderId: order1.id },
    { productName: 'Laptop', quantity: 1, price: 50000, orderId: order2.id },
  ]);
}

module.exports = seed;
