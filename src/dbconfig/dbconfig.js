import mongoose from 'mongoose';

export async function connect() {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URL,{dbName:"newTodo"});
        console.log(connection.host);
    } catch (error) {
        console.log(error.message);
    }
}