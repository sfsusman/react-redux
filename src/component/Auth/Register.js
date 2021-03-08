import React, { useState } from "react";
// import {register} from '../../store/action/auth'
//import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
function Register(props) {
    // const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const registerHandler = (e) => {

        e.preventDefault();
        console.log(name,password,email,phone,confirmPassword)


    };
    return (
        <>
            <div className="col-md-12 ">
                <div className="col-md-4 mx-auto mt-5">
                    <h5 className="text-center ">Register </h5>
                    <input
                        className="form-control  mb-2"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="FirstName"
                        aria-label="default input example"
                    />
                    <input
                        className="form-control  mb-2"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        aria-label="default input example"
                    />
                    <input
                        className="form-control  mb-2"
                        type="text"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        aria-label="default input example"
                    />
                    <input
                        className="form-control  mb-2"
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                        aria-label="default input example"
                    />
                    <input
                        className="form-control  mb-2"
                        type="text"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="ConfirmPassword"
                        aria-label="default input example"
                    />
                    <button
                        type="button"
                        onClick={(e) => registerHandler(e)}
                        className="btn btn-primary btn-lg btn-block"
                    >
                        Register
                    </button>

                    <p>
                        <Link to="/">login</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Register;