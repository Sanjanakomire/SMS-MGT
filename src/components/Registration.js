
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Registration = () => {
const { register, handleSubmit, errors } = useForm();
const [registrationError, setRegistrationError] = useState(null);

const onSubmit = async (data) => {
    try {
    const response = await axios.post('/api/register', data);
    window.location.href = '/login';
    } catch (error) {
    setRegistrationError(error.response.data.message);
    }
};
return (
    <div>
    <h2>Registration</h2>
<form onSubmit={handleSubmit(onSubmit)}>
        <label>Username:</label>
        <input type="text" {...register('username')} />
        {errors.username && <div>{errors.username.message}</div>}
        <br />
        <label>Email:</label>
        <input type="email" {...register('email')} />
        {errors.email && <div>{errors.email.message}</div>}
        <br />
        <label>Password:</label>
        <input type="password" {...register('password')} />
        {errors.password && <div>{errors.password.message}</div>}
        <br />
        <button type="submit">Register</button>
        {registrationError && <div style={{ color: 'red' }}>{registrationError}</div>}
    </form>
    </div>);
};

export default Registration;
