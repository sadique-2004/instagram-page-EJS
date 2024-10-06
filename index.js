const express = require("express");
const app = express();

//  like express EJS is also a pacckage but we didt require it because express require EJS by default
const port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
    // res.send("in Home page")
});

// app.get("/ig/:username", (req, res) => {

//     const followers = ['@anas', '@shahzad-alam', '@Taufique', '@Khalid'];
//     let { username } = req.params;
//     // console.log(username);
//     // // res.send("sadique");

//     res.render("instagram.ejs", { username, followers });
// });

app.get("/ig/:username", (req, res) => {

    let {username} = req.params;
    const instaData = require("./data.json")
    const data = instaData[username];
    console.log(data);

    //  for show local image on instagram
    // app.use('/assets',express.static('assets'));

    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }
    
})

app.get('/rolldice', (req, res) => {
    let database = Math.floor(Math.random() * 6 + 1);
    res.render("rolldice.ejs", { database });
    // res.render("rolldice.ejs",{diceval:database});   you can also write in this way but its no any need of key value pair
})

app.listen(port, () => {
    console.log(`app is listning on port ${port}`);
});

