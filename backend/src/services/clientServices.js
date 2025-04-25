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
