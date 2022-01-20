import mongoose from 'mongoose';


const connection = async (url)=>{
    try{
        await mongoose.connect(url,{ useNewUrlParser: true });
        console.log("connected to Database");
    }
    catch(error){
        console.log("Error in Database Connection ",error)
    }
}

export default connection;