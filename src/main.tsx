import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import index from '@/store';
import './assets/css/app.scss';

import App from '@/App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={index}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
