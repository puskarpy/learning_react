import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

export default function Login() {

    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const { user, setUser, login, logout } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, pass })
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text" />
            <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="text" />
            {
                user ? (
                    <>
                        <p>You are logged in as {user.username}</p>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (<button onClick={handleSubmit}>Login</button>)
            }
        </div>
    )
}
