import React from 'react';
import useUserRole from '../../hooks/useUserRole';
// import Loading from '../../../components/Loading';
import AdminDashboard from './AdminDashboard';
import HRDashboard from './HRDashboard';
import EmployeeDashboard from './EmployeeDashboard';
// import Forbidden from '../../Forbidden/Forbidden';

const DashboardHome = () => {
    const { role, roleLoading } = useUserRole();

    if (roleLoading) {
        // return <Loading></Loading>
        return <h1>Loading...</h1>;
    }

    if(role === 'employee' ) {
        return <EmployeeDashboard></EmployeeDashboard>
    }
    else if(role === 'hr'){
        return <HRDashboard></HRDashboard>
    }
    else if(role ==='admin'){
        return <AdminDashboard></AdminDashboard>
    }
    else {
        // return <Forbidden></Forbidden>
        return <h1>Forbidden</h1>
    }

};

export default DashboardHome;