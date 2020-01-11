const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'app'
});



var startConnection = () => {
    connection.connect();

};

var terminateConnection = () => {
    connection.end();

};


const insertUser = async (req,res) =>{
startConnection();
await connect.query("insert into users (username, password, fName, lname, DOB, Email) Values (?,?,?,?)",
[req.body.username,req.body.password,req.body.fName, req.body.lName, req.body.dob, req.body.email],
(err,res,fields)=>{
    console.log(res);
})
}
const sendCredentialsFound = async (req, res) => {

    startConnection();

    await connection.query("SELECT * FROM users WHERE user_name = ? AND user_password = ?",
        [req.body.username, req.body.password],
        (error, results, fields) => {

            var userFound = false;

            if (error) throw error;

            if (results.length > 0) {
                userFound = !userFound;
            }

            res.send({ isExists: userFound });

        });

    terminateConnection();
};

module.exports = { sendCredentialsFound };