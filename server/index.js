const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const path = require('path');

dotenv.config();
const app = express();
connectDB();

app.use(
    cors({
        origin: 'https://melodic-semifreddo-547392.netlify.app',
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const port = process.env.PORT || 5000;

// const _dirname = path.resolve();


// app.use(express.static(path.join(_dirname, "/client/dist")));
// app.get('*', (_, res) => {
//     res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
// })

app.listen(port, () => {
    console.log(`App is listening on PORT : ${port}`);
});
