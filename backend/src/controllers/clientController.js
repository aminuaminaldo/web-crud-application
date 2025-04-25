import * as clientServices from "../services/clientServices.js";

export const getClients = async (req, res) => {
  try {
    const clients = await clientServices.getClients();
    res.status(200).json(clients);
  } catch (error) {
    console.error("Error fetching clients:", error);
    res.status(500).json({ message: error.message });
  }
};

export const createClient = async (req, res) => {
  try {
    const client = req.body;
    const createdClient = await clientServices.createClient(client);
    res.status(201).json(createdClient);
  } catch (error) {
    console.error("Error creating client:", error);
    res.status(500).json({ message: error.message });
  }
};
