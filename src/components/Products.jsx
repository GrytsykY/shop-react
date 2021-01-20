import axios from 'axios';
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import ProductCard from '../containers/ProductCart';

class Products extends Component {
  UNSAFE_componentWillMount() {
    const { setProducts } = this.props;
    axios.get('/products.json').then(({ data }) => {
      setProducts(data);
    })
  }

  render() {
    const { products, isReady } = this.props;
    
    return (

      <Card.Group>
        {
          !isReady ? 'Загрузка...' :
            products.map((product, i) => (
              <ProductCard
                key={i}
                {...product} />
            ))
        }
      </Card.Group>
    );
  }
}

export default Products;


