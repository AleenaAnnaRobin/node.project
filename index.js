const student=require("./student");
const http=require("http");
const dotenv=require("dotenv");
const express=require("express")
const mongoose=require("mongoose")
const taskControllers=require("./controller/taskController");
dotenv.config();


const app=express();
app.use(express.json());

app.post("/tasks",taskControllers.createTask);
app.get("/tasks",taskControllers.getTask);

app.patch("/tasks/:id",taskControllers.updateTask);
app.get("/tasks/:id",taskControllers.getTaskById);
app.delete("/tasks/:id",taskControllers.deleteTask);

app.get("/:id",(req,res)=>{
    res.status(200).json({
        message:"hello",
        id: req.params.id
    });
})

app.post("/",(req,res)=>{
    res.status(200).json(req.body);
});

mongoose.connect("mongodb+srv://aleenaannarobin:Anna%407227@cluster0.yi26tkv.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("db connect")
    
    }).catch((err) =>{
        console.log(err);
    })
app.listen(process.env.PORT,()=>{
    console.log("Server running on ",process.env.PORT);
})

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end("hello world");
// })

// server.listen(process.env.PORT,()=>{
//     console.log("Server is running on ",process.env.PORT);
// })


