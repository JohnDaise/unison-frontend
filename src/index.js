// import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import { makeMainRoutes } from './routes';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { Provider } from "react-redux";

import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import store from "./redux/store";

const routes = makeMainRoutes();

ReactDOM.render(
      routes,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
