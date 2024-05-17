import express from 'express';

import books from './data/booksData.json' assert { type: 'json' };
import customers from './data/customersData.json' assert { type: 'json' };
import employees from './data/employeesData.json' assert { type: 'json' };
import events from './data/eventsData.json' assert { type: 'json' };
import messages from './data/messagesData.json' assert { type: 'json' };
import products from './data/productsData.json' assert { type: 'json' };
import tasks from './data/tasksData.json' assert { type: 'json' };
import users from './data/usersData.json' assert { type: 'json' };

const app = express();
const port = 8080;

app.use('/books', (req, res) => {
  res.send(books);
});

app.use('/customers', (req, res) => {
  res.send(customers);
});

app.use('/employees', (req, res) => {
  res.send(employees);
});

app.use('/events', (req, res) => {
  res.send(events);
});

app.use('/messages', (req, res) => {
  res.send(messages);
});

app.use('/products', (req, res) => {
  res.send(products);
});

app.use('/tasks', (req, res) => {
  res.send(tasks);
});

app.use('/users', (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
