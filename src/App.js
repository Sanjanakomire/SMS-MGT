import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ProgramControl from './components/ProgramControl';

function App() {
return (
    <Router>
    <Routes>
        <Route path="/Login" component={Login} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/program-control" component={ProgramControl} />
        <Route path="/" exact component={Login} /> {/* Default route */}
    </Routes>
    </Router>
);
}

export default App;

