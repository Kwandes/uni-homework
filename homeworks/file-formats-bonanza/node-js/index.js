'use strict';

const fs = require('fs');
const xml2js = require('xml2js');
const yaml = require('js-yaml');
const csv = require("csvtojson/v2");

console.log('====== JSON file ======')
let rawdata = fs.readFileSync('../files/planets.json');
let student = JSON.parse(rawdata);
console.log(student);

console.log('====== XML file ======')
// Each property is handled as if it was an array because XML is meh for this
rawdata = fs.readFileSync('../files/planets.xml');
xml2js.parseString(rawdata, (err, result) => {
    if(err) {
        throw err;
    }

    // `result` is a JavaScript object
    // convert it to a JSON string
    const json = JSON.stringify(result, null, 4);

    // log JSON string
    console.log(json);
    
});


console.log('====== YAML file ======')
rawdata = fs.readFileSync('../files/planets.yml');
console.log(yaml.load(rawdata));

console.log('====== CSV file ======')
// Loss of data types (everything is string) and nested arrays/objects
csv({delimiter: ';'})
.fromFile('../files/planets.csv')
.then((jsonObj)=>{
    console.log(jsonObj);
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})


console.log('====== TXT file ======')
// Would require custom parser to get the nested array of objects
rawdata = fs.readFileSync('../files/planets.txt');
console.log(rawdata.toJSON().type)
