const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,     
    useUnifiedTopology: true, 
    ssl: true                  
  });
  console.log("DB Connected....");
};

module.exports = connectDB;
