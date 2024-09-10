import { Router } from "express";
import {
  createOneClientControl,
  deleteClientByIdControl,
  getAllClientsControl,
  getClientByIdControl,
  updateClientByIdControl,
} from "../controllers/clients.controller.js";
import {
  clientCreateValidate,
  clientUpdateValidate,
} from "../middlewares/clients.odt.js";

const clientsRouter = Router();

clientsRouter
  .route("/")
  .get(getAllClientsControl)
  .post(clientCreateValidate, createOneClientControl);
clientsRouter
  .route("/:id")
  .get(getClientByIdControl)
  .put(clientUpdateValidate, updateClientByIdControl)
  .delete(deleteClientByIdControl);

export default clientsRouter;
