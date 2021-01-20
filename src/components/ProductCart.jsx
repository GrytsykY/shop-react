import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react'

const ProductCard = product => {
  const { name, price, image, items, id, addedToCart } = product;
  if (items[id] !== undefined) {
    var count = items[id].items.length
  }
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description></Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>
          <Icon name='money bill alternate outline' className="green" />&nbsp;&nbsp;
        <span className="red"><b>Цена:&nbsp; {price} $ кг</b></span>
        </p>
      </Card.Content>
      <Button onClick={() => addedToCart(product)}>
        Добавить в корзину {count > 0 && `(${count})`}
      </Button>
    </Card>
  );
}

export default ProductCard;
