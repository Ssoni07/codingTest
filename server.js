const express = require("express");
const router = require("./router/api.router");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use('/api',router);

app.listen(PORT,()=>{
    console.log(`server started on port localhost:${PORT}`);
})