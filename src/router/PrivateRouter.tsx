import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { ContextApp } from '../types/ContextApp';

export const PrivateRouter = ({ children }: {children: JSX.Element}): JSX.Element => {
    const { user } = useContext<ContextApp>(UserContext);
    return (user) ? children : <Navigate to='/'/>
}
