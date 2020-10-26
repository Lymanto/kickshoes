import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "elements/Button";
import Lottie from "react-lottie";
import EmptyCart from "assets/json/empty-box";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MyCheckoutForm from "./MyCheckoutForm";
export default function CartItem(props) {
  const { data } = props;
  //   const [deleteCart, setDeleteCart] = useState();
  // const [list, setList] = useState(data.cart);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EmptyCart,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  if (data.cart === null || data.cart.length < 1) {
    return (
      <div className="row">
        <div className="col-12 text-center">
          <Lottie options={defaultOptions} height={300} width={300} />
          <h1 className="h5 text-center">Your cart is empty!</h1>
          <Button className="btn mt-2 mb-4" type="link" href="/" isPrimary>
            Back to home page
          </Button>
        </div>
      </div>
    );
  }
  let total = 0;
  if (data.cart) {
    for (var i = 0; i < data.cart.length; i++) {
      total += data.cart[i].price;
    }
  }
  const stripePromise = loadStripe(
    "pk_test_51HMQ46LdIqngB9A0YNyc3URjqbRPjL4FDc7f4XJdasuSnKFJByy7x9Q1obz5hym9SnfC7ZP3QsOyqeTOxKxt1RoE00dWRQhbT8"
  );
  return (
    <div className="row">
      <div className="col-12 d-flex flex-column" style={{ paddingLeft: 26 }}>
        <div className="d-flex flex-row align-items-center">
          <Button className="btn mt-2 mb-4" type="link" href="/" isLight>
            <FontAwesomeIcon icon={faArrowLeft} /> Home
          </Button>
          <p className="ml-3">
            You have {data.cart.length}{" "}
            {data.cart.length > 1 ? "items" : "item"} in your cart
          </p>
        </div>
        <div className="row">
          <div className="col-md-7 col-sm-12">
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
                        <p className="price">$ {item.price}</p>
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
          <div className="col-md-5 col-sm-12 px-3">
            <div className="cart-detail-price">
              <div className="cart-detail-title mb-2">Shopping Details</div>
              <div className="cart-detail-content">
                {data.cart.map((item, index) => {
                  return (
                    <div className="d-flex flex-row justify-content-between">
                      <div className="mb-1 w-75">
                        {item.name} - {item.size}
                      </div>
                      <div className="price">$ {item.price}</div>
                    </div>
                  );
                })}
                <div className="cart-total mt-3 d-flex flex-row justify-content-between">
                  <div>Total</div>
                  <div style={{ color: `#1ABC9C` }}>$ {total}</div>
                </div>
              </div>
            </div>
            <div className="cart-detail-price mt-3">
              <div className="cart-detail-title mb-2">Payment Details</div>
              <Elements stripe={stripePromise}>
                <MyCheckoutForm data={total} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
