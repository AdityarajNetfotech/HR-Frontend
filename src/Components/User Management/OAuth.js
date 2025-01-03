import React, { useState, useEffect } from 'react'
import Google from '../../Images/Googleicon.png';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebase';

function OAuth() {

    const [userId, setUserId] = useState(null); // State for user ID
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);

            // Send Google email to backend
            const response = await fetch("http://localhost:4000/api/google-signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // To include cookies
                body: JSON.stringify({
                    email: result.user.email,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Login successful:", data);

                const fetchedUserId = data.userId;
                setUserId(fetchedUserId);

                // Save user ID in localStorage
                localStorage.setItem("userId", fetchedUserId);

                // Fetch user details using user ID
                const userResponse = await axios.get(`http://localhost:4000/api/user/${fetchedUserId}`, {
                    withCredentials: true,
                });

                const user = userResponse.data.user;
                console.log("Fetched User Details:", user);

                // Redirect based on user type
                if (user.joinAs === "client") {
                    navigate("/EmployerDashboard");
                } else if (user.joinAs === "recruiter") {
                    navigate("/Dashboard");
                } else if (user.joinAs === "admin") {
                    navigate("/AdminDashboard");
                } else {
                    navigate("/Dashboard");
                }
            } else {
                const errorData = await response.json();
                alert("Login failed: " + errorData.message);
            }
        } catch (error) {
            console.error("Error during Google login:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    // Retrieve user ID from localStorage on component mount
    useEffect(() => {
        const id = localStorage.getItem('userId');
        if (id) {
            setUserId(id);
        }
    }, []);
    return (
        <>
            <div className="mb-5">
                <button type='button' onClick={handleGoogleLogin} className="w-full py-3 flex h-[40px] p-[12px] justify-center items-center self-stretch rounded-[12px] border-[0.5px] border-[var(--Teal,#378BA6)] bg-[var(--White,#FFF)]">
                    <span className="mr-2"><img src={Google} alt="Google icon" /></span>
                    <span className="text-[var(--Teal,#378BA6)] text-center font-poppins text-[16px] font-medium leading-[120%] tracking-[0.32px] opacity-70">Or Sign in with Google</span>
                </button>
            </div>
        </>
    )
}

export default OAuth
