import {ReactNode} from "react";

export default function SideBar(){
    return (
        <div className="bg-gray-800 text-white w-64 min-h-screen p-4 m-1.5 rounded-t-lg">
            <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
            <ul>
                <li className="mb-2"><a href="#" className="hover:text-gray-400">Home</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-400">Profile</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-400">Settings</a></li>
                <li className="mb-2"><a href="#" className="hover:text-gray-400">Logout</a></li>
            </ul>
        </div>
    )
}