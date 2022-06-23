const url = " ";
const dbpar = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'wpt',
    port: 3306

}
const mysql = require('mysql2');
const con = mysql.createConnection(dbpar);
console.log("database is connecting");

const express = require('express');
const app = express();

app.use(express.static('abc'));

var result;


app.get('/added', function(req, res) {
    let Bookid = req.query.bookid;
    let Bookname = req.query.bookname;
    let Price = req.query.price;
    console.log(Bookid, Bookname, Price);
    let output = { status: false, msg: "books already exist" };
    con.query('insert into book (bookid,bookname,price) values(?,?,?)', [Bookid, Bookname, Price], (err, rows) => {
        if (err) {
            console.log('Error' + err)
        } else {
            if (rows.affectedRows > 0) {
                output.status = true;
                output.msg = "Books information is inserted";
            } else { console.log("no rows affected"); }
        }
        res.send(output);
    });




    /* console.log("reading input " + req.query.xyz);

     var xyz = { v1: 37, v2: 35 };

     res.send(xyz);*/

});










app.use(cors());


const bodyParser = require('body-parser');






app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not



var result;


app.get('/poc2', function(req, res) {


    console.log("reading input " + req.query.xyz);

    var xyz = { v1: 37, v2: 35 };

    res.send(xyz);

});




app.listen(8081, function() {
    console.log("server listening at port 8081...");
});