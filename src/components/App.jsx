import axios from 'axios';
import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import Menu from '../containers/Menu';
import ProductCard from '../containers/ProductCart';

class App extends Component {
  componentWillMount() {
    const { setProducts } = this.props;
    axios.get('/products.json').then(({ data }) => {
      setProducts(data);
    })
  }

  render() {
    const { products, isReady } = this.props; 
    return (
      <Container>
        <Menu />
      
        <Card.Group>
          { 
            !isReady ? 'Загрузка...' :
            products.map((product,i) => <ProductCard key={i} {...product}/>)
          }
        </Card.Group>
      </Container>
    );
  }
}

export default App;

