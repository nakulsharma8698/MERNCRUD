const express = require('express')
var mysql = require('mysql');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors');
var cookieParser = require('cookie-parser');
const port = process.env.port || 4000;
app.use(cors());

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());
var crud = require('./crud.js');
app.use('/admin', crud);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/my_db', { useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify: false});
const connection = mongoose.connection;
var bookingSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    seats: Number,
    category: String
 });
 var Booking = mongoose.model("Booking", bookingSchema);

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


      app.post('/create',  function(req, res) {
        var bookingInfo = req.body; //Get the parsed information
        console.log(req.body);
        var newBooking = new Booking({
          name: bookingInfo.name,
          email: bookingInfo.email,
          phone: bookingInfo.phone,
          seats: bookingInfo.seats,
          category:  bookingInfo.category
       });
         
       newBooking.save(function(err, Person){
          if(err)
            console.log(err);
          else
            console.log('Registered Successfully');
       });
     
    });

  app.get('/details/:email' , (req, res) => {
    Emp.find({"email":req.params.email}, (err, items) => { 
        if (err) { 
            console.log(err); 
        } 
        else
        {
            res.json(items);
        }
    
        console.log(items);  
    }); 
}); 

    app.post('/update/:id', function(req,res){
      console.log(req.body);
      Booking.findById(req.params.id, function(err, booking) {
        if (!booking)
            res.status(404).send("data not found");
        else
        {
            booking.phone=req.body.phone;
            booking.seats=req.body.seats;
            booking.category=req.body.category;
            booking.save().then( booking => {
                res.json('Employee Details updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    });
    });

  app.delete('/delete/:id', function(req, res, next) {
    var myquery = { _id:  req.params.id};
    Booking.deleteOne(myquery,  function (err, post) {
      if (err) throw err;
      else
        console.log("1 document deleted");
    });
  });
    app.get('/getbookings', function(req,res){
      Booking.find({}, (err, items) => { 
        if (err) { 
            console.log(err); 
        } 
        else
        {
            res.json(items);
        }
    
        console.log(items);
            //res.render('app', { items: items });  
    }); 
    });
  if(process.env.NODE_ENV === 'production')
  {
    app.use(express.static('client/build'));
  }

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
