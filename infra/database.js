import { Client } from "pg";

// 3. AQUI RECEBEMOS O PEDIDO.
async function query(QueryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();
  // 4. AQUI O TRABALHO ACONTECE.
  const result = await client.query(QueryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
