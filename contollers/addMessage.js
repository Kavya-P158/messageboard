import {insertMessage,fetchMessages} from '../db/queries.js'
export async function addMessage(req,res){
    const {authorname,message}=req.body;
    await insertMessage(authorname,message)
    console.log("INSERT SUCCESS")
// messages.push({text:messagetext,user:authorname,added:new Date()})
res.redirect('/')
}

export async function getAllMessages(){
    const result=await fetchMessages()
    return result
   
    
}