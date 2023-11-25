import { Client } from 'pg';

const client = new Client();
const connectDB = async () => {
  await client.connect();
};

connectDB();

export { client };
