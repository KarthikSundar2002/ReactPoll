import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const SignIn = () => {
    const [Username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function PostData() {
        console.log("Posting Data to BackEnd");
        axios.post('/login',{
            userName: Username,
            password: password
        }).then((response) => {
            alert(response.data);
            if(response.data.includes("SignedIn")){
                sessionStorage.setItem("user", response.data.slice(8) );
                window.location.href = "/joinTeam"
            }
        }, (error) => {
            console.log(error);
        })
    }



    return (
        <div className="container">
        <div className="card">
            <div className="title">Welcome Back!</div>
            <div className="subtitle">Enter your credentials to Hop In</div>
            <form className="Sign-in-form">
            <div className="form-control">
                <label>Username</label>
                <input type='text' placeholder='Your Username' value={Username} onChange={(e) => setUsername(e.target.value)}></input>

            </div>
            <div className="form-control">
                <label>Password</label>
                <input type='text' placeholder='Your Registered Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <button className="submit" type="submit" value="Sign In" onClick={PostData}>Sign In</button>
            <center>
            <Link className="subtitle" to="/SignUp">New here?</Link>
            </center>
        </form>
        </div>
        </div>
    )
}

export default SignIn