import React from 'react';
import './App.css';
import Helmet from 'react-helmet';
import Screen from './Screen';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dominios from './dominio';
import Subdominios from "./subdominios";

function App() {
  return (
    <div id="App">
      <Helmet>
        { /*<title>OI</title> */ }
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Helmet>
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Screen} />
      <Route exact path="/Dominios" component={Dominios} />
      <Route exact path="/Subdominios" component={Subdominios} />
      <Screen />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
