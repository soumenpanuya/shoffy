import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppContextProvider } from './Context/AppContext';
import { FilterContextProvider } from './Context/FilterContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <FilterContextProvider>
        
      <App />

      </FilterContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);

