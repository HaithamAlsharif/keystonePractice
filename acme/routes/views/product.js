var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'store';

  locals.filters = {
    product: req.params.product
  }
  locals.data = {
    product:[]
  }
  // 'init' means when this view initializes and starts, execute the function !
  view.on('init', function(next){
    var query = keystone.list('Product').model.findOne({
      slug: locals.filters.product
    });

    query.exec(function(err, result){
      locals.data.product = result;
      next(err);
    });

  });
  // Render View
  view.render('product');
}