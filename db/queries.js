import pool from './pool.js'

export async function insertMessage(authorname,message){
    await pool.query("INSERT INTO messages (authorname,message) VALUES ($1,$2)",[authorname,message])
    // messages.push({text:messagetext,user:authorname,added:new Date()})
}

export async function fetchMessages(){
     const {rows}=await pool.query("SELECT * FROM messages ORDER BY id DESC");
     return rows;
}