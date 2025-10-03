import express from 'express';
import {addMessage,getAllMessages} from './contollers/addMessage.js';
import path from "node:path";
const app=express();
const router=express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
app.set("views",path.join(process.cwd(),"views"))
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))
app.get('/',async(req,res)=>{
  const data=await getAllMessages();
  console.log(data)
  res.render("index",{messages:data})

})
router.get('/new',(req,res)=>{
    res.render("form")
})
router.post('/new',addMessage)
app.use('/',router)
app.listen(3000,()=>{
    console.log("Server is running in port 3000")
})