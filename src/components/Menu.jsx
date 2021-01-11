import React from 'react'
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react'

const CartComponent = ({name, id, image, count, removeFromCart}) => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button size='mini' onClick={removeFromCart.bind(this, id)} color="red">Удалить</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{name}</List.Content>
    </List.Item>
  </List>
)

const MenuComponent = ({ totalPrice, count, items }) => (
  
  <Menu>
    <Menu.Item>
      Магазин продуктов
    </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item>
        Итого: &nbsp;<b>{ totalPrice }</b>&nbsp; $
      </Menu.Item>

      <Popup trigger={
      <Menu.Item>
        Корзина (<b>{count}</b>)
      </Menu.Item>
      }
      content={items.map((book, i) => <CartComponent key={i} {...book}/>)}
      on="click"
      hideOnScroll
      />
    </Menu.Menu>
  </Menu>
)
export default MenuComponent;
