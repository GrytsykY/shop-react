import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import Menu from '../components/Menu';
import uniqBy from 'lodash/unionBy';
import { isEmpty } from 'lodash'

// const mapStateToProps = ({ cart }) => ({
//   totalPrice: cart.items.reduce((total, product) =>
//     total + product.price, 0),
//   count: cart.items.length,
//   items: uniqBy(cart.items, o => o.id),
// })

const mapStateToProps = ({ cart }) => {
  let total = null;
  let count = 0;

  if (!isEmpty(cart.items)) {
    cart.items.map((p) => {
      if (p.discount) {
        count++;
        total = cart.items.reduce((total, product) => total + product.price, 0);
        total -= (Math.floor(count / 3) * 5);
      } else {
        total = cart.items.reduce((total, product) => total + product.price, 0);
      }
    })
  }

  return {
    totalPrice: total,
    count: cart.items.length,
    items: uniqBy(cart.items, o => o.id)
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);