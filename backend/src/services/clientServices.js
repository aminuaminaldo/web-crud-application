import { query } from "../db.js";

export const getClients = async () => {
  const result = await query("SELECT * FROM clients_db");
  return result.rows;
};

export const createClient = async (client) => {
  const { name, email, job, rate, isactive } = client;
  const result = await query(
    "INSERT INTO clients_db (name, email, job, rate, isactive) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, email, job, rate, isactive]
  );
  return result.rows[0];
};

export const updateClient = async (id, client) => {
  const { name, email, job, rate, isactive } = client;
  const result = await query(
    "UPDATE clients_db SET name = $1, email = $2, job = $3, rate = $4, isactive = $5 WHERE id = $6 RETURNING *",
    [name, email, job, rate, isactive, id]
  );
  return result.rows[0];
};

export const deleteClient = async (id) => {
  const result = await query(
    "DELETE FROM clients_db WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
