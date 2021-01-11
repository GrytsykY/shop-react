import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Menu from '../containers/Menu';
import Products from '../containers/Products';

class App extends Component {

  render() {
    
    return (
      <BrowserRouter>
        <Container>
          <Menu />
        
          <Route exact path="/" component={Products} />
          <Route path="/baskets"  />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;

