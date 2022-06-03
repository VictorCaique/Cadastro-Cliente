import mysql from "mysql2";

export default async function connect() {
  //confirma se está conectado com a variavel global
  if (global.connection && global.connection.state != "disconnected") {
    return global.connection;
  }
  const connection = await mysql.createConnection(
    "mysql://root:root@localhost:3306/webii"
  );
  console.log("conectou no MySQL");
  global.connection = connection;
  return connection;
}
