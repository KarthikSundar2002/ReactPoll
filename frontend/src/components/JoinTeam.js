import Navbar from "./Navbar";
import { useEffect,useState } from "react"
import JoinTeamForm from "./JoinTeamForm";

const JoinTeam = () => {
    useEffect(() => {
        const userID = sessionStorage.getItem("user");

        if(userID === null){
            window.location.href = "/SignIn"
        }
    },[])

    return (
        <div>
            <Navbar />
            <JoinTeamForm/>
            
        </div>
    )
}

export default JoinTeam
