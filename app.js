'use strict';

const express = require('express');
const app = express();
const PORT = process.env.port || 3000;
const router = require('./routes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', router.HomeRouter);
app.use('/api/contact', router.ContactRouter);

app.listen(PORT, function() {
    console.log(`app listening PORT ${PORT} ...`);
})
