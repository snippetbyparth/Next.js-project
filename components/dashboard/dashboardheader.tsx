import { ReactNode } from "react";

export default function DashboardHeader() {
    return(
        <header className="bg-gray-800 p-4 m-1.5 rounded-lg">
            <div className="flex flex-col">
                <h1 className="text-white text-2xl font-bold">Welcome Back, Parth</h1>
                <p className="text-white">Saturday, 1 August</p>
            </div>
        </header>
    )
}