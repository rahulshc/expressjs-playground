exports.get404 = (req, res)=> {
    //res.status(404).send('<h1>Page not found</h1>');
    res.status(404).render('404', {pageTitle: 'Page not Found', path: '/404'});
};