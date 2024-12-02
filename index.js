const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./config/db");
const app = express(); 
app.use(cors()); // cors policy handler
app.use(express.json());  // to handle json data
const {userRouter} = require("./routes/user.routes")
const { taskRuter } = require("./routes/task.routes");
app.use("/api", taskRuter);
app.use("/users", userRouter)
app.get("/",(req,res)=>{
    res.send({"msg":"welcome"})
})
const port = process.env.port || 5000    // if enviroment variable is not defined then by default it will run on port 5000
app.listen(port, async () => {   
  try {
    await connectDB;
    console.log(`server is running on port ${port}`);
    console.log("connected to mongoDB data base");
  } catch (err) {
    console.log(err);
  }
});
