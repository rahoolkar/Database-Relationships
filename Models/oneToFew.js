const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/practice');
}

const userSchema = new mongoose.Schema({
    name:String,
    addresses:[{
        location:String,
        city:String
    }]
});

const User = mongoose.model("User",userSchema);

let user1 = new User({
    name:"Rahul Kar"
})

user1.addresses.push({location:"Mall road b-123",city:"Gurgaon"});
user1.addresses.push({location:"Dlf colony",city:"Rohtak"});

user1.save().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})