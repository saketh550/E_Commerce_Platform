import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from './SignUp';
import Password from './Password';
import Products from "./Products";


export default function ShoppingIndex() {
    return (
        <div className="main">
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element = {<Login/>}/>
                        <Route path='SignUp' element={<SignUp />} />
                        <Route path='Password' element={<Password/>}/>
                        <Route path="/products" element={<Products/>}/>
                        
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )

}