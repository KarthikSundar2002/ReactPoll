import { useState } from "react"
import axios from "axios";

const SignUp = () => {
    const [Username, SetUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    const [repeatPassword, setrepeatPassword] = useState("")
    const [usernameErr, setusernameErr] = useState("")
    const [passwordErr, setpasswordErr] = useState("")
    const [emailErr, setemailErr] = useState("")
    const [repeatPasswordErr, setrepeatPasswordErr] = useState("")



    function PostData() {
        console.log("Posting Data to BackEnd");
        axios.post('/register',{
            userName: Username,
            email: Email,
            password: Password
        }).then((response) => {
            console.log(response.data);
            alert(response.data)
            if(response.data === "Successful"){
                window.location.href = "/SignIn";
            }
        }, (error) => {
            console.log(error);
        })

        // alert(response)

    }



    return (
        <div className="container">
        <div className="card">

            <div className="title">Welcome</div>
            <div className="subtitle">Let's create your account!</div>
            <form className="Sign-Up">
                <div className="form-control">

                    <input type='text' placeholder='Your Username' value={Username} onChange={(e) => {
                        if (e.target.value === "") {
                            setusernameErr("Username is required")
                            SetUsername(e.target.value)
                        } else {
                            setusernameErr("")
                            SetUsername(e.target.value)
                        }


                        }}></input>
                    <div className="form-error">{ usernameErr }</div>

                </div>
                <div className="form-control">

                    <input type='text' placeholder='Your Email Address' value={Email} onChange={(e) => {
                        if (!(e.target.value.includes("@") && e.target.value.includes("."))) {
                            setemailErr("Make sure the entered email id is valid");
                            setEmail(e.target.value);
                        } else {
                            setemailErr("");
                            setEmail(e.target.value);
                        }


                    }}></input>
                    <div className="form-error">{ emailErr }</div>

                </div>
                <div className="form-control">

                    <input type='password' placeholder='Your Password' value={Password} onChange={(e) => {
                        if (e.target.value.length < 8) {
                            setpasswordErr("Your Password must have a minimum length of 8 characters")
                            setPassword(e.target.value);
                        } else {
                            setpasswordErr("");
                            setPassword(e.target.value);
                        }


                        }}></input>
                    <div className="form-error">{ passwordErr }</div>

                </div>
                <div className="form-control">

                    <input type='password' placeholder='Repeat your Password' value={repeatPassword} onChange={(e) => {
                        if(e.target.value !== Password){
                            setrepeatPasswordErr("Passwords dont match!");
                            setrepeatPassword(e.target.value);
                        }else{
                            setrepeatPassword(e.target.value);
                            setrepeatPasswordErr("");
                        }
                    }}></input>
                    <div className="form-error">{repeatPasswordErr}</div>
                </div>

                <button className="submit" type="submit" value="Sign Up" onClick={PostData}>Sign Up</button>
            </form>
        </div>
        </div>
    )
}

export default SignUp