var mysql = require('mysql');
  console.log("printing json object"+JSON.stringify(mysql))
  var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'Tomandjerry2#',
     database: 'sakila'
   })
    console.log("Printing value of connect=="+connection);
    connection.connect();
    console.log("connected")
    connection.query('SELECT * from actor limit 10', function (err, datas, fields) {
    if (err) throw err
    datas.forEach(elements=>{
      console.log(JSON.stringify(elements))
     });
  })
  connection.end();
