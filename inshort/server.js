import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';

import connection from './connection/db.js';
import defaultData from './defaultData.js';
import route from './route/route.js';

const url = 'mongodb://user:pass@inshort-shard-00-00.2fgb7.mongodb.net:27017,inshort-shard-00-01.2fgb7.mongodb.net:27017,inshort-shard-00-02.2fgb7.mongodb.net:27017/PROJECT_0?ssl=true&replicaSet=atlas-vhwiyo-shard-0&authSource=admin&retryWrites=true&w=majority';

const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json({ extended: true}));

app.use('/',route);

if(process.env.NODE_ENV == "production"){
    app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 3002;

connection(process.env.MONGODB_URI || url);

app.listen(PORT,()=>{
    console.log("Port tis running at port --->",PORT);
})

defaultData();