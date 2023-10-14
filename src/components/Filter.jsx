import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { filterByCategory } from "../store/slices/products";
function Filter() {
  const dispatch =useDispatch()
  const [categorie, setCategorie] = useState([]);
  useEffect(() => {
    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
      .then((res) => setCategorie(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="filter" >
      <h2>Category</h2>
      <hr />
      {categorie?.map((el) => (
        <ListGroup key={el.id}>
          <ListGroup.Item onClick={()=>dispatch(filterByCategory(el.id))}>{el.name}</ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  );
}

export default Filter;
