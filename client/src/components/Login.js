import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import playlistimg from '../images/playlistimg.png'

function Login() {
     
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const login = async () => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post("/api/users/login", user);
            dispatch(HideLoading());
            if (response.data.success) {
                toast.success(response.data.message);
                localStorage.setItem("token", response.data.data);
                navigate("/");
            } else {
                toast.error(response.data.message);
                alert(response.data.message);
            }
        } catch (error) {
            toast.error("Something went wrong");
            dispatch(HideLoading());
            console.log(error);
        }
    };   


    return (

        <div className=" ">



            <div className="  min-h-screen flex items-center justify-center gap-5 ">

                <div>
                    <img
                        className="h-[500px] floating"
                        src={playlistimg}
                        alt=""
                    />
                </div>


                <div className="flex flex-col gap-5 w-96 p-5">
                    <h1 className=" text-[#9C27B0] font-bold text-5xl ">Welcome Back</h1>
                    <hr />
                    <input className="rounded-lg"
                        type="text"
                        placeholder="Email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    <input className="rounded-lg"
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    <button className="primary bg-violet-600 rounded-lg h-14 text-white font-bold text-xl cursor" onClick={login} >
                        Login
                    </button>
                    <Link to="/register" className="text-secondary underline">
                        Not yet Registered ? Click Here To Signup
                    </Link>
                    
                </div>


                
            </div>
        </div>


    );
}

export default Login;