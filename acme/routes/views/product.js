var keystone = require('keystone');

exports = module.exports = function( req, res) {
    var view = new keystone.View(req,res);
    var locals = res.locals; // passing in our local variables

    // set locals 

    locals.section = 'store' // this is for the navbar

    //Load products 

    view.query('products', keystone.list('Product').model().find()); // pass the list made in the Product model, to the template ? that is products

    view.render('products')
}