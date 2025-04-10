const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const connectDB = require('./config/db')
connectDB();
//Template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs')
//Home route
app.get('/', async (req,res)=>{
    res.render('homepage');
});
//Other routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT, ()=> {
    console.log("Listening on port: " + PORT);
})