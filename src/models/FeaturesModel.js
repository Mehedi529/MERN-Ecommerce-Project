const mongoose = require('mongoose');
const DataSchema = require.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    img:{type:String, required:true}
}, {typestamps:true, versionKey:false});

const FeaturesModel = mongoose.model('features', DataSchema);
module.exports = FeaturesModel;