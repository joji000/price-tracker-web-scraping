import mongoose from 'mongoose'

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URI) return console.log('MONGODB is not define.');

    if(isConnected) return console.log('=> Using database connection.');

    try {
        await mongoose.connect(process.env.MONGODB_URI);

        isConnected = true;

        console.log('MONGODB connected');
        
    } catch (error) {
        console.log(error)
    }

}