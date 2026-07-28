import  mongoose from "mongoose";





 export const DBConnect = async ()=>{
  try {

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDb connected : ${conn.connection.host}`);


    
    
  } catch (error) {
    
    console.error(`Error: ${error.message}`)
  }
}

// import { MongoClient, ServerApiVersion } from 'mongodb';

// let client;

// export async function DBConnect() {
//   try {
//     client = new MongoClient(process.env.MONGODB_URI, {
//       serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       }
//     });

//     await client.connect();
//     await client.db("admin").command({ ping: 1 });

//     console.log("Connected to MongoDB");

//     return client;
//   } catch (err) {
//     console.error(err);
//   }
// }

