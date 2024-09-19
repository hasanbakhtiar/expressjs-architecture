const express = require('express');
const connectdb = require('./config/connectdb');
const cors = require('cors');
const app = express();


// middleware start
app.use(cors());
app.use(express.json());
// middleware end

const productRoute = require('./routers/product');
const categoryRoute = require('./routers/category');

app.use('/product',productRoute);
app.use('/category',categoryRoute);


connectdb();
app.listen(3004, () => {
    console.log('3004 port is running');

})