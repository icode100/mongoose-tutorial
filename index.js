// connecting database 
const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017/danceAcademy',{useNewUrlParser:true,useUnifiedTopology:true});

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error: '));
db.once('open',()=>{
    console.log('connected!!!')
});
// creation and modelling schema 
 var stuschema = new mongoose.Schema({
    name:String
 });
 stuschema.methods.speak = function(){
    console.log("my name is "+this.name);
}
var student = mongoose.model('student',stuschema);//this will create a collections name students this the name given here will correspond to the name of collections
var stu = new student({name:"ipsit"});
console.log(stu.name);
stu.speak();

// saving the documents to the new collection
stu.save(function(err,fluffy){
    if(err) return console.error(err);
    fluffy.speak();
});

// finding the data
student.find({name:"ipsit"},function(err,st){
    if(err) return console.error(err);
    console.log(st);
});