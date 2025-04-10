import connectDB from './db/index.js';


connectDB();
/*
import express from 'express';
app = express();
(async()=>{
 try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error",(error)=>{
        console.log("error",error);
        throw error;
    })
    app.listen(process.env.PORT,()=>{`the port is listening on ${process.env.PORT}`});
    console.log(`the port is listening on ${process.env.PORT}`);


 } catch (error) {

    console.log("error",error);
 }
})()
 */