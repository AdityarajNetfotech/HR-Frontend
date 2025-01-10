import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminID() {

    const [user, setUser] = useState(null); // State to hold user data

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/memyprofile', {
                    withCredentials: true, // Ensure cookies are sent for token authentication
                });
                // console.log(response.data);

                const userData = response.data.user;

                if (userData) {
                    userData.firstName = capitalize(userData.firstName);
                    userData.lastName = capitalize(userData.lastName);
                }

                setUser(userData);
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };

        fetchUserProfile();
    }, []);


    const capitalize = (str) => {
        return str.toUpperCase();
    };

    const formatUserID = (id) => {
        return id.length > 4 ? `${id.slice(0, 23)}...` : id; // Keep first 4 digits and add "..." if longer
    };

    return (
        <>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <i style={{ fontSize: "20px", borderRadius: "50%", padding: "10px 12px" }} className="fa-regular fa-bell bg-blue-100 cursor-pointer"></i>

                <div className="flex items-center gap-2">
                    <i style={{ fontSize: "20px", borderRadius: "50%", padding: "10px 12px" }} className="fa-regular fa-user bg-blue-100 cursor-pointer"></i>
                    <div className='cursor-pointer'>
                        {user ? (
                            <>
                                <h1><strong>{user.firstName} {user.lastName}</strong></h1>
                                <h1>ID: {formatUserID(user._id)}</h1>
                            </>
                        ) : (
                            <h1>Loading...</h1>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminID;
