const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'User'
});



const startConnection = () => {
    connection.connect();

};

const terminateConnection = () => {
    connection.end();

};


const insertUser = async (req, res) => {
    startConnection();
    try {
        const insertedRes = await connection.query("insert into user (username, password, fName, lname, DOB, Email) Values (?,?,?,?,?,?)",
            [req.body.username, req.body.password, req.body.fName, req.body.lName, req.body.dob, req.body.email]);
        terminateConnection();
        return insertedRes;
    }
    catch (err) {
        terminateConnection();
        return err;
    }
}

const sendCredentialsFound = async (req, res) => {

    startConnection();
    try {
        let foundUser;
        let sql = `SELECT * FROM user WHERE username = '${req.body.username}' AND password = '${req.body.password}'`;
        console.log(sql);
        await connection.query(sql, (res,err)=>{
            console.log(res);
            if(err) throw err;
            foundUser = res;
        });
        terminateConnection();
        console.log(foundUser);
        return foundUser;
    }
    catch (err) {
        terminateConnection();
        return err;
    }
};

module.exports = { sendCredentialsFound, insertUser };