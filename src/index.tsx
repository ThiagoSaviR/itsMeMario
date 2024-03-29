import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
  <Suspense fallback={<div />}>
    <App />
  </Suspense>
  </BrowserRouter>
);

