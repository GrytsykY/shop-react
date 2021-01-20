import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productsActions from '../actions/products'
import Products from '../components/Products'


const mapStateToProps = ( {products} ) => ({
  products: products.items,
  isReady: products.isReady
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productsActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)