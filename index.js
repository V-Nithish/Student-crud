const express  = require("express");
const mysql  = require("mysql2");
const bodyparser = require("body-parser");
const cors  = require("cors")
const app = express()
const port  = 4000
app.use(cors())
app.use(bodyparser.json())
app.listen(port,()=>{
 console.log("server started....")
})

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Nithishsql",
    database:"merncrud"
})
db.connect((err)=>{
    if(err) throw err 
    console.log("DATA BASE CONNECTED")
})

app.get("/getalladmin",(req,res)=>{
    let query  = "select * from registration where role ='Admin';"
    db.query(query,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
app.get("/getallstudent",(req,res)=>{
    let query  = "select * from registration where role = 'Student';"
    db.query(query,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
app.get("/getbyid/:id",(req,res)=>{
    let sql = "select * from registration where id="+req.params.id;
    db.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

app.post("/add",(req,res)=>{
    let sql = "insert into registration set ?";
    let items  = req.body
    db.query(sql,items,(err,result)=>{
        if(err) throw err
        res.send("DATA ENTERED SUCCESSFULLY...")
    })
})

app.put("/update/:id",(req,res)=>{
    let query = "update registration set name=?,email=?,password=?,age=?,role=? where id=?";
    db.query(query,
        [req.body.name,
        req.body.email,
        req.body.password,
        req.body.age,
        req.body.role,
        req.params.id],(err,result)=>{
            if(err) throw err
            res.send("updated successfully")
        })
})
app.post("/login",(req,res)=>{
    let sql = "select * from registration where email=? and password=?"
    const email = req.body.email;
    const password = req.body.password;
    db.query(sql,[email,password],(err,result)=>{
        if(err) throw err
        if(result.length>0){
           const user = result[0]
            if(user.role === "Student"){
                res.send("Student")
            }
            else if(user.role === "Admin"){
                res.send("Admin")
            }
            else{
                res.send("NO ROLE FOUND")
            }
        }
        else{
            res.send("invalid email or password")
        }
    })
})


app.delete("/delete/:id",(req,res)=>{
    let sql = "delete from registration where id=?"
    db.query(sql,req.params.id,(err,result)=>{
        if(err) throw err
        res.send("deleted successfully")
    })
})