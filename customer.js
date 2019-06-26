var express=require('express');
var app=express();
var callfun=function(req,resp){
	console.log("In fun..!");
var customer=[
{name:'Seria',accont_no:1101,Balance:5000000},
{name:'Alex',accont_no:1102,Balance:1000000},
{name:'Bran',accont_no:1103,Balance:2000000},
{name:'Nial',accont_no:1104,Balance:6000000},
];
resp.send(customer);
};
app.get('/customer',callfun);

var server = app.listen(8090, function () {
 
  var port = server.address().port

  console.log("Welecome to Contoso app which is running on", port," port..!")
})