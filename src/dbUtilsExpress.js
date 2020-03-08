const express=require('express');
const cors=require('cors');
const mysql=require('mysql');
const app=express()
const SELECT_QUERY='SELECT * FROM products';
const connection=mysql.createConnection({
  host:   'localhost',
  user:'root',
  password:'Tomandjerry2#',
  database: 'sakila'

});
console.log(connection)
connection.connect(err=>{
    if(err){
        return err;
    }
});

app.use(cors());
app.get('/',(req,res)=>{
    console.log("try with /products");
    res.send("try with /product");

});

app.get('/products/add',(req,res)=>{
const {name,price}=req.query;
//console.log(`${name}`);
//console.log(`${price}`);
const ADD_PRD=`INSERT INTO products(name,price) VALUES('${name}','${price}')`;
connection.query(ADD_PRD,(err,results)=>{
    if(err){

res.send("error occurred"+err)
    }
    else{
       res.send("product added successfully!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        }
});
});



app.get('/products',(req,res)=>{
    connection.query(SELECT_QUERY,(err,results)=>{
        if(err){
            return err;
        }
        else{
            return res.json({
           data:results
            });
        }
    });

});

app.listen('4000',()=>{
console.log("listening to 4000")
});
