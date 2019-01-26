var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.list('Product', {
    map: {name:'title'},
    singular:'Product',
    plural: 'Products',
    autokey:{
        path: 'slug', // so we can have it in the URL, so we can say product/ipad for example
        from: 'title', // we want the slug to be based on the title
        unique: true // we can't have two of the same slug
    }
});

// now we add our firleds 

Product.add({
    title: {type:String, required:true},
    price:{type:Number},
    qty:{type:Number},
    description: {type: Types.Html, wyswyg: true, heigh: 300,},
    image: {type: Types.CloudinaryImage},
    publishedDate:{type:Date, default: Date.now}
});

Product.register();