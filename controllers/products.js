const products=[];

exports.getAddProduct = (req, res)=>{
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
};

exports.postAddProduct = (req, res)=>{
    products.push({title: req.body.title});
    res.redirect('/');
};

exports.getProducts = (req, res)=>{
    //console.log(adminData.products);
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
}