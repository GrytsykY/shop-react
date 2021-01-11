import React from 'react';
import {Card, Image, Icon, Button} from 'semantic-ui-react'

const ProductCard = product => {
  const {name, price, image, discount, addedToCart, addedCount} = product;
  var count = 0, sum = 0, c = 0;
  // const adedToCart = (p) => {
    
  //   count++;c++;
  //   console.log("MMM",c)
  //   if(Math.floor(c/3)===0){
  //     sum += p.price; console.log("NULL")
  //   }
  //   else {
  //     sum += p.price - (Math.floor(c/3)*5);
  //     c=null;
  //   }
  //   console.log(count," FFF ",sum)
  // }

  return (
    <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>{discount?'При покупке каждого 3 кг скидка + 5%':''}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='money bill alternate outline' className="green"/>&nbsp;&nbsp;
        <span className="red"><b>Цена:&nbsp; {price} $ кг</b></span>
      </a>
    </Card.Content>
    <Button onClick={() => addedToCart(product)}>
      Добавить в корзину {addedCount > 0 && `(${addedCount})`}
    </Button>
  </Card>
  );
}

export default ProductCard;
