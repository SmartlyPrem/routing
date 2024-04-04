import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RoutingApp from './routing/RoutingApp.jsx';
import Index from './Context/Index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Index>
                <App />
        </Index>
        // <RoutingApp/>
);