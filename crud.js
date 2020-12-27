const express = require('express')
var mongoose = require('mongoose');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const app = express()
var router = express.Router();
const cors = require('cors');
var cookieParser = require('cookie-parser');
//const port = 4000
const saltRounds = 10;
const bcrypt = require('bcrypt');
app.use(cors());
//mongodb+srv://nakul_db:*****@cluster0.lqqs7.mongodb.net/test?authSource=admin&replicaSet=atlas-ttyj65-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://nakul_db:Main2016@cluster0.lqqs7.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify: false});
const connection = mongoose.connection;
var userrSchema = mongoose.Schema({
    username: String,
    password: String
 });
 var Userr = mongoose.model("Userr", userrSchema);

connection.once('open', function() {
    console.log("MongoDB database connection for Login established successfully");
})

const  accessTokenSecret= 'hellouser';

router.post('/register',  function(req, res) {
    var userrInfo = req.body; //Get the parsed information
    console.log(req.body);
   const yourPassword = req.body.password;
   bcrypt.hash(yourPassword, saltRounds, (err, hash) => {
    // Now we can store the password hash in db.
    var newuserr = new Userr({
        username: userrInfo.username,
        password: hash
     });
     newuserr.save(function(err, userr){
        if(err)
          console.log(err);
        else
          console.log('Registered Successfully');
     });
   


  })
  });

      router.post('/login', async function(req, res) {
       // var user = req.body;
       console.log(req.body);
            var username=req.body.username;
            var password=req.body.password;
                try {
                    let userr = await Userr.findOne({
                      username
                    });
                    if (!userr)
                      return res.status(400).json({
                        message: "User Not Exist"
                      });
             // console.log(password);
              //console.log(userr.password);
                    const isMatch = bcrypt.compare(password, userr.password);
                    if (!isMatch)
                      return res.status(400).json({
                        message: "Incorrect Password !"
                      });
              
                    const payload = {
                      userr: {
                        id: userr._id
                      }
                    };
              
                    jwt.sign(
                      payload,
                      "hellouser",
                      {
                        expiresIn: 360000
                      },
                      (err, token) => {
                        if (err) throw err;
                        res.status(200).json({
                          token, username
                        });
                      }
                    );
                  }
                catch (e) {
                    console.error(e);
                    res.status(500).json({
                      message: "Server Error"
                    });
                  }
                /*Userr.findOne({username}, (err, items) => { 
                    if (err) { 
                        console.log(err); 
                    } 
                    else
                    {
                        if(Userr.password==password)
                        {
                            const accessToken = jwt.sign({ username: username }, accessTokenSecret);
                            decoded = jwt.verify(accessToken, 'hellouser',{complete: true});
                            console.log(decoded.payload); 
                            req.session.username = results[0].username;
                            //console.log(results[0].UserId);
                            req.session.username = username;
                            req.session.loggedin = true;
                            res.json({
                              accessToken, username
                            })
                        }
                    }
                
                }); */
           
        });
        module.exports = router;
//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
