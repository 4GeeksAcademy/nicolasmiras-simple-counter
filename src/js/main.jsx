import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

import '../index.html'

// components 
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

let seconds = 0;

function renderApp() {
  root.render(
    <React.StrictMode>
      <Home value={seconds} />
    </React.StrictMode>
  );
}

renderApp();

setInterval(() => {
  seconds++;
  renderApp();
}, 1000);




