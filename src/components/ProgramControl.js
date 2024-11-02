import React from 'react';
import './ProgramControl.css';

const ProgramControl = () => {
const controlSession = (action, sessionName) => {
    // Implement session control logic here (e.g., start, stop, restart)
    console.log(`${action} ${sessionName}`);
};

return (
    <div className="program-control-container">
    <h1>Program Control</h1>
    <button onClick={() => controlSession('start', 'session_name')}>Start</button>
    <button onClick={() => controlSession('stop', 'session_name')}>Stop</button>
    <button onClick={() => controlSession('restart', 'session_name')}>Restart</button>
    </div>
);
};

export default ProgramControl;