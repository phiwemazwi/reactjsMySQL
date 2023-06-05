/* importing thins like this import { express } from ('express') does not work */
import express  from 'express';
import  mysql  from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());

app.listen(8081, ()=> {
    console.log("Listening!");
});