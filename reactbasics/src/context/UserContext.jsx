import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username) => {
        setUser({ username });
    };
    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}
