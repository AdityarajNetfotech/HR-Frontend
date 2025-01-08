import React, { useState } from 'react';
import EmpSidebar from '../../global/EmpSidebar';
import Message from '../../Recruiter/ChatSupport/Message';
import EmpCallConnecting from './EmpCallConnecting';
// import CallConnecting from './CallConnecting';
// import CallConnected from './CallConnected';

function Empchatsupport() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isFullWidth, setIsFullWidth] = useState(true);
    const [isVideoCallActive, setIsVideoCallActive] = useState(false);  // New state for video call toggle

    const handleChatClick = () => {
        setIsChatOpen(!isChatOpen);
        setIsFullWidth(!isFullWidth); // Toggle width of content one
    };

    const handleVideoCallClick = () => {
        setIsVideoCallActive(true);  // Set video call active when icon is clicked
    };

    // Function to end the call and go back to messages
    const handleEndCall = () => {
        setIsVideoCallActive(false);  // Set video call inactive
    };

    // Function to truncate messages based on width condition
    const truncateMessage = (message) => {
        const maxLength = isFullWidth ? 150 : 40; // Adjust length based on width
        return message.length > maxLength ? message.substring(0, maxLength) + "..." : message;
    };

    return (
        <>
            <div className="h-full flex flex-row bg-[#EAF1F3] gap-4">
                <div className="max-w-[30%]">
                    <EmpSidebar />
                </div>

                <section id="r-chatSupport" style={{ display: "flex", gap: "30px" }} className="pt-12">

                    {/* message list content */}
                    <div
                        id="r-chatSupport_list"
                        className="p-5 bg-white rounded-lg h-[500px]"
                        style={{ width: isFullWidth ? '90vw' : '300px' }}  // Conditional width
                    >
                        <div className="flex flex-col">
                            <div className="relative">
                                <button className="w-full rounded-lg text-center py-2 bg-gray-500 text-white sticky top-0 z-10">
                                    Schedule a Meet
                                </button>
                            </div>

                            <div className="flex justify-between mt-4">
                                <span className="cursor-default font-bold">Chat</span>
                                <div className="gap-4 flex">
                                    <span> <strong> <i className="fa-solid fa-sliders cursor-pointer"></i> </strong> </span>
                                    <span> <strong> <i className="fa-regular fa-pen-to-square cursor-pointer"></i> </strong> </span>
                                </div>
                            </div>

                            <div className="overflow-y-auto mt-4 h-[380px]">

                                {/* chat list content */}
                                <div className="pt-4 pb-2 border-b border-lightslategrey flex items-center gap-2.5 cursor-pointer"
                                    onClick={handleChatClick} >
                                    <button className="bg-gray-500 px-2.5 rounded-lg text-white h-[38px]">
                                        SA
                                    </button>
                                    <div>
                                        <h1 className="text-blue-500">SAAD AKHTAR</h1>
                                        <p className="flex justify-center">
                                            {/* message */}
                                            <span className="text-sm">
                                                {truncateMessage("Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing.")}
                                            </span>
                                            <span className="ml-2">1:40pm</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-4 pb-2 border-b border-lightslategrey flex items-center gap-2.5 cursor-pointer" onClick={handleChatClick} >
                                    <button className="bg-gray-500 px-2.5 rounded-lg text-white h-[38px]">
                                        SA
                                    </button>
                                    <div>
                                        <h1 className="text-blue-500">SAAD AKHTAR</h1>
                                        <p className="flex justify-center">
                                            {/* message */}
                                            <span className="text-sm">
                                                {truncateMessage("Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing.")}
                                            </span>
                                            <span className="ml-2">1:40pm</span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* message content */}
                    {isChatOpen && !isVideoCallActive && (
                        <div className="w-[800px] p-5 bg-white rounded-lg h-[500px] relative flex flex-col">
                            {/* chat message content */}
                            <div className="bg-cyan-200 flex justify-between px-4 py-2 rounded-lg">
                                <p>SAAD AKHTAR</p>
                                <div className="flex items-center gap-5">
                                    <div className="bg-white w-[60px] px-2 py-1 flex justify-between rounded-lg">
                                        <i
                                            className="fa-solid fa-video cursor-pointer"
                                            onClick={handleVideoCallClick} // Video call click handler
                                        ></i>
                                        <i className="fa-solid fa-phone cursor-pointer"></i>
                                    </div>
                                    <i className="fa-solid fa-trash-can cursor-pointer"></i>
                                </div>
                            </div>

                            <Message />
                        </div>
                    )}

                    {/* Call Connecting content */}
                    {isChatOpen && isVideoCallActive && (
                        <div className="w-[800px] p-5 bg-white rounded-lg h-[500px] relative flex flex-col">
                            <div className="bg-cyan-200 flex justify-between px-4 py-2 rounded-lg">
                                <p>SAAD AKHTAR</p>
                                <div className="flex items-center gap-5">
                                    <div className="bg-white w-[60px] px-2 py-1 flex justify-between rounded-lg">
                                        <i
                                            className="fa-solid fa-video cursor-pointer"
                                            onClick={handleVideoCallClick} // Video call click handler
                                        ></i>
                                        <i className="fa-solid fa-phone cursor-pointer"></i>
                                    </div>
                                    <i className="fa-solid fa-trash-can cursor-pointer"></i>
                                </div>
                            </div>
                            <EmpCallConnecting handleEndCall={handleEndCall} />
                            {/* <CallConnected/> */}
                        </div>
                    )}

                </section>
            </div >
        </>
    );
}

export default Empchatsupport;

