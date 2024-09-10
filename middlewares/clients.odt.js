import { getClientById, getClientByRIF } from "../services/clients.services.js";

export const clientCreateValidate = async (req, res, next) => {
  let { rif, name, address, phone } = req.body;
  if (!rif || !name || !address || !phone) {
    return res.status(400).json({
      message: "datos requeridos no enviados",
      datos: { name: "text", address: "text", phone: "number", rif: "text" },
    });
  }
  let client = await getClientByRIF(rif);
  if (client) {
    return res
      .status(400)
      .json({ message: "el rif ya se encuentra registrado" });
  }
  req.body.data = { rif, name, address, phone };
  next();
};

export const clientUpdateValidate = async (req, res, next) => {
  let { rif, name, address, phone } = req.body;
  let { id } = req.params;
  if (!rif || !name || !address || !phone) {
    return res.status(400).json({
      message: "datos requeridos no enviados",
      datos: { name: "text", address: "text", phone: "number", rif: "text" },
    });
  }
  let client = await getClientById(id);
  if (rif !== client.rif) {
    let exist = await getClientByRIF(rif);
    if (exist) {
      return res
        .status(400)
        .json({ message: "el rif ya se encuentra registrado" });
    }
  }
  req.body.data = { rif, name, address, phone };
  next();
};
