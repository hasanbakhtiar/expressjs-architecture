const mongoose = require('mongoose');

const username = "productshop";
const password = "productshop2024";
const database = "Cluster"

const connectdb = async()=>{
    try {
        await mongoose.connect(`mongodb+srv://${username}:${password}@cluster.ytdyti0.mongodb.net/${database}`);
        console.log("mongodb connect is successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;