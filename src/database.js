const mongoose = require('mongoose');

const { database } = require('./keys');

mongoose.connect(database.URI, {
    useNewUrlParser: true
})
    .then(db => console.log('DB is conectd'))
    .catch(err => console.log(err));