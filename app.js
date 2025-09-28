import express from 'express';
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
app.get('/',(req,res,next)=>{
    res.render("index",{messages:messages})
    
})
router.get('/new',(req,res)=>{
    res.render("form")
})
router.post('/new',(req,res)=>{
    const {authorname,messagetext}=req.body;
messages.push({text:messagetext,user:authorname,added:new Date()})
res.redirect('/')
})
app.use('/',router)
app.listen(3000,()=>{
    console.log("Server is running in port 3000")
})