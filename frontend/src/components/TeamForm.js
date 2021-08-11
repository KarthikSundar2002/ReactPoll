import { useState, useEffect } from 'react'
import axios from "axios";


const TeamForm = () => {
    const [teamName, setteamName] = useState("");
    const [teamPassword, setteamPassword] = useState("");

    const [teamNameErr, setteamNameErr] = useState("");
    const [teamPasswordErr, setteamPasswordErr] = useState("");
    const signedInUserID = sessionStorage.getItem("user");;



    function PostTeamData(){
        console.log("Posting Team Data to Backend");
        axios.post("/CreateTeam",{
            TeamName: teamName,
            TeamPassword: teamPassword,
            CreatedUserID: signedInUserID
        }).then((response)=>{
            console.log(response);
        },(err)=>{
            console.log(err);
        })
    }

    return (

        <div className="card">

            <div className="title">Create Team</div>
            <div className="subtitle">Let's create your Team!</div>
            <form className="Sign-Up">
    <div className="form-control">

        <input type='text' placeholder='Your Team Name' value={teamName} onChange={(e) => {
            if (e.target.value === "") {
                setteamNameErr("Team Name is required")
                setteamName(e.target.value)
            } else {
                setteamNameErr("")
                setteamName(e.target.value)
            }


            }}></input>
        <div className="form-error">{ teamNameErr }</div>

    </div>

    <div className="form-control">

        <input type='password' placeholder='Your Team Password' value={teamPassword} onChange={(e) => {
            if (e.target.value.length < 8) {
                setteamPasswordErr("The Password must have a minimum length of 8 characters")
                setteamPassword(e.target.value);
            } else {
                setteamPasswordErr("");
                setteamPassword(e.target.value);
            }


            }}></input>
        <div className="form-error">{ teamPasswordErr }</div>

    </div>


    <button className="submit" type="submit" value="Sign Up" onClick={ PostTeamData }>Sign Up</button>
    </form>
    </div>

    )
}

export default TeamForm
