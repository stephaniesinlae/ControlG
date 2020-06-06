import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer/MainContainer';
import Agregar from './containers/Agregar/Agregar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/add" component={Agregar} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;