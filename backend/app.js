const express = require("express");
const dotenv = require('dotenv');
const connectDB = require("./database/database");
const app = express();
const contactRouter = require("./routes/contact");


app.use(express.json());


dotenv.config();
const PORT = process.env.PORT ||8000;
const DATABASE_URL = process.env.MONGODB_URL;


app.use("/contact", contactRouter);


app.listen(PORT,() => {
    connectDB(DATABASE_URL);
    console.log(`server listening  on ${PORT}`);
});