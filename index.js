
//Code For DataBase Connection
const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB URL
const client=new MongoClient(url); //to fetch data from the URL/DataBase Code
const DataBase='Students'
/*
async function getdata() //To get result
{
    let result=await client.connect(); //To get fetch data
    let db=result.db(DataBase);
    let collection=db.collection('Data');
    let response=await collection.find({}).toArray();
    console.log(response);
}
getdata();
*/
/*
//To Read Data
const dbConnect= require('./mongodb');

dbConnect().then((resp)=>{
resp.find({name:'nord'}).toArray().then((data)=>{
console.log(data)
})
})

const main=async ()=>{
   let data = await dbConnect();
   data = await data.find({name:'nord'}).toArray();
   console.log(data)
}

main()
*/