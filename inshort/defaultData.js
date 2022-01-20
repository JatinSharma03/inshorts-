
import { data } from "./data/data.js";

import news from "./model/newsSchema.js";

const defaultData = async ()=>{
    try{
        // await news.deleteMany({});
        await news.insertMany(data);

        console.log("default data is added in mongodb");
    }
    catch(error){
        console.log("error in default data adding ",error.message);
    }
}

export default defaultData;