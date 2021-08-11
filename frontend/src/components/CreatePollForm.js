import { useState } from "react"
import Dropdown from "./Dropdown"
import axios from "axios"


const CreatePollForm = () => {
    const [PollTitle, setPollTitle] = useState("")
    const [PollDescription, setPollDescription] = useState("")
    const [PollOption1, setPollOption1] = useState("")
    const [PollOption2, setPollOption2] = useState("")
    const [PollOption3, setPollOption3] = useState("")
    const [PollOption4, setPollOption4] = useState("")
    const [Team, setTeam] = useState("");


    async function PostData(){
        let TimeOfCreation = new Date();
        alert(Team);
        const response = axios.post("/CreatePoll",{
            PollTitle: PollTitle,
            PollDescription: PollDescription,
            PollOption1: PollOption1,
            PollOption2: PollOption2,
            PollOption3: PollOption3,
            PollOption4: PollOption4,
            Team: Team,
            Time: TimeOfCreation
        })
    }

    return (

        <div className="container">
        <div className="card">
            <div className="title">Poll Creation</div>
            <div className="subtitle">Enter the Details of the Poll</div>
            <form className="Sign-in-form">
            <div className="form-control">
                <label>Poll Title</label>
                <input type='text' placeholder='Poll Name' value={PollTitle} onChange={(e) => setPollTitle(e.target.value)}></input>

            </div>
            <div className="form-control">
                <label>Poll Description</label>
                <input type='text' placeholder='Poll Description' value={PollDescription} onChange={(e) => setPollDescription(e.target.value)}></input>

            </div>
            <div className="form-control">
                <label>Poll Description</label>
                <input type='text' placeholder='Option 1' value={PollOption1} onChange={(e) => setPollOption1(e.target.value)}></input>

            </div>
            <div className="form-control">
                <label>Poll Description</label>
                <input type='text' placeholder='Option 2' value={PollOption2} onChange={(e) => setPollOption2(e.target.value)}></input>

            </div>
            <div className="form-control">
                <label>Poll Description</label>
                <input type='text' placeholder='Option 3' value={PollOption3} onChange={(e) => setPollOption3(e.target.value)}></input>

            </div>
            <div className="form-control">
                <label>Poll Description</label>
                <input type='text' placeholder='Option 4' value={PollOption4} onChange={(e) => setPollOption4(e.target.value)}></input>

            </div>
            <div className="form-control">
                <label>Team</label>
                <Dropdown Team={setTeam}/>
            </div>

            <button className="submit" type="submit" value="Sign In" onClick={PostData}>Sign In</button>

        </form>
        </div>
        </div>

    )
}

export default CreatePollForm
