import connectDB from './db/index.js';
import express from 'express';
const app = express();

connectDB().then(()=>{
   app.on("error",(erros)=>{
      console.log("error has ocurred",error);
   })
   app.listen(process.env.PORT || 3000,()=>{
      console.log(`the port is listening to ${process.env.PORT ||3000}`)
   })
}).catch((error)=>{
   console.log("error",error);
});
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