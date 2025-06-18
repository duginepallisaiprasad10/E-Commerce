import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import MyContext from './Context/MyContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './ReduxToolKit/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <MyContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MyContext>
    </Provider>
  </StrictMode>
);
