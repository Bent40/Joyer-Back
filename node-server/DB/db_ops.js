const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '7869',
    database: 'app'
});



var startConnection = () => {
    connection.connect();

};

var terminateConnection = () => {
    connection.end();

};

var sendCredentialsFound = (userInfo, res) => {

    // startConnection();

    connection.query("SELECT * FROM users WHERE user_name = ? AND user_password = ?",
        [userInfo.user_name, userInfo.user_password],
        (error, results, fields) => {

            var userFound = false;

            if (error) throw error;

            if (results.length > 0) {
                userFound = !userFound;
            }

            res.send({ isExists: userFound });

        });

        // terminateConnection();

};


module.exports = {sendCredentialsFound };