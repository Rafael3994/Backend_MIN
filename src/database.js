const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://user:password@cluster0.czvac.mongodb.net/?retryWrites=true&w=majority",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
    })
    .then(db => console.log('DB conectada'))
    .catch(err => console.error(err));   
    


