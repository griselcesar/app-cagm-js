import {
  createOneClient,
  deleteClientById,
  getAllClients,
  getClientById,
  updateClientById,
} from "../services/clients.services.js";

export const getAllClientsControl = async (req, res) => {
  const clients = await getAllClients();
  return res.status(200).json(
    clients.map((client) => {
      return {
        id: client._id,
        rif: client.rif,
        name: client.name,
        address: client.address,
        phone: client.phone,
      };
    })
  );
};

export const getClientByIdControl = async (req, res) => {
  let { id } = req.params;
  const client = await getClientById(id);
  if (!client) {
    return res.status(404).json({ message: "cliente no encontrado" });
  }
  return res.status(200).json({
    id: client._id,
    rif: client.rif,
    name: client.name,
    address: client.address,
    phone: client.phone,
  });
};

export const createOneClientControl = async (req, res) => {
  let { data } = req.body;
  const client = await createOneClient(data);
  return res.status(201).json({
    message: "cliente creado correctamente",
    cliente: {
      id: client._id,
      rif: client.rif,
      name: client.name,
      address: client.address,
      phone: client.phone,
    },
  });
};

export const updateClientByIdControl = async (req, res) => {
  let { id } = req.params;
  let { data } = req.body;
  const client = await updateClientById(id, data);
  if (!client) {
    return res.status(404).json({ message: "cliente no encontrado" });
  }
  return res.status(200).json({
    message: "cliente actualizado correctamente",
    cliente: {
      rif: client.rif,
      name: client.name,
      address: client.address,
      phone: client.phone,
    },
  });
};

export const deleteClientByIdControl = async (req, res) => {
  let { id } = req.params;
  const client = await deleteClientById(id);
  if (!client) {
    return res.status(404).json({ message: "cliente no encontrado" });
  }
  return res.status(200).json({
    message: "cliente eliminado correctamente",
    cliente: {
      rif: client.rif,
      name: client.name,
      address: client.address,
      phone: client.phone,
    },
  });
};
