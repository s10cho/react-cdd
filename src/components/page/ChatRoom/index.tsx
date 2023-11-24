import React from 'react';

export const ChatRoom = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="p-4 bg-gray-800 text-white text-xl">Chat Room Name</div>
            <div className="flex-grow flex flex-col-reverse overflow-y-auto">
                <div className="flex flex-col space-y-4 p-4">
                    <div className="flex flex-col items-start">
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://source.unsplash.com/random"
                                alt="Profile"
                                className="w-6 h-6 rounded-full hidden sm:block"
                            />
                            <span className="font-bold hidden sm:block">John</span>
                        </div>
                        <div className="mt-2 bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs">
                            Hello! How can I assist you today?
                        </div>
                        <span className="text-gray-500 text-sm mt-1">10:00 AM</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="mt-2 bg-gray-300 rounded-lg py-2 px-4 max-w-xs">
                            Sure! I can help you with that.
                        </div>
                        <span className="text-gray-500 text-sm mt-1">10:02 AM</span>
                    </div>
                    {/* More message components */}
                </div>
            </div>
            <div className="p-4 flex items-center">
                <input
                    className="flex-grow bg-gray-200 rounded-full p-2 mr-2 focus:outline-none"
                    type="text"
                    placeholder="Type your message..."
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2">
                    Send
                </button>
            </div>
        </div>
    );
};
