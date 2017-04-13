'use strict';
const express=require('express');
const path=require('path');
const webpack=require('webpack');
const webpackMiddleware=require('webpack-dev-middleware');
const webpackConfig=require('../webpack.config.dev');
const bodyParser = require('body-parser');

const app=express();
app.set('view engine', 'ejs');
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// app.engine('html', require('ejs').renderFile);


app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'));
})
app.listen(3000,(err)=>{
    console.log('working on server'+err);
})