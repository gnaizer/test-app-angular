var faker = require('faker');

var database = { items: [] };

for (var i=1; i<=100; i++) {
  database.items.push({
    id: i,
    name: faker.random.words(),
    cost: faker.random.number(),
    description: faker.random.words(),
    createdAt: faker.date.between('2019-01-01', '2019-11-10'),
    editedAt: faker.date.between('2019-01-01', '2019-11-10')
  });
}

// console.log(JSON.stringify(database));