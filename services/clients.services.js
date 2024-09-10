import clientsModel from "../models/clients.model.js";

export const getAllClients = async () => {
  let clients = await clientsModel.find();
  return clients;
};

export const getClientById = async (id) => {
  let client = await clientsModel.findById(id);
  return client;
};

export const getClientByRIF = async (rif) => {
  let client = await clientsModel.findOne({rif});
  return client;
};

export const createOneClient = async (dataClient) => {
  let client = await clientsModel.create(dataClient);
  return client;
};

export const deleteClientById = async (id) => {
  let client = await clientsModel.findByIdAndDelete(id);
  return client;
};

export const updateClientById = async (id, dataClientNew) => {
  let client = await clientsModel.findByIdAndUpdate(id, dataClientNew, {
    new: true,
  });
  return client;
};
