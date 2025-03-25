import mongoose from 'mongoose';

const Connection = async () => {
    const URL='mongodb://localhost:27017/FriendsApp'
    try {
        await mongoose.connect(URL,{
            useUnifiedTopology: true
        });
        console.log('Database connected Successfully ...');
        
    } catch (error) {
        console.log('Error while connecting with the database',error.message);
        
    }
}

export default Connection;