/**
 * Created by cheche on 2017/10/19.
 */
var express=require('express');
 // var home=require(__dirname+'/view/home.ejs');
var app= express();

//设置渲染引擎
app.set('viewengine','ejs');

//设置模板目录路径
app.set('views',__dirname+'/views');

//设置启动目录为当前目录
app.get('/',function(req,res){
    res.render('home.ejs',{
        name:'222',
        top:'this is top',
        middle:'middle---'
    })
}).listen(8081);