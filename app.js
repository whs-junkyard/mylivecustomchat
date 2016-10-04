import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './src/Chat';

const root = document.getElementById('app');
ReactDOM.render(<Chat qs={window.location.search.substring(1)} />, root);
