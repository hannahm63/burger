const orm = require("../config/orm");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },

    insertOne: function (newBurgerObj, cb) {
        orm.insertOne("burgers", newBurgerObj, function (res) {
            cb(res);
        })
    },

    updateOne: function (burgerUpdate, colName, colVal, cb) {
        orm.updateOne("burgers", burgerUpdate, colName, colVal, function (res) {
            cb(res);
        })
    }
};

module.exports = burger;