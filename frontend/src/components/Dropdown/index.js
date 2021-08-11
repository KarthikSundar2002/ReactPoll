import axios from "axios"
import { useEffect, useState } from "react"
import {
    StyledSelect,
    StyledOption,

  } from "./styledDropdown";


const Dropdown = (props) => {
    const UserId = sessionStorage.getItem("user")
    const [Teams,setTeams] = useState([]);

    useEffect(()=>{
        async function FetchTeamsData() {
            const res = await axios.post("/fetchTeams",{
                UserId: UserId,
            })
            setTeams(res.data);


        }
        FetchTeamsData();



    }, [])





    return (
        <>
            <StyledSelect name="TeamList" id="TeamList" onChange={(e)=>{
                props.Team(e.target.value);

            }}>
            {Teams.map((team) => (

            <StyledOption value={team}>{team}</StyledOption>
            ))}
            </StyledSelect>
        </>
    )
}



export default Dropdown
