import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

// Replace this:
// ReactDOM.render(<App />, document.getElementById('root'));

// With this:
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);

