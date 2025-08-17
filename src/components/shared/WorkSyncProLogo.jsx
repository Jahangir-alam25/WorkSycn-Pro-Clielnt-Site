import React from 'react';
import { Link } from 'react-router';

const WorkSyncProLogo = () => {
    return (
        <div>
            <Link to='/'> <div className="flex items-center space-x-1">
                <img className="w-10 h-10" src="./logo.jpg" alt="WorkSync Pro Logo" />
                <h1 className="text-xl font-bold text-primary">
                    WorkSyncPro
                </h1>

            </div></Link>
        </div>
    );
};

export default WorkSyncProLogo;