import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import ProductCart from '../components/ProductCart';

const mapStateToProps = ({ cart }) => ({
  items: cart.items
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);