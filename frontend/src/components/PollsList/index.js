import axios from "axios"
import { useState,useEffect } from "react"
import { StyledCard, StyledOptionCard, StyledOption } from "./styledList";


const PollsList = () => {
    const UserId = sessionStorage.getItem("user");
    const [Polls, setPolls] = useState([]);
    const [isOpened, setisOpened] = useState(false);
    const [chosenOption,setchosenOption] = useState("");
    const [chosenPoll, setchosenPoll] = useState("");
    async function getPolls() {
        const res = await axios.post("/polls",{
            UserId: UserId,
        })

        setPolls(res.data);
    }

    useEffect(() => {
        getPolls();
    },[])

    function handleCardClick(){
       setisOpened(!isOpened)
    }



    return (
        <>
            {Polls.map((Poll) => (
                <StyledCard onClick={(e) => {setchosenPoll(Poll.PollTitle);}}>
                    <h1>{Poll.PollTitle}</h1>
                    <h4>{Poll.PollDescription}</h4>
                    Team:<b> {Poll.Team} </b><br></br>
                    Time:<b> {Poll.Time} </b>
                    {(chosenPoll === Poll.PollTitle) && (
                        <StyledOptionCard>
                            <StyledOption onClick={(e) => {setchosenOption(e.target.value); if(chosenOption === e.target.value){e.target.style.backgroundColor = "Green"}else{e.target.style.backgroundColor = "gray"}}} value={Poll.PollOption1}>{Poll.PollOption1}</StyledOption>
                            <StyledOption onClick={(e) => {setchosenOption(e.target.value); if(chosenOption === e.target.value){e.target.style.backgroundColor = "Green"}}} value={Poll.PollOption2}>{Poll.PollOption2}</StyledOption>
                            <StyledOption onClick={(e) => {setchosenOption(e.target.value); if(chosenOption === e.target.value){e.target.style.backgroundColor = "Green"}}} value={Poll.PollOption3}>{Poll.PollOption3}</StyledOption>
                            <StyledOption onClick={(e) => {setchosenOption(e.target.value); if(chosenOption === e.target.value){e.target.style.backgroundColor = "Green"}}} value={Poll.PollOption4}>{Poll.PollOption4}</StyledOption>
                        </StyledOptionCard>
                    )}
                </StyledCard>

            ))}

        </>
    )
}

export default PollsList
