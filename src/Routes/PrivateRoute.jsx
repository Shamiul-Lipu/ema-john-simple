import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <h2>Loading.....</h2>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>;
};

export default PrivateRoute;