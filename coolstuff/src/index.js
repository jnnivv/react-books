const express = require ('express')
const bodyparser = require ('body-parser')
const mysql = require('mysql')
const app = express()

app.use(bodyparser.json())

var status = "whatever u want"
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}


app.use(allowCrossDomain);


const connection = mysql.createConnection({
  host: 'mysql-inst1.cxieniygt7cl.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'b6Al}Z10C87Ib5e',
  database: 'test_db',
  port: 3306
})

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected")
})

app.get('/customer', (req, res) => {
  connection.query('SELECT * FROM salesperson', (err, rows) => {
    if (err) throw err
    console.log('Data received')
    console.log(rows)
  })
})

app.get("/add", (req, res) => {

  const q = `SELECT * FROM books WHERE lower(books.title) LIKE '%${req.query.title}%';`

  connection.query(q, (err, rows) => {
    if (err) throw err
    console.log('Data received')
    console.log(rows)
    res.send(JSON.stringify(rows)) //sends to whoever asked
  })

})

app.post("/post", (req,res) => {
  status = req.body.status
  console.log(req)
  res.send("status changed to " + status)
})
app.listen(3000, () => console.log("server started bish"))