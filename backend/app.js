// Modules
const express = require("express");
const mongoose = require("mongoose");

// Global Constants
const app = express();
const port = process.env.PORT || 3001;


app.use(express.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Database
mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

const userSchema = {

    email: String,
    password: String,
    username: String,
};

const teamSchema = {

    teamName: String,
    teamPassword: String,
    CreatedById: String,
    users: [String]
}

const PollSchema = {
    PollTitle: String,
    PollDescription: String,
    PollOption1: String,
    PollOption2: String,
    PollOption3: String,
    PollOption4: String,
    Team: String,
    Time: String
}

const User = new mongoose.model("User",userSchema);
const Team = new mongoose.model("Team",teamSchema);
const Poll = new mongoose.model("Polls",PollSchema);
// Register-Post
app.post("/register", (req,res) => {
    var username = req.body.userName;
    var email = req.body.email;
    var password = req.body.password;

    const newUser = new User({
        email: email,
        username: username,
        password: password
    })

    newUser.save((err) => {
        if (err) {
            console.log(err);
        }else{
            console.log("Registered Successfully");
            res.send("Successful");
        }
    })


    console.log(req.body);
    console.log(username);
})

// login-Post
app.post("/login",(req,res) => {
    let username = req.body.userName;
    let password = req.body.password;
    
    User.findOne({username: username}, (err,found) => {
        if(err){
            console.log(err)
        } else {
            if (found ){
                if (found.password === password){
                    console.log("Signed In");
                    res.send("SignedIn " + found._id);
                }
            }
        }
    })
})

// Creation of Team
app.post("/CreateTeam",async (req,res) => {
    let TeamName = req.body.TeamName;
    let TeamPassword = req.body.TeamPassword;
    let CreatedById = req.body.CreatedUserID.slice(1);
    console.log(CreatedById);
    let AdminUser = "";
    await User.findOne({_id:CreatedById},(err,found) => {
        if (err) {
            console.log(err);
        }else{
            if ( found ){
                AdminUser = found.username;
                console.log(AdminUser);
            }
        }
    })
    const newTeam = new Team({
        teamName: TeamName,
        teamPassword: TeamPassword,
        CreatedById: CreatedById,
        users: [AdminUser]
    })

    await newTeam.save((err) => {
        if (err) {
            console.log(err)
        }else{
            console.log("Created Team Successfully")
            console.log(newTeam.users);
        }
    })


})

app.post("/JoinTeam", async (req,res) => {
    console.log(req.body);
    let TeamName = req.body.teamName;
    let TeamPassword = req.body.teamPassword;
    let userToAdd = req.body.userToAdd.slice(1);
    console.log(userToAdd)
    var UserToAdd = "";
    await User.findById(userToAdd,(err,found) => {
        if (err) {
            console.log(err);
        }else{
            if ( found ){
                console.log("User Found");
                UserToAdd = found.username;
                console.log(UserToAdd);
            }
        }
    })
    await Team.findOne({teamName: TeamName},(err,found) => {
        if (err) {
            console.log(err);
        }else {
            if (found){
                if (found.teamPassword === TeamPassword){
                    console.log("Found the team");
                    found.users = [...found.users, UserToAdd];
                    console.log(found.users);
                }
            }
        }
    })


})

app.post("/fetchTeams", async (req,res) => {
    
    let userID = req.body.UserId.slice(1);

    let user = await User.findById(userID)

    let Teams = await Team.find({users:user.username});

    const TeamNames = [];
    Teams.forEach(Team => {
        TeamNames.push(Team.teamName)
    });



    res.send(TeamNames);
})

app.post("/CreatePoll",async (req,res) => {
    console.log(req.body);

    const newPoll = new Poll({
        PollTitle: req.body.PollTitle,
        PollDescription: req.body.PollDescription,
        PollOption1: req.body.PollOption1,
        PollOption2: req.body.PollOption2,
        PollOption3: req.body.PollOption3,
        PollOption4: req.body.PollOption4,
        Team: req.body.Team,
        Time: req.body.TimeOfCreation
    })

    await newPoll.save((err) => {
        if (err) {
            console.log(err)
        }else{
            console.log("Created Poll Successfully")

        }
    })
})

app.post("/polls",async (req,res) => {
    let userID = req.body.UserId.slice(1);

    let user = await User.findById(userID);

    let Teams = await Team.find({users:user.username});
    let TeamNames = Teams.map(team => team.teamName);
    let Polls = await Poll.find({Team: { $in: TeamNames}})
    console.log(Polls);
    res.send(Polls);

})
app.listen(port, () => {
    console.log("Server Started!");
});

