import news from "../model/newsSchema.js";

export const getNews = async (req,res)=>{
    try {
        const size = Number(req.query.size);
        const skip = Number(req.query.page);
        const data = await news.find({}).limit(size).skip(size*skip);

        res.status(200).json(data);
    } 
    catch (error) {
        res.status(500).json(error);
    }
}  