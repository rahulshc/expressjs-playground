const fs = require('fs');
const path=require('path');
const p =path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
//const products = [];

module.exports = class Product {
    constructor(title){
        this.title=title;
    }

    save(){
        //products.push(this);
        fs.readFile(p, (err, fileContent)=> {
            let products = [];
            if(!err){
                products = JSON.parse(fileContent);//reads a json file and convert this to js object
            }
            products.push(this);//this will work because of arrow function it refers to the class
            fs.writeFile(p, JSON.stringify(products), (err)=> {
                console.log(err);
            });//converts to json from js object
        });
    }

    //will not work like this below
    /*static fetchAll() {
        fs.readFile(p, (err, fileContent) => {
            if(err) 
            {
                console.log(err);
                return [];
            }
            return JSON.parse(fileContent);
        });
       
    }*/

    static fetchAll(cb) {
        fs.readFile(p, (err, fileContent) => {
            if(err) 
            {
                console.log(err);
                return cb([]);
            }
            return cb(JSON.parse(fileContent));
        });
       
    }
}