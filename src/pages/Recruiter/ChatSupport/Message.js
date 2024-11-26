import React from 'react'

function Message() {
    return (
        <>
            <div className="mt-10 flex flex-col gap-2.5 flex-grow overflow-auto">
                <div className="inline-block text-right border border-gray-300 px-4 py-2 bg-slate-100 rounded-tl-md" style={{ borderRadius: "9px 9px 0px 9px" }}>
                    <p className="m-0">Lorem ipsum dolor sit amet consecteturm lorem.</p>
                    <p className="mt-1 text-sm text-gray-500">6:30pm</p>
                </div>

                <div className="flex gap-3 items-end">
                    <button className="bg-gray-500 px-2.5 rounded-lg text-white h-[38px]">SA</button>
                    <div className="inline-block text-left border border-gray-300 px-4 py-2 bg-slate-100 rounded-tl-none" style={{ borderRadius: "9px 9px 9px 0px" }}>
                        <p className="m-0">Lorem ipsum dolorum praesentium? consectetuasdr lorem lorem.</p>
                        <p className="mt-1 text-sm text-gray-500">6:30pm</p>
                    </div>
                </div>

                <div className="inline-block text-right border border-gray-300 px-4 py-2 bg-slate-100 rounded-tl-md" style={{ borderRadius: "9px 9px 0px 9px" }}>
                    <p className="m-0">Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="mt-1 text-sm text-gray-500">6:30pm</p>
                </div>
                <div className="inline-block text-right border border-gray-300 px-4 py-2 bg-slate-100 rounded-tl-md" style={{ borderRadius: "9px 9px 0px 9px" }}>
                    <p className="m-0">Lorem ipsum dolor sit amet consecteturm lorem.</p>
                    <p className="mt-1 text-sm text-gray-500">6:30pm</p>
                </div>

                <div className="flex gap-3 items-end">
                    <button className="bg-gray-500 px-2.5 rounded-lg text-white h-[38px]">SA</button>
                    <div className="inline-block text-left border border-gray-300 px-4 py-2 bg-slate-100 rounded-tl-none" style={{ borderRadius: "9px 9px 9px 0px" }}>
                        <p className="m-0">Lorem ipsum dolorum praesentium? consectetuasdr lorem lorem.</p>
                        <p className="mt-1 text-sm text-gray-500">6:30pm</p>
                    </div>
                </div>

                <div className="inline-block text-right border border-gray-300 px-4 py-2 bg-slate-100 rounded-tl-md" style={{ borderRadius: "9px 9px 0px 9px" }}>
                    <p className="m-0">Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="mt-1 text-sm text-gray-500">6:30pm</p>
                </div>
            </div>

            <div className="flex gap-3 items-center justify-between p-4 bg-white border-t border-gray-200 rounded-b-lg">
                <input
                    className="border border-cyan-400 w-[650px] px-5 py-1 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    type="text"
                    placeholder="Write Message"
                />
                <i className="fa-solid fa-paperclip text-cyan-500 text-xl"></i>
                <button className="w-[100px] px-5 py-1 rounded-lg text-white text-left bg-cyan-500 flex items-center justify-between">
                    Send <i className="fa-regular fa-paper-plane"></i>
                </button>
            </div>
        </>
    )
}

export default Message
