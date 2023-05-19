import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoaderSpinner from '../components/LoaderSpinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <LoaderSpinner />
    }

    if (!user) {
        return <Navigate state={{ from: location }} to={'/login'} replace={true} />
    }

    return children;
};

export default PrivateRoute;