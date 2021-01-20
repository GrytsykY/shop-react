import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import BasketCart from '../components/BasketCart';
//import uniqBy from 'lodash/unionBy';
// import { isEmpty } from 'lodash'


const mapStateToProps = ({ cart }) => {
  
  return {
    items: cart.items,
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketCart);