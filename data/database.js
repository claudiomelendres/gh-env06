import { MongoClient } from "mongodb";

const clusterAddress =
  process.env.MONGODB_CLUSTER_ADDRESS || "cluster0.9xxlj.mongodb.net";
const dbUser = process.env.MONGODB_USERNAME || "cayo999";
const dbPassword = process.env.MONGODB_PASSWORD || "jdaniel3210.";
const dbName = process.env.MONGODB_DB_NAME || "eshop-database";

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority`;
// mongodb+srv://cayo999:jdaniel3210.@cluster0.9xxlj.mongodb.net/eshop-database?retryWrites=true&w=majority
const client = new MongoClient(uri, { useNewUrlParser: true });

console.log("Trying to connect to db");

try {
  await client.connect();
  await client.db(dbName).command({ ping: 1 });
  console.log("Connected successfully to server");
} catch (error) {
  console.log("Connection failed.");
  await client.close();
  console.log("Connection closed.");
}

const database = client.db(dbName);

export default database;
