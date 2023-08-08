import { MongoClient } from 'mongodb'

const uri = 'mongodb+srv://zainahmed199524:zwu5b9ESI8uGUJRh@cluster0.7esbzyq.mongodb.net/'
const DBConnection = async ()=>{
    try {
        let client;
        let clientPromise;
        client = new MongoClient(uri)
        console.log(client)
        global._mongoClientPromise = await client.connect()
        clientPromise = global._mongoClientPromise
        // console.log("clientPromise",clientPromise)
        return clientPromise
        
    } catch (error) {
        console.log("error",error)
    }
}

export default DBConnection