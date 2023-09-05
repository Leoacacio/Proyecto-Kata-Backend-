const mongoose = require ("mongoose");

const userSchema = mongoose.Schema({
name:{
    type: String,
    required: true
},
Apellido:{
    type: String,
    required:true
},
phone:{
    type: Number,
    required:true   
},
email:{
    type: String,
    required:true   
},
rol:{
    type: String,
    required:true
},
clientes:{
    type: String,
    required:true
},

})


module.exports = mongoose.model('user', userSchema);

