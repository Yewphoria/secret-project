
import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
const API_URL= "https://secrets-api.appbrewery.com";

app.use(express.static('public'));



app.get('/', async (req,res)=>{
    try{
        //calling api 
    const result = await axios.get(API_URL+"/random");
    const JSdata = result.data;
    console.log(JSdata);
    const user= JSdata.username;
    const secret = JSdata.secret;

 res.render("index.ejs",{
    user: user,
    secret: secret
 });
    } catch (error){
        console.log(error.response.data);
        res.status(500)
    }
})



app.listen(port, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
})