import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import eye from '../../Images/Eye.png';
import Google from '../../Images/Googleicon.png';

const LoginForm = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [userId, setUserId] = useState(null); // State to hold the user ID
    const navigate = useNavigate();

    const getSignupForm = () => {
        return {
            emailOrPhone, password
        };
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const LoginForm = getSignupForm();

        try {
            const response = await axios.post('http://localhost:4000/api/signin', {
                email: emailOrPhone,
                password,
                withCredentials: true,
            }
            // , {
              
            // }
          );

            console.log('Login successful:', response.data);
            const fetchedUserId = response.data.userId; // Store user ID from response
            setUserId(fetchedUserId); // Store user ID in state
            console.log('User ID:', fetchedUserId); // Log the user ID to the console

            // Fetch user details using the user ID
            const userResponse = await axios.get(`http://localhost:4000/api/user/${fetchedUserId}`, {
                withCredentials: true,
            });

            console.log('Fetched User Details:', userResponse.data.user); // Log the fetched user details

            localStorage.setItem('userId', fetchedUserId); // Persist user ID in localStorage
            navigate('/Dashboard');
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data.message : error.message);
            setError(error.response ? error.response.data.message : 'Something went wrong');
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible); // Toggle password visibility correctly
    };

    // Retrieve user ID from localStorage on component mount
    useEffect(() => {
        const id = localStorage.getItem('userId');
        if (id) {
            setUserId(id);
        }
    }, []);

    return (
        <div>
            <div className="max-w-sm mx-auto p-10 bg-white rounded-lg text-left shadow-[6px_6px_20px_0px_rgba(0,0,0,0.12)]">
                <h2 className="text-[var(--Dark-500,var(--Grey-Med,#848484))] font-jost text-[20px] font-normal leading-[28px] self-stretch">Welcome!</h2>
                <h3 className="text-[var(--Dark-grey,#4F4F4F)] font-jost text-[24px] font-semibold leading-[28px] self-stretch mb-8">Please Login here</h3>
                <form onSubmit={handleLogin}>
                    <div className="mb-5 text-left">
                        <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Email/Phone Number *</label>
                        <input
                            type="text"
                            placeholder="Email"
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)}
                            className="flex w-full h-[40px] p-[12px] border border-[var(--Teal,#378BA6)] rounded-xl focus:outline-none focus:border-[var(--Teal,#378BA6)]"
                            required
                        />
                    </div>
                    <div className="mb-5 text-left relative">
                        <label className="flex flex-col justify-center w-[192px] h-[20px] text-[var(--Teal,#378BA6)] font-jost text-[16px] font-medium leading-[130%] tracking-[0.08px]">Password *</label>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="flex w-full h-[40px] p-[12px] border border-[var(--Teal,#378BA6)] rounded-xl focus:outline-none focus:border-[var(--Teal,#378BA6)]"
                            required
                        />
                        <span
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-8 cursor-pointer"
                        >
                            <img src={eye} alt="Toggle password visibility" />
                        </span>
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <label className=" text-[var(--Dark-grey,#4F4F4F)] font-jost text-[18px] font-normal leading-[130%] tracking-[0.09px]">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="mr-2 bg-[var(--Teal,#378BA6)]"
                            />
                            Remember me
                        </label>
                        <a href="/forgot-password" className="text-[var(--Teal,#378BA6)] font-jost text-[14px] font-normal leading-[130%] tracking-[0.07px]">
                            Forgot Password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 text-white mb-4 flex h-[52px] px-[12px] justify-center items-center gap-[8px] self-stretch rounded-[8px] bg-[var(--Teal,#378BA6)]"
                    >
                        Confirm
                    </button>
                    <div className="mb-5">
                        <button className="w-full py-3 flex h-[40px] p-[12px] justify-center items-center self-stretch rounded-[12px] border-[0.5px] border-[var(--Teal,#378BA6)] bg-[var(--White,#FFF)]">
                            <span className="mr-2"><img src={Google} alt="Google icon" /></span>
                            <span className="text-[var(--Teal,#378BA6)] text-center font-poppins text-[16px] font-medium leading-[120%] tracking-[0.32px] opacity-70">Or Sign in with Google</span>
                        </button>
                    </div>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="mt-5 text-center">
                    <span className="text-[var(--Black-60,rgba(17,17,19,0.60))] text-center font-jost text-[18px] font-normal leading-[130%] tracking-[0.09px]">New User? </span>
                    <a href="/signup" className="text-[var(--Teal,#378BA6)] font-jost text-[18px] font-normal leading-[130%] tracking-[0.09px] underline">
                        SIGN UP HERE
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
