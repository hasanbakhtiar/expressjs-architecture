const express = require('express');
const connectdb = require('./config/connectdb');
const cors = require('cors');
const app = express();


// middleware start
app.use(cors());
app.use(express.json());
// middleware end

const productRoute = require('./routers/product');

app.use('/product',productRoute);


connectdb();
app.listen(3004, () => {
    console.log('3004 port is running');

})