import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import image from '../assets/image/empty-cart.png';

const useStyles = makeStyles({
  table: {},
});

const BasketCart = (
  {
    totalPrice,
    totalCount,
    items,
    plusCartItem,
    minusCartItem,
    removeFromCart,
    clearCart
  }) => {
  const classes = useStyles();

  const products = Object.keys(items)
    .map(key => {
      return items[key].items[0]
    });

  const onRemoveItem = (id) => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      removeFromCart(id);
    }
  }

  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      clearCart();
    }
  }

  const onClickOrder = () => {
    console.log("ВАШ ЗАКАЗ", items)
  }
  //console.log("BASK", items)

  return (

    <TableContainer component={Paper}>
      { totalPrice ? (
        <Container className="m-10">
          <Button variant="outlined" color="primary">
            <Link to="/">назад</Link>
          </Button><i className="m-10"></i>
          <Button variant="outlined" color="secondary" onClick={onClearCart}>
            Очистить корзину
          </Button>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Фото</TableCell>
                <TableCell>Название</TableCell>
                <TableCell>Сума</TableCell>
                <TableCell>Кол-во</TableCell>
                <TableCell>Цена</TableCell>
                <TableCell>Удалить</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products && products.map((p, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    <Avatar alt="" src={p.image} />
                  </TableCell>
                  <TableCell>
                    {p.name}
                  </TableCell>
                  <TableCell>
                    <b>{p.price}</b>
                  </TableCell>
                  <TableCell>
                    <i
                      className="fa fa-plus-circle plus"
                      aria-hidden="true" onClick={() => plusCartItem(p.id)}>
                    </i>
                    <i className="font-size">{items[p.id].items.length}
                    </i>
                    <i className="fa fa-minus-circle minus"
                      aria-hidden="true" onClick={() => minusCartItem(p.id)} >
                    </i>
                  </TableCell>
                  <TableCell>
                    <b>{items[p.id].totalPrice}</b>
                  </TableCell>
                  <TableCell>
                    <i className="fa fa-trash trash"
                      aria-hidden="true" onClick={() => onRemoveItem(p.id)}>
                    </i>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div>
            <span><b>Всего: {totalCount} кг</b></span>
            <span className="m-50"><b>Итого: {totalPrice} грн</b></span>
            <button className="right btn btn-outline-warning" onClick={onClickOrder}>
              Оформить заказ
            </button>
          </div>
        </Container>
      ) : (

          <div className="modal-dialog ">
            <div className="modal-content text-center">
              <div className=" text-center">
                <h3>Корзина пустая</h3>
                <p>Вы нечего не выбрали</p>
              </div>
              <div className="modal-body">
                <img width="200px" src={image} alt="Корзина" />
              </div>
              <Button variant="outlined" color="primary">
                <Link to="/">Назад</Link>
              </Button>
            </div>
          </div>

        )}
    </TableContainer>
  );

};

export default BasketCart;