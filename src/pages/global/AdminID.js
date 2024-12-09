import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminID() {
    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     // Fetch user profile when the component mounts
    //     const fetchUserProfile = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:4000/api/me'); // Adjust the URL to your actual API endpoint
    //             setUser(response.data.user); // Assuming the response contains the user object
    //         } catch (error) {
    //             console.error("Error fetching user profile:", error);
    //         }
    //     };
        
    //     fetchUserProfile();
    // }, []);

    // if (!user) {
    //     return <div>Loading...</div>; // Optional: Show loading state while fetching data
    // }

    return (
        <>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <i style={{ fontSize: "20px", borderRadius: "50%", padding: "10px 12px" }} className="fa-regular fa-bell bg-blue-100"></i>

                <div className="flex items-center gap-2">
                    <i style={{ fontSize: "20px", borderRadius: "50%", padding: "10px 12px" }} className="fa-regular fa-user bg-blue-100"></i>
                    <div>
                        <h1><strong>SAAD AKHTAR</strong></h1>
                        <h1>ID: 1234567</h1> {/* Displaying the user ID */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminID;
