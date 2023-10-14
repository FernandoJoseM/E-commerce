import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductThunk,
  updateProduct,
  deleteProduct,
  purchaseCarThunk,
} from "../store/slices/purchases";
function SideBar({ show, handleClose }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const purchases = useSelector((store) => store.purchases);
  useEffect(() => {
    // Calcular el precio total cada vez que las compras cambien
    const total = purchases.reduce(
      (accumulator, current) =>
        accumulator + parseFloat(current.product.price) * current.quantity,
      0
    );
    setTotalPrice(total);
  }, [purchases]);

  useEffect(() => {
    dispatch(getProductThunk());
  }, []);
  const handleIncrement = (addProducts) => {
    dispatch(updateProduct(addProducts.id, addProducts.quantity + 1));
  };
  const handleDecrement = (addProducts) => {
    if (addProducts.quantity > 1) {
      dispatch(updateProduct(addProducts.id, addProducts.quantity - 1));
    }
  };
  const handleDelete = (addProducts) => {
    dispatch(deleteProduct(addProducts.id));
  };
  console.log(purchases);
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>cart products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="sideBar">
            {purchases.map((el) => (
              <li key={el.id}>
                <h2>
                  {el.product.title}{" "}
                  <span onClick={() => handleDelete(el)}>❌</span>
                </h2>

                <img src={el.product.images[0].url} alt="" />
                <hr />

                <div className="btn-quantity">
                  <button onClick={() => handleDecrement(el)}>-</button>
                  {el.quantity}
                  <button onClick={() => handleIncrement(el)}>+</button>
                </div>
                <p>
                  Price: <span>{el.product.price} $</span>
                </p>
              </li>
            ))}
          </ul>
          <div className="content-buy">
          <p>Total Price: {totalPrice} $</p>
            <button
              onClick={() => dispatch(purchaseCarThunk())}
              className="buy"
            >
              Buy
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
