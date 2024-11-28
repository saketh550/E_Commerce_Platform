import { Link } from "react-router-dom";
import './login.css';  // Adjust the path as necessary
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {


    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = ()=>{
        validateUser();
    }

    const validateUser = async ()=>{

        const data = {username : username,password : password};

        try{
            const response = await fetch("http://localhost:4000/login",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(data)
            })


            if(response.ok){
                const result = await response.json()
                if(result.message === "Approved"){
                    navigate("/products")
                }
            }

        }catch(e){
            console.log(e);
        }
    }

    return (

        <>
            <div className="header">
                <h4>Header Part</h4>
            </div>
            <div className="mini">
                <div className="middle">
                    <ul>
                        <li>
                            <label for="username">User Name :</label>
                            <input type="text" name="username" className="foruser" value={username} onChange={e=>setUsername(e.target.value)}/>
                        </li>
                        <li>
                            <label for="userpassword">Password :</label>
                            <input type="password" name="userpassword" className="forpass" value={password} onChange={e=>setPassword(e.target.value)}/>
                        </li>
                        <li>
                            <button className="forlogin" onClick={handleSubmit}>Login</button>
                        </li>
                        <li className="forsignup">
                            <Link to='/SignUp'>SignUp</Link>
                        </li>
                        <li className="forForgotpass">
                            <Link to='/Password'> Forgot Password? </Link>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="footer">
                <h4>Footer Part</h4>
            </div>
        </>

    )
}


