import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';  // Correct import

export default function Header() {
    const { user } = useContext(UserContext);

    return (
        <div>
            {user ? (<h1>Welcome, {user.username}</h1>) : (<p>Please Log in.</p>)}
        </div>
    );
}
