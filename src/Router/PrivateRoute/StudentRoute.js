import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useStudent from '../../Hooks/useStudent';

const StudentRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isStudent, isStudentLoading] = useStudent(user?.email);
    const location = useLocation();

    if (loading || isStudentLoading) {
        return <div className="w-28 h-28 mx-auto mt-32 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
    }

    if (user && isStudent) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default StudentRoute;