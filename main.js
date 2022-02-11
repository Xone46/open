require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routerClient = require('./routes/client');
const routerDashboard = require('./routes/dashboard');
const routerAdmin = require('./routes/admin');
const routerRapport = require('./routes/rapport');
const cors = require('cors');
const path = require('path');
const methodOverride = require('method-override');
const { PORT, mongoUri} = require('./config');



// connection 
mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://consult:achraf1000@cluster0.wkroh.mongodb.net/gh?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology : true})
.then(()=> {
    console.log('Database connected');
})
.catch((err) => {
    console.log(err.message);
})


// configure the app to use bodyParser() and cros
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());
app.use(methodOverride('_method'));





// pour les route
app.use('/clients', routerClient);
app.use('/admins', routerAdmin);
app.use('/dashboard', routerDashboard);
app.use('/files', routerRapport);


// pour afficher les erreur
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    res.status(500).json({
        message : 'warnning'
    })
})

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
    })
}

// pour declanche le serveur
app.listen(PORT, () => {
    console.log(`Server Running with port: ${PORT}`);
})


