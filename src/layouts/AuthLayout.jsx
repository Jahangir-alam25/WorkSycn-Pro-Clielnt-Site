
import React from 'react';
import { Outlet } from 'react-router';
import registerImg from '../assets/register1.jpg';
import WorkSyncProLogo from '../components/shared/WorkSyncProLogo';

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] flex items-center justify-center">
            <div className=" bg-white shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                
                {/* Left - Image Section */}
                <div className="hidden lg:block">
                    <img
                        src={registerImg}
                        alt="Team Work"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Right - Content Section */}
                <div className="flex flex-col justify-center px-8 py-12">
                    <WorkSyncProLogo />

                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Welcome to <span className="text-primary">WorkSync Pro</span>
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Manage your team with ease. Track progress, manage payroll, and empower employees—all in one platform.
                    </p>

                    <Outlet />

                    <p className="text-center text-sm text-gray-400 mt-8">
                        © {new Date().getFullYear()} WorkSync Pro. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
