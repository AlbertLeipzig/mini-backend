import express from "express";
import fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

async function loadJson(filename) {
  const data = await readFile(filename, "utf8");
  return JSON.parse(data);
}

const books = await loadJson("./data/booksData.json");
const customers = await loadJson("./data/customersData.json");
const employees = await loadJson("./data/employeesData.json");
const events = await loadJson("./data/eventsData.json");
const messages = await loadJson("./data/messagesData.json");
const products = await loadJson("./data/productsData.json");
const tasks = await loadJson("./data/tasksData.json");
const users = await loadJson("./data/usersData.json");
const app = express();
const port = 8080;

app.get("/books", (req, res) => {
  res.send(books);
});

app.use("/customers", (req, res) => {
  res.send(customers);
});

app.use("/employees", (req, res) => {
  res.send(employees);
});

app.use("/events", (req, res) => {
  res.send(events);
});

app.use("/messages", (req, res) => {
  res.send(messages);
});

app.use("/products", (req, res) => {
  res.send(products);
});

app.use("/tasks", (req, res) => {
  res.send(tasks);
});

app.use("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
