const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

//conectar creacion de variables api
app.use(express.json());
app.use('/api', userRoutes);


// routes
app.get("/", (req, res) => {
    res.send("Bienvenido a API DEVF");
  });
  
//MOGOOSEE 
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));


app.listen(port,() => console.log('server listening on port',port));
