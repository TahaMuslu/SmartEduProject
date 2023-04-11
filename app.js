//Requirements
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');


//Express Start
const app = express();

//Constants
const {
    MONGO_HOST: HOST,
    MONGO_USER: USER,
    MONGO_PASSWORD: PASS,
    MONGO_DB: DB,
    MONGO_PORT: PORT
} = process.env;

//Connect DB
mongoose.connect(`mongodb://${USER}:${PASS}@${HOST}:${PORT}?authSource=admin`)
    .then(() => {
        console.log("DB Connected!");
    });



//Template Engine
app.set("view engine", "ejs");



//Global Variable
global.userIN = null;


//Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'my_keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: `mongodb://${USER}:${PASS}@${HOST}:${PORT}/${DB}?authSource=admin` })
}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.flashMessages = req.flash();
    next();
});
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
})
);



//Routes
app.use("*", (req, res, next) => {
    userIN = req.session.userID;
    next();
});
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);








//Server Start
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App Started on port ${port}`);
});

