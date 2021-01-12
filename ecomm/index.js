// para iniciar a aplicaçao ---->>   npm run dev

const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

// const users = require('./repositories/users');

const app = express();

app.use (express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
    keys:['oij52oih3iukj4h5615']
}));

app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);
app.use(cartsRouter);


app.listen(3000, () => {
    console.log('listening');
});