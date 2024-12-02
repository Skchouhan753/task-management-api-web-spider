# RESTful API for a Task Management System

## Introduction
A Task Management System API is an interface that allows developers to interact with a task management system programmatically. This API enables users to create, read, update, and delete tasks within the task management system without directly accessing its interface.

## Project Type
Backend 

## Deplolyed App
Backend: https://task-management-system-iqjo.onrender.com/ <br/>
Database: mongodb+srv://kumarS:kumar@cluster0.kfih6hj.mongodb.net/FLUIDAI?retryWrites=true&w=majority&appName=Cluster0<br/>

## Directory Structure
task-management-system<br/>
├─ backend<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ config<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ db.js<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ middleware<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ auth.middleware.js<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ model<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ task.model.js<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ user.model.js<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ blacklist.model.js<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ routes<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ user.routes.js<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ task.routes.js<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ index.js<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ package.json<br/>

## Video Walkthrough of the project
[video walkthough of all of the features](https://youtu.be/Zw2lwjOq1PA)

## Video Walkthrough of the codebase
[video walkthough of codebase ](https://youtu.be/P_VHSc9-fZs)

## Features
List out the key features of your application.

- user authentication 
- manage task (CRUD)  

## Installation & Getting started
Instructions on how to install, configure, and get the project running.

```bash
mkdir task-management-system
git clone https://github.com/Skchouhan753/task-management-system
cd task-management-system

Installation
- you can use any node version that works for you ( 18+ )
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm run server or npm run start** to run the server locally
- Run **npm test** for the test cases.
```

## Usage
Instructions and examples on to use.

```bash
Enviroment
mongoURI=mongodb+srv://kumarS:kumar@cluster0.kfih6hj.mongodb.net/FLUIDAI?retryWrites=true&w=majority&appName=Cluster0
                    or
mongoURI=mongodb://127.0.0.1:27017/FLUIDAI

PORT=8080

SECRET_CODE=fluidai

# Example

POST: http://localhost:8080/
              or
      https://task-management-system-iqjo.onrender.com/

        {
            "msg": "wlcome"
        }

Register a user
POST: http://localhost:8080/register
                 or
      https://task-management-system-iqjo.onrender.com/register

        {
             "username":"fluidai",
             "email":"fluidai@gmail.com",
             "password":"1234",
             "role":"admin" / "user"  default : "user"
        }

Login
POST: http://localhost:8080/login
                or
      https://task-management-system-iqjo.onrender.com/login

        {
             "email":"fluidai@gmail.com",
             "password":"1234"
        }

Logout
GET: http://localhost:8080/logout
                or
     https://task-management-system-iqjo.onrender.com/logout

Create Task
POST: http://localhost:8080/task/create
                    or
      https://task-management-system-iqjo.onrender.com/task/create

        {
            "title":"work"
            "description":"home work"
            "dueDate":2024-12-01T18:30:00.000+00:00
            "priority":"low" / "medium" / "high"       default : "low"
            "status":"todo" / "inprogress" / "done"    default : "done"
        }

Retrieve all task ( you need to login first to access this and while GET request you have to provide token )
GET: http://localhost:8080/task/
                or
     https://task-management-system-iqjo.onrender.com/task/

    [
        {
            "_id": "6610352efe0cd5e737f45820",
            "title":"work",
            "description":"home work",
            "dueDate":2024-12-01T18:30:00.000+00:00,
            "priority":"low",
            "status":"done"
        },
        {
            "_id": "6610352efe0cd5e737f45820",
            "title":"office work",
            "description":"get details of employee",
            "dueDate":2024-12-01T18:30:00.000+00:00,
            "priority":"low",
            "status":"done"
        },
        {
            "_id": "6610352efe0cd5e737f45820",
            "title": "tommo",
            "description": "String",
            "dueDate": "2024-12-01T18:30:00.000Z",
            "priority": "low",
            "status": "done"
        }
    ]

Retrieve single task by id
GET: http://localhost:8080/task/id
                or
     https://task-management-system-iqjo.onrender.com/task/id

        {
            "_id": "6610352efe0cd5e737f45820",
            "title":"work",
            "description":"home work",
            "dueDate":2024-12-01T18:30:00.000+00:00,
            "priority":"low",
            "status":"done"
        }

Update task
PATCH: http://localhost:8080/task/id
                    or
       https://task-management-system-iqjo.onrender.com/task/id

        {
            "title":"work24"
            "description":"office work"
            "dueDate":2024-12-01T18:30:00.000+00:00
            "priority":"medium",
            "status":"done"
        }

Delete task
DELETE: http://localhost:8080/taskk/id
                    or
        https://task-management-system-iqjo.onrender.com/task/id
```

Include screenshots as necessary.


## API Endpoints
**welcome**<br/>
GET: http://localhost:8080/ or https://task-management-system-iqjo.onrender.com/ - welcome <br/>
**user authentication**<br/>
POST: http://localhost:8080/register or https://task-management-system-iqjo.onrender.com/register - register user <br/>
POST: http://localhost:8080/login or https://task-management-system-iqjo.onrender.com/login - user login<br/>
GET: http://localhost:8080/logout or https://task-management-system-iqjo.onrender.com/logout - user logout<br/>
<br/>
**task endpoints**<br/>
GET: http://localhost:8080/task/ or https://task-management-system-iqjo.onrender.com/task/ - retrieve all all tasks <br/>
GET: http://localhost:8080/task/id or https://task-management-system-iqjo.onrender.com/task/id - retrieve single task<br/>
POST: http://localhost:8080/task/create or https://task-management-system-iqjo.onrender.com/task/create - create task<br/>
PATCH: http://localhost:8080/task/id or https://task-management-system-iqjo.onrender.com/task/id - update task<br/>
DELETE: http://localhost:8080/taskk/id or https://task-management-system-iqjo.onrender.com/task/id - delete task<br/>

## Technology Stack
List and provide a brief overview of the technologies used in the project.

- Node.js
- Express.js
- MongoDB


