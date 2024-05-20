const express=require('express');
const dbConnect=require('./mongodb');
const app=express();
app.use(express.json());

app.get('/',async(req,resp)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data)
    resp.send(data)

});
app.post('/',async (req,resp)=>{
    let data=await dbConnect();
    let result=await data.insert(req.body)
    resp.send(req.body)
})
app.put("/:name",async(req,resp)=>{
    let data =await dbConnect();
    let result=data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    resp.send({result:"Update"})
})
app.delete("/:id",async(req,resp)=>{
    const data=await dbConnect()
    const result=await data.deleteOne({id:new mongodb.Objectid(req.params.id)})
    resp.send("done")
})
app.listen(5000)

