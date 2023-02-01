const mongoose=require("mongoose");

const dataSchema=new mongoose.Schema({
    intensity:{type:Number},
    likelihood:{type:Number},
    relevance:{type:Number},
    start_year:{type:Number},
    end_year:{type:Number},
    country:{type:String},
    topics:{type:String},
    region:{type:String},
    city: {type:String},
    topic:{type:String},
    sector:{type:String},
    source:{type:String},
    pestle:{type:String}
});
const Data=mongoose.model("data",dataSchema);
module.exports=Data;




/*
{
            "end_year": 2019,
            "intensity": 16,
            "sector": "Energy",
            "topic": "oil",
            "insight": "Press Room",
            "url": "http://www.eia.gov/radio/",
            "region": "World",
            "start_year": 2017,
            "impact": "",
            "added": "January, 12 2017 01:41:30",
            "published": "January, 11 2017 00:00:00",
            "country": "",
            "relevance": 4,
            "pestle": "Economic",
            "source": "DOE EIA 2013 Energy Conference",
            "title": "Global oil inventories are expected to continue strong growth over the next two years which should keep oil prices low.",
            "likelihood": 4
        },
        */ 