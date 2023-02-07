import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { rutas } from './router/rutas';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rutas} />
  </React.StrictMode>
);