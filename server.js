// import the express library
const express = require("express")
// assign app to the express function - creating the application
const app = express()
// set port variable to 3000
const port = 3000
// import budget.js data
const budget = require("./models/budget")
// import method-override
const methodOverride = require("method-override")

// ========== MIDDLEWARE ==========
//Parse Request Bodies if Content-Type Header is: application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}))
// serve files statically from the public folder
app.use(express.static("public"))
// register the method-override middleware
app.use(methodOverride("_method"))

// ========== ROUTES ==========

// INDEX - get /budgets/
app.get("/budgets/", (req, res) => {
    res.render("index.ejs", {})
})

// NEW - get /budgets/new
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs", {})
})

// CREATE - post /budgets/
app.post("/budgets", (req, res) => {
    res.redirect("/budgets", {})
})

// SHOW - get /budgets/:index
app.get("/budgets/:id", (req, res) => {
    res.render("show.ejs", {})
})

// LISTENER - set server to listen to port 3000
app.listen(port, () => {
    console.log("listening")
})