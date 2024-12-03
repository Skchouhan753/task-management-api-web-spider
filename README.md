# RESTful API for a Task Management System

## Introduction
A Task Management System API is an interface that allows developers to interact with a task management system programmatically. This API enables users to create, read, update, and delete tasks within the task management system without directly accessing its interface.

## Project Type
Backend 

## Directory Structure
task-management-system<br/>
├─ backend<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ config<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ db.js<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ middlewares<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ auth.middleware.js<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ models<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ task.model.js<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ user.model.js<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ routes<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ user.routes.js<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ task.routes.js<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ index.js<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ package.json<br/>

## Features
List out the key features of your application.

- user authentication 
- manage task (CRUD)  

## Installation & Getting started
Instructions on how to install, configure, and get the project running.

```bash
mkdir task-management-system
git clone https://github.com/Skchouhan753/task-management-api-web-spider
cd task-management-system

Installation
- you can use any node version that works for you ( 18+ )
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm run server or npm run start** to run the server locally
```

## Usage
Instructions and examples on to use.

```bash
Enviroment
mongoURI=mongodb://127.0.0.1:27017/ws

PORT=8080

SECRET_CODE=web-spider

# Example

POST: http://localhost:8080/

        {
            "msg": "wlcome"
        }

Register a user
POST: http://localhost:8080/register         

        {
             "username":"fluidai",
             "email":"fluidai@gmail.com",
             "password":"1234",
             "role":"admin" / "user"  default : "user"
        }

Login
POST: http://localhost:8080/login
             
        {
             "email":"fluidai@gmail.com",
             "password":"1234"
        }


Create Task
POST: http://localhost:8080/task/create
                
        {
            "title":"work"
            "description":"home work"
            "status": "TODO", "IN_PROGRESS", "COMPLETED"
            "priority": "LOW", "MEDIUM", "HIGH"
            "dueDate":2024-12-01T18:30:00.000+00:00
            "createdAttype": 2024-12-01T18:30:00.000+00:00
            "updatedAt": 2024-12-01T18:30:00.000+00:00    
        }

Retrieve all task ( you need to login first to access this and while GET request you have to provide token )
GET: http://localhost:8080/api/tasks/      

    [
        {
            "_id": "6610352efe0cd5e737f45820",
            "title":"work",
            "description":"home work",
            "dueDate":2024-12-01T18:30:00.000+00:00,
            "priority":"LOW",
            "status":"TODO"
        },
        {
            "_id": "6610352efe0cd5e737f45820",
            "title":"office work",
            "description":"get details of employee",
            "dueDate":2024-12-01T18:30:00.000+00:00,
            "priority":"HIGH",
            "status":"COMPLETED"
        },
        {
            "_id": "6610352efe0cd5e737f45820",
            "title": "work",
            "description": "home work",
            "dueDate": "2024-12-01T18:30:00.000Z",
            "priority": "MEDIUM",
            "status": "COMPLETED"
        }
    ]

Retrieve single task by id
GET: http://localhost:8080/api/tasks/id

        {
            "_id": "6610352efe0cd5e737f45820",
            "title":"work",
            "description":"home work",
            "dueDate":2024-12-01T18:30:00.000+00:00,
            "priority":"MEDIUM",
            "status":"COMPLETED"
        }

Update task
PATCH: http://localhost:8080/api/tasks/id
               
        {
            "title":"work24"
            "description":"office work"
            "dueDate":2024-12-01T18:30:00.000+00:00
            "priority":"MEDIUM",
            "status":"COMPLETED"
        }

Delete task
DELETE: http://localhost:8080/taskk/id

```


## API Endpoints
**welcome**<br/>
GET: http://localhost:8080/ - welcome <br/>
**user authentication**<br/>
POST: http://localhost:8080/users/register - register user <br/>
POST: http://localhost:8080/users/login - user login<br/>
<br/>
**task endpoints**<br/>
GET: http://localhost:8080/api/tasks/ - retrieve all all tasks <br/>
GET: http://localhost:8080/api/tasks/id - retrieve single task<br/>
POST: http://localhost:8080/api/tasks - create task<br/>
PATCH: http://localhost:8080/api/tasks/id - update task<br/>
DELETE: http://localhost:8080/api/tasks/id - delete task<br/>

## Technology Stack
List and provide a brief overview of the technologies used in the project.

- Node.js
- Express.js
- MongoDB

## Code Editor

- VS Code

## Official Documentation

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript
- https://expressjs.com
- https://www.npmjs.com
