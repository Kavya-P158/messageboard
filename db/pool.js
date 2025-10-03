import { Pool } from "pg";
import { Client } from "pg";
import dotenv from 'dotenv';
dotenv.config()
console.log({
    connectionString:process.env.DB_URL
})
export default new Pool({
    connectionString:process.env.DB_URL,
     ssl: {
    rejectUnauthorized: false,   // ✅ Required for Render
  },
})

// async function testDB () {
//   try {
//     const client = await pool.connect();
//     console.log("✅ Database connection successful!");
//     client.release();
//   } catch (err) {
//     console.error("❌ Database connection failed:", err.message);
//   }
// }
// testDB();




// const SQL = `
// CREATE TABLE IF NOT EXISTS messages (
//   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//   authorname VARCHAR ( 255 ),
//   message VARCHAR (255)
// );

// INSERT INTO messages (authorname,message) 
// VALUES
//   ('Bryan', 'Hello, World!'),
//   ('Odin', 'What a wonderful day!'),
//   ('Damon', 'I love programming!');
// `;

// async function main() {
//   console.log("seeding...");
//   const client = new Client( {connectionString:process.env.DB_URL,
//      ssl: {
//     rejectUnauthorized: false,   // ✅ Required for Render
//   }});
//   await client.connect();
//   await client.query(SQL);
//   await client.end();
//   console.log("done");
// }

// main();

