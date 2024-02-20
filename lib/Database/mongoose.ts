import mongoose,{Mongoose} from 'mongoose'

const MONGODB_URL=process.env.MONGODB_URL;

interface MongooseConnection{
    conn :Mongoose | null;
    promise: Promise<Mongoose> | null;
}
let cached :MongooseConnection=(global as any).mongoose

if(!cached){
    cached={ conn:null, promise:null  }
}

export const connectToDatabase = async () => {
    if(cached.conn){ return cached.conn;}
    
    if(!MONGODB_URL){ return new Error('Missing mongodb url ')} 

    cached.promise= cached.promise || mongoose.connect( MONGODB_URL,{ dbName:"ImageAI",bufferCommands:false})
    
    cached.conn = await cached.promise;

    return cached.conn;
}