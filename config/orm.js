const connection = require("./connection");

const orm = {
    selectAll: function (tableName, cb) {

        const queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableName], function (error, results) {
            if (error) throw error;
            cb(results);
        });
    },

    insertOne: function (tableName, newObj, cb) {

        const queryString = "INSERT INTO ?? SET ?";

        connection.query(queryString, [tableName, newObj], function (error, results) {
            if (error) throw error;
            cb(results);
        });

    },

    updateOne: function (tableName, burgerUpdate, columnName, columnValue, cb) {
        const queryString = "UPDATE ?? SET ? WHERE ?? = ?";

        connection.query(queryString, [tableName, burgerUpdate, columnName, columnValue], function (error, results) {
            if (error) throw error;
            cb(results);
        });

    }
};

module.exports = orm;