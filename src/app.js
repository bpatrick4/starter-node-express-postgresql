const express = require("express");
const app = express();

const productsRouter = require("./products/products.router");
const categoriesRouter = require("./categories/categories.router");
const suppliersRouter = require("./suppliers/suppliers.router");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

app.use(express.json());

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/suppliers", suppliersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
