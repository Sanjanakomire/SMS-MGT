
import React, { useState } from 'react';
import axios from 'axios';

const SMSManagement = () => {
const [recipient, setRecipient] = useState('');
const [message, setMessage] = useState('');
const [smsError, setSmsError] = useState(null);

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    const response = await axios.post('/api/sms', {
        recipient,
        message,
    });
    setRecipient('');
    setMessage('');
    } catch (error) {
    setSmsError(error.response.data.message);
    }
};

return (
    <div>
    <h2>SMS Management</h2>
    <form onSubmit={handleSubmit}>
    <label>Recipient:</label>
        <input type="text" value={recipient}
