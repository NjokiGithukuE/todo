// import express from "express";
const express = require("express");
// import db from "./db/db";
const db = require("./db/db");

const bodyParser = require("body-parser");
// const todos = require("./db/db");
const router = require("./todo/db/routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router)

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
