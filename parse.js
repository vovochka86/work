let fs = require('fs');
let csv= require('fast-csv');

var stream = fs.createReadStream("soh.csv");

csv
 .fromStream(stream, {headers : true})
 .on("data", function(data){
     console.log( data);
 })
 .on("end", function(){
     console.log("done");
 });
