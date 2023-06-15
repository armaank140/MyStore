import { useState, useEffect } from "react";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
  const dispatch = useDispatch();

  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch("http://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => getProducts(data));
  }, []);

  const addToCart = (product) => {
    // dispatch an add function
    dispatch(add(product));
  };

  const cards = products.map((product, id) => (
    <>
      <div className="card my-1 mx-4  " key={id} style={{ width: "18rem" }}>
        <div className="text-center">
          <img
            src={product.image}
            className="card-img-top"
            alt="..."
            style={{ width: "150px", height: "150px", marginTop: "10px" }}
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.descriptio}</p>
          <h4>₹{product.price}</h4>
          <a
            href="#"
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </a>
        </div>
      </div>
    </>
  ));

  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
