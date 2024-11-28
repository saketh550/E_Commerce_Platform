import { useState, useEffect } from "react";
import $ from 'jquery';
import { useFormik } from "formik";
import "./signUp.css"
import Password from "./Password";

export default function SignUp() {


    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [mobile, setMobile] = useState("");
    const [mail, setMail] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const bod = {
            UserName: userName,
            Password: password,
            Mobile: mobile,
            Email: mail
        }

        try {
            const result = await fetch("http://localhost:4000/signUp", {
                method: "POST",
                headers: {    // Content-Type should be in headers
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(bod)
            })
            console.log(result);
            if (result.ok) {
                const res = await result.json()
                console.log(res);
                alert("Successfully")
            }
        } catch (e) {
            console.log("error", e)
        }
    }


    return (
        <div className="forSignUp">
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label for="UserName">User Name :</label>
                        <input type="text" name="UserName" value={userName} onChange={(e) => setUserName(e.target.value)} className="forUser" />
                    </li>
                    <li>
                        <label for="Password">Password :</label>
                        <input type="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="forPass" />
                    </li>
                    <li>
                        <label for="Mobile">Mobile No :</label>
                        <input type="number" name="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} className="forMobile" />
                    </li>
                    <li>
                        <label for="Email">Email ID :</label>
                        <input type="text" name="Email" value={mail} onChange={(e) => setMail(e.target.value)} class="forEmail" />
                    </li>
                    <button type='submit' class="forSubmit">Submit</button>
                </ul>
            </form>
        </div>
    )
}




