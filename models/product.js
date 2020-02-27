const fs = require('fs');
const path=require('path');
const p =path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
//const products = [];

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if(err) 
        {
            console.log('1'+':'+err);
             cb([]);
        }
        else{
            cb(JSON.parse(fileContent));
        }
        
    });
}

module.exports = class Product {
    constructor(title, imageUrl, description, price){
        this.title=title;
        this.imageUrl=imageUrl;
        this.description=description;
        this.price=price;
    }

    save(){
        //products.push(this);
        getProductsFromFile(products=>{
            products.push(this);//this will work because of arrow function it refers to the class
            fs.writeFile(p, JSON.stringify(products), (err)=> {
                console.log('2'+':'+err);
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
        getProductsFromFile(cb);
       
    }
}