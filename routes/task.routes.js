const express = require("express");
const {auth} = require("../middlewares/auth.middleware")
const {
    getAllTaskController,
    getSingleTaskController,
    createTaskController,
    updateTaskController,
    deleteTaskController,

} = require("../taskControllers/task.controller");


const taskRouter = express.Router();

// get all task
taskRouter.get("/tasks", getAllTaskController);

// get single task  Note: id is needed
taskRouter.get("/tasks/:id", auth, getSingleTaskController);

// create task
taskRouter.post("/tasks", auth,createTaskController);

// update task  Note: id is needed
taskRouter.put("/tasks/:id", auth,updateTaskController);

// delete task  Note: id is needed
taskRouter.delete("/tasks/:id", auth, deleteTaskController);


module.exports = {
    taskRouter
}

