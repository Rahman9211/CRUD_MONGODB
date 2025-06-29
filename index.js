const express = require("express");
const connectDB = require("./models/db");
const { engine } = require("express-handlebars");
const handlebars = require("handlebars");
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access");

const app = express();

connectDB(); 

require("dotenv").config();
const PORT = process.env.PORT || 3030;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.engine('handlebars', engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(handlebars),
}));

app.set('view engine', 'handlebars');
app.set('views', './views');

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.use("/Emp", require("./controllers/routes")); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});





// require('dotenv').config()
// const express = require("express");
// const Handlebars = require("handlebars");
// const { engine } = require("express-handlebars");
// const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access");

// const app = express();
// const connectDB = require("./models/db");
// // const PORT = process.env.PORT
// const PORT = 3030;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Handlebars setup (only once)
// app.engine('handlebars', engine({
//     defaultLayout: 'main',
//     handlebars: allowInsecurePrototypeAccess(Handlebars)
// }));
// app.set("view engine", "handlebars");
// app.set("views", "./views");

// // Database connection
// connectDB();

// // Routes
// app.get("/", (req, res) => {
//     res.render("home");
// });
// app.use("/stu", require("./controllers/routes"));

// // Start server
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));