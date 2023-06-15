import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
export default function Cart() {
  const cartProduct = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeItem = (id) => {
    console.log(id);
    dispatch(remove(id));
  };

  const cards = cartProduct.map((product, id) => (
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
          <p className="card-text">{product.descriptios}</p>
          <h4>₹{product.price}</h4>
          <a
            href="#"
            className="btn btn-danger"
            onClick={() => removeItem(product.id)}
          >
            Remove Item
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
}
