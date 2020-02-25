const Product = require('../models/product');

exports.getAddProduct = (req, res)=>{
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
};

exports.postAddProduct = (req, res)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res)=>{
    //console.log(adminData.products);
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    
    //this call below shall not work
    //const products = Product.fetchAll();

    Product.fetchAll((products)=> {
        res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
    });
    
}