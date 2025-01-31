const mongoose = require('mongoose');

main().then(() => console.log("connection is sucessfull")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/practice');
}

const orderSchema = new mongoose.Schema({
    item : String,
    price : Number
})

const Order = mongoose.model("Order",orderSchema);


const customerSchema = new mongoose.Schema({
    name : String,
    orders : [{type: mongoose.Schema.Types.ObjectId, ref: "Order" }]
})


// let o1 = new Order({item:"Aloo Tikki",price:90})
// o1.save().then(result => console.log(result)).catch(err => console.log(err));
// let o2 = new Order({item:"Bread Pakora",price:25})
// o2.save().then(result => console.log(result)).catch(err => console.log(err));
// let o3 = new Order({item:"Chole Bhature",price:50})
// o3.save().then(result => console.log(result)).catch(err => console.log(err));

const Customer = mongoose.model("Customer",customerSchema);

// let cusotmer1 = new Customer({
//     name:"Rahul Kar"
// })


// Order.findOne({item:"Bread Pakora"}).then((result)=>{
//     let o1 = result;
//     cusotmer1.orders.push(o1);
// }).catch((error)=>{
//     console.log(error);
// });

// Order.findOne({item:"Aloo Tikki"}).then((result)=>{
//     let o2 = result;
//     cusotmer1.orders.push(o2);
// }).catch((error)=>{
//     console.log(error);
// });


// cusotmer1.save().then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })


async function findCustomers() {
    let answer = await Customer.find({});
    console.log(answer);
}


findCustomers();
