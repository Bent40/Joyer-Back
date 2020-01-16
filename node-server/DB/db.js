const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Users'
});



var startConnection = () => {
    connection.connect();

};

var terminateConnection = () => {
    connection.end();

};


const insertUser = async (req, res) => {
    startConnection();
    await connect.query("insert into user (username, password, fName, lname, DOB, Email) Values (?,?,?,?,?,?)",
        [req.body.username, req.body.password, req.body.fName, req.body.lName, req.body.dob, req.body.email],
        (err, res, fields) => {
            if(res)
            {
            console.log(res);
            res.send({ createdUser: res });
            }
            else
            {
                console.log(err);
                res.send({err: err});
            }
        })
}

const sendCredentialsFound = async (req, res) => {

    startConnection();
    try{
    const foundUser = await connection.query("SELECT * FROM user WHERE username = ? AND password = ?",
        [req.body.username, req.body.password]);
        terminateConnection();
        console.log(foundUser);
        return foundUser;
    }
    catch(err)
    {
        terminateConnection();
        return err;
    }
};

module.exports = { sendCredentialsFound, insertUser };