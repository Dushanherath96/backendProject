const config = require('config.json');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;


module.exports = {
    User: function(){
        const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require();

const schema = new Schema( {
    fullName: {
    type: String,
    required:true
},
email: {
    type: String,
    required:true
},
hash: {
    type: String,
    required:true
},
role: {
    type: String,
    
},
active:{
    type:Boolean,
},
createdDate : {
    type:Date,
    default:Date.now
}
});

schema.set('toJson' , {vituals:true});
module.exports = mongoose.model('User' , schema);
    },
}