// import { Link } from "react-router-dom";
import './forgotPass.css';

export default function Password(){
    return(
        <div className='main-password'>
            <li>
                <label for="username">Email :</label>
                <input type="text" name="username" className="forUser" />
            </li>

            <button className='button'> Done </button>
        </div>
    )
}