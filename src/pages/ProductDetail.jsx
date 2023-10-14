import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { addProductThunk } from "../store/slices/purchases";
import { useDispatch } from "react-redux";
const ProductDetail = () => {
  const dispatch=useDispatch()
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then((res) => setProductDetail(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  const increment=()=>{
    setQuantity(quantity+1)
  }
  const decrement=()=>{
    if(quantity>1){
      setQuantity(quantity-1)
    }
  }
  const addProduct=()=>{
    const data={
      quantity:quantity,
      productId:productDetail.id
    }
    dispatch(addProductThunk(data))
    
  }
  return (
    <main className="product-detail">
      <div>
        <Carousel interval={null}>
          {productDetail.images?.map((img, i) => (
            <Carousel.Item key={i}>
              <img src={img.url} alt="" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="product-info">
        <h2>{productDetail.title}</h2>
        <p>{productDetail.description}</p>
        <div className="quantity">
          <p>Price:<span>{productDetail.price} $</span></p>
          <button onClick={increment}>+</button>
          <span className="quantity-quantity">{quantity}</span>
          <button onClick={decrement}>-</button>
        </div>
        <button className="product-detail-btn" onClick={addProduct}>Add to cart</button>
      </div>
    </main>
  );
};

export default ProductDetail;
