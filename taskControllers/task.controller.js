import taskModel from "../models/task.model.js";
const Joi = require('joi');

// Validation schema
const taskValidationSchema = Joi.object({
    title: Joi.string().max(100).required(),
    description: Joi.string().optional(),
    status: Joi.string().valid('TODO', 'IN_PROGRESS', 'COMPLETED'),
    priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH'),
    dueDate: Joi.date().optional(),
  });

// get all Tasks
const getAllTaskController = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).send({
      success: true,
      message: "showing all task successfully",
      tasks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};

// get single task
const getSingleTaskController = async (req, res) => {
  try {
    // get task id
    const task = await taskModel.findById(req.params.id);
    //valdiation
    if (!task) {
      return res.status(404).send({
        success: false,
        message: "task not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "task Found",
      task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};

// create task
const createTaskController = async (req, res) => {
  try {
    const { error } = taskValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error });

    const {
      title,
      description,
      status,
      priority,
      dueDate,
      createdAttype,
      updatedAt,
    } = req.body;

    await taskModel.create({
      title,
      description,
      status,
      priority,
      dueDate,
      createdAttype,
      updatedAt,
    });

    res.status(201).send({
      success: true,
      message: "task Created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};

// update task
const updateTaskController = async (req, res) => {
  try {

    const { error } = taskValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error });


    // find task
    const task = await taskModel.findById(req.params.id);
    //valdiatiuon
    if (!task) {
      return res.status(404).send({
        success: false,
        message: "task not found!",
      });
    }
    const { title, description, status, priority, dueDate,createdAttype,updatedAt } = req.body;
    // validate and update
    if (title) task.title = title;
    if (description) task.description = description;
    if (status) task.status = status;
    if (priority) task.priority = priority;
    if (dueDate) task.dueDate = dueDate;
    if (createdAttype) task.createdAttype = createdAttype;
    if (dueDate) task.updatedAt = updatedAt;

    await task.save();
    res.status(200).send({
      success: true,
      message: "task details updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};


// delete task
const deleteTaskController = async (req, res) => {
  try {
    // find task
    const task = await taskModel.findById(req.params.id);
    // validation
    if (!task) {
      return res.status(404).send({
        success: false,
        message: "task not found",
      });
    }
 
    await task.deleteOne();
    res.status(200).send({
      success: true,
      message: "task deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};

module.exports = {
    getAllTaskController,
    getSingleTaskController,
    createTaskController,
    updateTaskController,
    deleteTaskController
}