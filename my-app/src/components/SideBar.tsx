"use client";

import { ChevronDown, Command, Lock, Users } from "lucide-react";
import { MainHome_Links, Metrics, Reports_Links, Teams_Links } from "./sidebarData";
import Link from "next/link";
import { useState } from "react";



export default function SideBar() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    return (
        <main
            className="w-20 md:w-58 lg:w-58 flex-shrink-0 h-max bg-neutral-100 rounded-lg 
                sticky top-0 border border-neutral-200"
        >
            <div
                className="flex items-center lg:justify-start md:justify-start justify-center gap-4 text-2xl 
                    font-semibold px-4 py-4"
            >
                <h1
                    className="lg:flex md:flex hidden"
                >
                    Side-Bar
                </h1>
                <Command 
                    size={26}
                />
            </div>
            <div
                className="py-4 px-4 space-y-2"
            >
                <h3
                    className="uppercase lg:text-start md:text-start text-center text-neutral-600 text-xs py-2"
                >
                    Main Menu
                </h3>
                <ul
                    className="flex flex-col gap-2"
                >
                    {MainHome_Links.map((link, idx) => {
                        if(link.label.toLowerCase() !== "settings") {
                            return (
                                <Link
                                    href={link?.path}
                                    key={idx}
                                >
                                    <li
                                        className="flex items-center gap-2
                                            text-black cursor-pointer text-sm
                                            hover:bg-neutral-300/50 py-1 px-2 rounded-lg"
                                    >
                                        <link.icon size={20}/> <span className="lg:block md:block hidden">{link.label}</span>
                                    </li>
                                </Link>
                            )
                        }else{
                            return (
                                <div
                                    key={idx}
                                >
                                    <button
                                        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                                        className={`w-full text-black text-sm
                                            cursor-pointer hover:bg-neutral-300/50 
                                            py-1 px-2 rounded-lg flex items-center 
                                            justify-between
                                            ${isSettingsOpen && "border border-neutral-200 shadow-lg shadow-neutral-800/20"}`}
                                    >
                                        <li
                                            className="flex items-center gap-2"
                                        >
                                            <link.icon size={20}/> <span className="lg:block md:block hidden">{link.label}</span>
                                        </li>
                                        <ChevronDown 
                                            size={16}
                                            className={`transition-all duration-300 text-neutral-500 ${isSettingsOpen ? "" : "rotate-90"}`}
                                        />
                                    </button>
                                    <ul
                                        className={`flex flex-col gap-1 text-sm text-black
                                            ml-4 border-l border-neutral-300 overflow-hidden
                                            transition-[max-height,opacity] duration-300 ease-in-out
                                            ${isSettingsOpen ? "max-h-40 opacity-100 p-1" : "max-h-0 opacity-0 p-0"}`}
                                    >
                                        {link.children?.map((chil, i) => {
                                            return (
                                                <Link
                                                    key={i}
                                                    href={chil.path}
                                                >
                                                    <li
                                                        className="flex items-center gap-2 text-neutral-700
                                                            hover:bg-neutral-300/50 rounded-lg lg:px-2 md:px-2 
                                                            lg:py-1 md:py-1"
                                                    >
                                                        <span className="p-1 flex justify-center items-center">
                                                            <chil.icon size={16}/>
                                                        </span> <span className="lg:block md:block hidden">{link.label}</span>
                                                    </li>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        }
                    })}
                </ul>
                <h3
                    className="uppercase lg:text-start md:text-start text-center text-neutral-600 text-xs py-2"
                >
                    Teams
                </h3>
                <ul
                    className="flex flex-col gap-2"
                >
                    {Teams_Links.map((link, idx) => {
                            return (
                                <Link
                                    href={link?.path}
                                    key={idx}
                                >
                                    <li
                                        className="flex items-center justify-between gap-2 
                                            text-black cursor-pointer text-sm
                                            hover:bg-neutral-300/50 py-1 px-2 rounded-lg"
                                    >
                                        <div
                                            className="flex items-center gap-4"
                                        >
                                            {link.icon === Users ? <link.icon size={20}/> : (
                                            <div 
                                                className={`h-4 w-4 flex font-semibold text-white text-xs
                                                    items-center justify-center
                                                    rounded ${link.label.charAt(0).toLowerCase() === "p" ? "bg-orange-600" : "bg-blue-600"}`}
                                            >{link.label.charAt(0). toUpperCase()}</div>
                                        )} <span className="lg:block md:block hidden">{link.label}</span>
                                        </div> {link.label.toLowerCase() !== "all teams" && (<Lock size={14} />)}
                                    </li>
                                </Link>
                            )
                        })}
                </ul>
                <h3
                    className="uppercase lg:text-start md:text-start text-center text-neutral-600 text-xs py-2"
                >
                    Reports
                </h3>
                <ul
                    className="flex flex-col gap-2"
                >
                    {Reports_Links.map((link, idx) => {
                            return (
                                <Link
                                    href={link?.path}
                                    key={idx}
                                >
                                    <li
                                        className="flex items-center gap-2 
                                            text-black cursor-pointer text-sm
                                            hover:bg-neutral-300/50 py-1 px-2 rounded-lg"
                                    >
                                        <link.icon size={20}/> <span className="lg:block md:block hidden">{link.label}</span>
                                    </li>
                                </Link>
                            )
                        })}
                </ul>
                <h3
                    className="uppercase lg:text-start md:text-start text-center text-neutral-600 text-xs py-2"
                >
                    Metrics
                </h3>
                <ul
                    className="flex flex-col gap-2"
                >
                    {Metrics.map((link, idx) => {
                            return (
                                <Link
                                    href={link?.path}
                                    key={idx}
                                >
                                    <li
                                        className="flex items-center gap-2 
                                            text-black cursor-pointer text-sm
                                            hover:bg-neutral-300/50 py-1 px-2 rounded-lg"
                                    >
                                        <link.icon size={20}/> <span className="lg:block md:block hidden">{link.label}</span>
                                    </li>
                                </Link>
                            )
                        })}
                </ul>
            </div>
        </main>
    )
}