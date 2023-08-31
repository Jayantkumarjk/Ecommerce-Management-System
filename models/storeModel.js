const mongoose = require("mongoose");

const storeSchema = mongoose.Schema({
    vebdor_id:{
        type:String,
        required:true
    },
    log:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        required:true
    },
    location:{
        type:{type:String,required:true},
        coordinates:[]
    }
});
storeSchema.index({location:"2dsphere"});
module.exports = mongoose.model("Store",storeSchema);
