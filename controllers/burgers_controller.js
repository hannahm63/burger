const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.selectAll(function (results) {
        // insert results into handlebars object to be displayed on page when called
        res.render("index", { burgers: results });
    })
});

router.post("/api/burgers", function (req, res) {
    // newBurgerObj???? should be req.body????
    burger.insertOne(newBurgerObj, function (results) {
        res.json({ id: results.insertId });
    })
});

router.put("/api/burgers/:id", function (req, res) {
    const burgerId = req.params.id;
    // burgerUpdate??? should be an object with the property being updated and a value of req.body.something
    burger.updateOne(burgerUpdate, "id", burgerId, function (results) {
        if (results.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

module.exports = router;