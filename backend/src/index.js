import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import dotenv from "dotenv"
import {DBConnect } from './DB/database.js'
import express from 'express';
import router from './routes/todoRoutes.js';

import cors from "cors";




////

dotenv.config()
// const result = dotenv.config()
// console.log(result.parsed);


// configure application
const app = express();

// define middleware
app.use(express.json())

app.use(cors());

// define routes
app.use( '/api/v1', router );


console.log(process.env.HELLO);

// connect to database
  await DBConnect();

//  export const  todos = [
//   {
//     id: 1,
//     title: "Buy groceries",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "Finish React project",
//     completed: true,
//   },
//   {
//     id: 3,
//     title: "Read 20 pages of a book",
//     completed: false,
//   },
//   {
//     id: 4,
//     title: "Exercise for 30 minutes",
//     completed: true,
//   },
//   {
//     id: 5,
//     title: "Reply to emails",
//     completed: false,
//   },
//   {
//     id: 6,
//     title: "Clean the workspace",
//     completed: true,
//   },
//   {
//     id: 7,
//     title: "Plan the weekend",
//     completed: false,
//   },
// ];





// app.use(errorHandler)


// console.log(process.env.PORT);

// start application
const Port = process.env.PORT
app.listen(Port, () =>
  console.info(`🚀  Application running at localhost:${Port}  🚀`)
);