import React, { useState } from 'react'
import { LuUsers } from "react-icons/lu";
import { TbSpeakerphone } from "react-icons/tb";
import { PiNetworkFill } from "react-icons/pi";
import { Chart as Chartjs, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import revenueData from '../Data/revenueData.json'
import Sidebar from './Sidebar';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

function Cards() {
    const [home, setHome] = useState("Dashboard");
    return (
        <div className="flex flex-col lg:flex-row justify-between">
            <Sidebar className="fixed z-1" home={home} setHome={setHome} />
            {
                home === "Dashboard" ?
                    (<div className="cards-div h-screen flex flex-col items-center">
            <div className="card-div-with-sideBar flex">
                <div className='cards-component flex flex-wrap items-center justify-center p-4 gap-4 sm:gap-6'>
                    {/* User Card */}
                    <div className="card card-image-cover relative max-w-xs w-60 sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm">
                        <div className="card-body">
                            <div className='flex items-center gap-2'>
                                <LuUsers className='bg-blue-500 w-8 h-8 p-1 rounded-lg' />
                                Users
                            </div>
                            <div className="card-footer">
                                <span className="absolute right-1.5 text-blue-600 font-bold">160</span>
                            </div>
                        </div>
                    </div>

                    {/* Referral Users Card */}
                    <div className="card card-image-cover relative max-w-xs w-60 sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm">
                        <div className="card-body">
                            <div className='flex items-center gap-2'>
                                <TbSpeakerphone className='bg-blue-500 w-8 h-8 p-1 rounded-lg' />
                                Referral Users
                            </div>
                            <div className="card-footer">
                                <span className="absolute right-1.5 text-blue-600 font-bold">290</span>
                            </div>
                        </div>

                    </div>

                    {/* Today's Organic Users Card */}
                    <div className="card card-image-cover relative max-w-xs w-60 sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm">
                        <div className="card-body">
                            <div className='flex items-center gap-2'>
                                <TbSpeakerphone className='bg-blue-500 w-8 h-8 p-1 rounded-lg' />
                                Today's Organic Users
                            </div>
                            <div className="card-footer">
                                <span className="absolute right-1.5 text-blue-600 font-bold">76</span>
                            </div>
                        </div>

                    </div>

                    {/* This Week's Users Card */}
                    <div className="card card-image-cover relative max-w-xs w-60 sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm">
                        <div className="card-body">
                            <div className='flex items-center gap-2'>
                                <PiNetworkFill className='bg-blue-500 w-8 h-8 p-1 rounded-lg' />
                                This Week Users
                            </div>
                            <div className="card-footer">
                                <span className="absolute right-1.5 text-blue-600 font-bold">679</span>
                            </div>
                        </div>

                    </div>

                    {/* This Month's Users Card */}
                    <div className="card card-image-cover relative max-w-xs w-60 sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm">
                        <div className="card-body">
                            <div className='flex items-center gap-2'>
                                <PiNetworkFill className='bg-blue-500 w-8 h-8 p-1 rounded-lg' />
                                This Month Users
                            </div>
                            <div className="card-footer">
                                <span className="absolute right-1.5 text-blue-600 font-bold">22727</span>
                            </div>
                        </div>

                    </div>

                    {/* Last Month's Users Card */}
                    <div className="card card-image-cover relative max-w-xs w-60 sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm">
                        <div className="card-body">
                            <div className='flex items-center gap-2'>
                                <PiNetworkFill className='bg-blue-500 w-8 h-8 p-1 rounded-lg' />
                                Last Month Users
                            </div>
                            <div className="card-footer">
                                <span className="absolute right-1.5 text-blue-600 font-bold">71291</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="dataCard w-full text-center sm:w-4/5 lg:w-3/4 xl:w-2/3 h-80 m-auto">
                <Line
                    data={{
                        labels: revenueData.map((data) => data.label),
                        datasets: [
                            {
                                label: "Registrations",
                                data: revenueData.map((data) => data.Registrations),
                                backgroundColor: "#064FF0",
                                borderColor: "#064FF0",
                            },
                            {
                                label: "Referrals",
                                data: revenueData.map((data) => data.Referrals),
                                backgroundColor: "#FF3030",
                                borderColor: "#FF3030",
                            },
                        ],
                    }}
                />
            </div>
        </div>): "Component does not exists"
            }
        </div>
    );
}

export default Cards;
