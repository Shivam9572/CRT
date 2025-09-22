const express = require("express");
const app = express();
const mysql = require('mysql2/promise');

const config = {
    host: "localhost",
    user: "root",
    password: "12345",

};
let db;


app.get("/", async (req, res, next) => {
    try {
        db = await mysql.createConnection(config);
        console.log("connected database");
        let result = await db.query("create database if not exists bus_booking");
        await db.query("use bus_booking");
        await db.query("create table IF NOT EXISTS Users(id int AUTO_INCREMENT primary key,name varchar(250) not null,email varchar(250) not null)");
        await db.query("create table IF NOT EXISTS Buses(id int AUTO_INCREMENT primary key,busNumber int not null,totalSeats int not null,availableSeats int not null)");
        await db.query("create table IF NOT EXISTS Bookings(id int AUTO_INCREMENT primary key,seatNumber int not null)");
        await db.query("create table IF NOT EXISTS Payments(id int AUTO_INCREMENT primary key,amountPaid int not null,amountStatus int not null)");

        res.send("result");
    } catch (error) {
        next(error);
    }
});
app.use((err, req, res, next) => {
    console.log('Express error handler:');
    res.status(500).json({ "message": 'An error occurred', "error": err.message });
});
app.listen(4000, () => {
    console.log("4000 in running server");
})