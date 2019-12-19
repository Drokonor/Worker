const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect('mongodb://user:qwerty1@ds026658.mlab.com:26658/gridncloud');

const userSchema = mongoose.Schema({
    vkontakteId: String,
    text: String,
    lenght: Number
})

const User = mongoose.model('User', userSchema)



User.findOneAndUpdate({vkontakteId: process.env.ID}, { lenght :  process.env.TEXT.lenght} , function(err, doc){
    mongoose.disconnect();

    if(err) return console.log(err);
})