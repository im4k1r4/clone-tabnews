// 1. AQUI CRIAMOS A PONTE.
import database from "../../../../infra/database.js";

async function status(request, response) {
  // 2. AQUI FAZEMOS O PEDIDO.
  const result = await database.query("SELECT 1 + 1 AS SUM;");
  // 5. AQUI CHEGA A RESPOSTA.
  console.log(result.rows);
  response.status(200).json({ status: "ok" });
}

export default status;
