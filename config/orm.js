const connection = require("./connection");

const orm = {

    selectAll: function (tableName) {

        const queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableName], function (error, results) {
            if (error) throw error;
            return results;
        })
    },

    insertOne: function (tableName, newBurger) {

        const queryString = "INSERT INTO ?? SET ?";

        connection.query(queryString, [tableName, newBurger], function (error, results) {
            if (error) throw error;



        })

    },

    updateOne: function () {

    }
}