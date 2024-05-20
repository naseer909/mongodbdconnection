const { MongoCryptInvalidArgumentError } = require('mongodb');
const dbConnect=require('./mongodb');

const updateData=async()=>{
    let data=await dbConnect();
    //To update single data
    //To update one or more use updateMany()
    let result=await data.updateOne(
        {name:'Ayesha Khan'},{
            $set:{name:'Ali Awan'}
            }

    );
    console.warn(result)
}
 updateData();  




