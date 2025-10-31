import express from "express";
import configViewEngine from "./config/viewEngine";
import bodyParser from "body-parser";
import initWebRoutes from "./routes/web";
import dotenv from 'dotenv';
import connect from './config/db';
dotenv.config();


let app = express();

// config app 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

connect();

let PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
    console.log("BackEnd NodeJs Hospital Software." + PORT);
    console.log(`http://localhost:${PORT}`);

})
