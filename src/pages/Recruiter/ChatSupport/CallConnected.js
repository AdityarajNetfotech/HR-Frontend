import React from 'react'

function CallConnected() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-[100%] w-full rounded-[12px] mt-8">
                <img style={{ height: "350px", width: "100%", borderRadius: "12px" }} src="https://img.freepik.com/free-photo/young-hispanic-call-center-agent-man-smiling-happy-working-office_839833-34402.jpg?t=st=1732620059~exp=1732623659~hmac=07826730e603318e5e8fa26ad25d10a084e2b99aaa9eaf1db4cab3e06121ca42&w=900" alt="" />
                <div style={{ marginTop: "10px" }} className="flex gap-4">
                    <div className="flex items-center gap-5 bg-blue-200 p-2 rounded-lg">
                        <i className="fa-solid fa-microphone cursor-pointer text-[18px]"></i>
                        <i className="fa-solid fa-phone cursor-pointer"></i>
                    </div>
                    <button
                        className="bg-red-500 p-2 rounded-lg text-white"
                    >
                        <strong>End Call</strong>
                    </button>
                </div>
            </div>
        </>
    )
}

export default CallConnected
