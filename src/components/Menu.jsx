
import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';


const MenuComponent = ({ totalPrice, totalCount }) => {
  
  return (
    <Menu>
      <Menu.Item>
        Магазин продуктов
    </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          Итого: &nbsp;<b>{totalPrice}</b>&nbsp; $
        </Menu.Item>
        <Menu.Item>
          <Link to="/basket" >
            Корзина (<b>{totalCount}</b>)
            
          </Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
export default MenuComponent;
