import express from "express";
import bodyParser from 'body-parser';

const port = 3000;
const app = express();


//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/',(req,res) => {
    let PagesList =["blog1.ejs","blog2.ejs"]
    res.render('index.ejs',{ Pages: PagesList })
        
});

app.get('/login',(req,res)=>{
    res.render('login.ejs')
});


app.listen(port, () => {
    console.log('http://localhost:' + port)
});