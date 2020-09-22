import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "elements/Button";
export default function CartItem(props) {
  const { data } = props;
  //   const [deleteCart, setDeleteCart] = useState();
  // const [list, setList] = useState(data.cart);

  if (!data.cart) return null;
  return (
    <div className="row">
      <div className="col-6 d-flex flex-column" style={{ marginLeft: 16 }}>
        <p>
          You have {data.cart.length} {data.cart.length > 1 ? "items" : "item"}{" "}
          in your cart
        </p>
        <div className="d-flex flex-column">
          {data.cart.map((item, index) => {
            return (
              <div
                className="cart d-flex flex-row justify-content-between"
                key={item._id}
              >
                <div className="d-flex flex-row">
                  <div style={{ width: 100 }}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/product/${item.image}`}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="cart-name">{item.name}</p>
                    <p className="cart-size-label mb-0">Size {item.size}</p>
                    <p class="price">$ {item.price}</p>
                  </div>
                </div>
                <div>
                  <Button
                    className="btn btn-danger"
                    value={index}
                    onClick={props.onClick}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
