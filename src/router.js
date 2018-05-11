import 'raf/polyfill';
import 'babel-polyfill';
import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import App from './components/App/App';
import HomePage from "./components/Pages/HomePage/HomePage";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import UserPage from "./components/Pages/UserPage/UserPage";


if (module.hot) {
  module.hot.accept();
}

export default <BrowserRouter>
  <App>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/user/:name" component={UserPage}/>
      <Route component={ErrorPage}/>
    </Switch>
  </App>
</BrowserRouter>
