const dbConnect=require('./mongodb');

const deleteData=async()=>{ //await is used in async function
    let data=await dbConnect();
    let result=await data.deleteOne({name:'Ali'})
    console.warn(result);
}
deleteData();