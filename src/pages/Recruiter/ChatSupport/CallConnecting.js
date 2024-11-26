import React from 'react';

function CallConnecting({ handleEndCall }) { // Receive handleEndCall as a prop
    return (
        <>
            <div className="flex flex-col justify-center items-center h-[200px] border border-blue-500 w-full rounded-[12px] mt-20">
                <h1 className="text-blue-500 mb-4">Connecting</h1>
                <button className="bg-gray-500 px-2.5 rounded-lg text-white h-[38px]">
                    SA
                </button>
                <h1 className="mt-2">
                    <strong>SAAD AKHTAR</strong>
                </h1>
                <br />
                <div className="flex gap-4">
                    <div className="flex items-center gap-5 bg-blue-200 p-2 rounded-lg">
                        <i className="fa-solid fa-microphone cursor-pointer text-[18px]"></i>
                        <i className="fa-solid fa-phone cursor-pointer"></i>
                    </div>
                    <button 
                        className="bg-red-500 p-2 rounded-lg text-white"
                        onClick={handleEndCall} // Call the function when the button is clicked
                    >
                        <strong>End Call</strong>
                    </button>
                </div>
            </div>
        </>
    );
}

export default CallConnecting;
