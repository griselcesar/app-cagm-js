import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cors("*"));
app.use(morgan("dev"));

import clientsRouter from '../routers/clients.router.js'

app.use('/',clientsRouter)

export default app;
