import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from '../containers/Products';
import BasketCart from '../containers/BasketCart';
import Menu from '../containers/Menu';
import { Container } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path="/">
              <Menu />
              <Products />
            </Route>
            <Route path="/basket" >
              <BasketCart />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;

