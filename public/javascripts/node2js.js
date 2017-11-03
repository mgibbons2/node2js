var fs = require('fs'),
parseString = require('xml2js').parseString;

fs.readFile('schema.xml', 'utf-8', function (err, data){
if(err) console.log(err);
// we log out the readFile results    
console.log(data);
// we then pass the data to our method here
parseString(data, function(err, result){
    if(err) console.log(err);
    // here we log the results of our xml string conversion
    console.log(result); 
});
});    