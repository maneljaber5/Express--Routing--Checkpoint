const express=require ("express");
const app=express();
app.set("view engine", "ejs");
app.use(express.json())
app.use("/user", require("./routes/user"));

// app.use("/product", require("./routes/product"));

app.listen(5000, (err) => err?console.log(err): console.log("server is running"));