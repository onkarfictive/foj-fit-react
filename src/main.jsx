import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.scss'
import './style/dark-theme.scss'
import './style/light-theme.scss'
import App from './App.jsx'
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "@fontsource/poppins"; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fontsource/poppins/400.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/poppins/600.css";
import "./style/main.scss";
import 'primeicons/primeicons.css';
import store from "./redux/store";
import { Provider } from "react-redux";


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
