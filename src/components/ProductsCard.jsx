import Button from "react-bootstrap/Button";
import "boxicons";
import { Link } from "react-router-dom";
const ProductsCard = ({ el }) => {
  return (
    <article className="product-card">
      <img src={el.images[0].url} className="product-card-img" />
      <hr />
      <h2>{el.title}</h2>
      <p>
        Price: <span>{el.price} $</span>
      </p>
      <Button variant="primary" as={Link} to={`/product/${el.id}`}>
        <box-icon name="cart-alt" type="solid" color="#ffffff"></box-icon>
      </Button>
    </article>
  );
};

export default ProductsCard;
