const { MongoClient, ServerApiVersion } = require('mongodb');
async function handler(req,res){
    console.log('tsting of the env')
if(req.method==="POST"){
    console.log('s')
    const data=req.body

// const client =await MongoClient.connect('mongodb+srv://inderbirsingh:quertquerty@cluster0.xvxbhbp.mongodb.net/meetups?retryWrites=true&w=majority&appName=@Cluster0').catch(error => console.log(error))
// console.log('after connectin',client)
const uri = "mongodb+srv://inderbirsingh:qwertyqwerty@cluster0.xvxbhbp.mongodb.net/?retryWrites=true&w=majority&appName=nextjs";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,{
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
//mongodb+srv://inderbir:WILDstone@123@cluster0.xvxbhbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
await client.connect()
// db=client.db()
await client.db("admin").command({ ping: 1 });
console.log("Pinged your deployment. You successfully connected to MongoDB!");
const meetupsCollection=db.collection('meetups')
const result=await meetupsCollection.insertOne(data)
client.close()
console.log('inserting')
res.status(201).json({message:"meetup inserted"})
}
}
export default handler