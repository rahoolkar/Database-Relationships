const mongoose = require('mongoose');

main().then(() => console.log("connection is sucessfull")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/practice');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String
})

const postSchema = new mongoose.Schema({
    content : String,
    likes : Number,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : "User"
    }
})

const Post = mongoose.model("Post",postSchema);
const User = mongoose.model("User",userSchema);

async function fillData() {

    let post2 = new Post({
        content : "my first day at the gym",
        likes : 20
    })

    let r1 = await User.findOne({email:"batman30jan2002@gmail.com"});
    post2.user = r1;

    let a1 = await post2.save()
    console.log(a1);

    // let user1 = new User({name : "Rahul Kar", email : "batman30jan2002@gmail.com"})
    // let user2 = new User({name : "Udayan Kar", email : "udayankarlodu@gmail.com"})

    // let res1 = await user1.save();
    // let res2 = await user2.save();
}

//fillData();

async function showData() {
    let ans = await Post.find({}).populate("user");
    console.log(ans);
}

showData();