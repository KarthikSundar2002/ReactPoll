import { useState } from "react";
import axios from "axios";


const JoinTeamForm = () => {
    const [teamName, setteamName] = useState("");
    const [teamPassword, setteamPassword] = useState("");
    const SignedInUserID = sessionStorage.getItem("user");

    function PostData() {
        axios.post("/JoinTeam",{
            teamName: teamName,
            teamPassword: teamPassword,
            userToAdd: SignedInUserID
        }).then((response) => {
            console.log(response);
        },(err)=>{
            console.log(err);
        })
    }

    return (
        <div className="container">
        <div className="card">
            <div className="title">Welcome Back!</div>
            <div className="subtitle">Enter the credentials to Join the team</div>
            <form className="Sign-in-form">
            <div className="form-control">
                <label>Team Name</label>
                <input type='text' placeholder='Team Name' value={teamName} onChange={(e) => setteamName(e.target.value)}></input>

            </div>
            <div className="form-control">
                <label>Password</label>
                <input type='text' placeholder='Your Registered Password' value={teamPassword} onChange={(e) => setteamPassword(e.target.value)}></input>
            </div>

            <button className="submit" type="submit" value="Sign In" onClick={PostData}>Sign In</button>

        </form>
        </div>
        </div>
    )
}

export default JoinTeamForm
