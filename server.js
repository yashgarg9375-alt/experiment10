const express = require("express");
const path = require("path");

const app = express();


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Home Route
app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "views", "index.html"));

});


// About Route
app.get("/about", (req, res) => {

    res.json({
        message: "This is About Page",
        technology: "Node.js + Express"
    });

});


// Contact Route
app.get("/contact", (req, res) => {

    res.json({
        email: "admin@gmail.com",
        phone: "9999999999"
    });

});


// Student Data Route
app.get("/students", (req, res) => {

    const students = [
        {
            id: 1,
            name: "Yash",
            course: "BCA"
        },
        {
            id: 2,
            name: "Rahul",
            course: "MCA"
        },
        {
            id: 3,
            name: "Aman",
            course: "B.Tech"
        }
    ];

    res.json(students);

});


// Login Route
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    if (email === "admin@gmail.com" && password === "123456") {

        res.json({
            message: "Login Successful"
        });

    } else {

        res.json({
            message: "Invalid Credentials"
        });

    }

});


// Error Route
app.use((req, res) => {

    res.status(404).json({
        message: "Page Not Found"
    });

});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server Running on Port ${PORT}`);

});