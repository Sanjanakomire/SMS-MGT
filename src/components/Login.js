import React, { useState } from 'react';
import './Login.css';

const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    // Implement authentication logic here (sending credentials to Flask backend)
};

return (
    <div className="login-container">
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        <button type="submit">Login</button>
    </form>
    </div>
);
};

export default Login;


