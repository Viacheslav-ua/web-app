const express =  require('express');
const exhbs = require('express-handlebars');
const products = require('./product.json');

const app = express();


app.set('view engine', 'hbs');
app.engine('hbs', exhbs({
    extname: 'hbs',

}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    // console.log('Это колбек для app.get(/)');
    // console.log(req.url);
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about', {cssFileName: 'about'});
});

app.get('/products', (req, res) => {
    res.render('products', {products, cssFileName: 'products'});
});

app.get('/product/:productId', (req, res) => {
    // res.render('products', {products, cssFileName: 'products'});
    console.log(req.params);
    const product = products.find(p => p.id === req.params.productId);
    
    res.render('product', { product });
});

app.listen(4444, () => {
    console.log(`app server  run ${4444}`);
});