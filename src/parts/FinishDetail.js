import React from "react";
import Button from "elements/Button";
import Lottie from "react-lottie";
import Finish from "assets/json/finish.json";
import EmptyCart from "assets/json/empty-box";
import AccessDenied from "assets/json/denied";
export default function FinishDetail(props) {
  const finish = {
    loop: true,
    autoplay: true,
    animationData: Finish,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const denied = {
    loop: true,
    autoplay: true,
    animationData: AccessDenied,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EmptyCart,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const status = localStorage.getItem("finish");
  const { data } = props;
  if (status === "true") {
    return (
      <section
        class="container"
        style={{
          backgroundColor: `#fff`,
          marginTop: 40,
          marginBottom: 40,
          borderRadius: 20,
          padding: `18px 30px`,
        }}
      >
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="h2 text-center mt-4">Yay! Completed</h1>
            <Lottie options={finish} height={300} width={300} />
            <p className="text-center finish-paragraph">
              We will inform you via email later once the transaction has been
              accepted
            </p>
            <Button
              className="btn mt-4 mb-4"
              type="link"
              href="/"
              hasShadow
              isPrimary
            >
              Back to home page
            </Button>
          </div>
        </div>
      </section>
    );
  }
  if (data.cart === null && status === "false") {
    return (
      <div className="row">
        <div className="col-12 text-center">
          <Lottie options={defaultOptions} height={300} width={300} />
          <h1 className="h5 text-center">Your cart is empty!</h1>
          <Button className="btn mt-3 mb-4" type="link" href="/" isPrimary>
            Back to home page
          </Button>
        </div>
      </div>
    );
  }
  if (data.cart.length === 0 && status === "false") {
    return (
      <div className="row">
        <div className="col-12 text-center">
          <Lottie options={defaultOptions} height={300} width={300} />
          <h1 className="h5 text-center">Your cart is empty!</h1>
          <Button className="btn mt-3 mb-4" type="link" href="/" isPrimary>
            Back to home page
          </Button>
        </div>
      </div>
    );
  }
  if (data.cart.length >= 1 && status === "false") {
    return (
      <div className="row">
        <div className="col-12 text-center">
          <Lottie options={denied} height={300} width={300} />
          <h1 className="h5 text-center">Finish payment first</h1>
          <Button className="btn mt-3 mb-4" type="link" href="/cart" isPrimary>
            Back to Cart
          </Button>
        </div>
      </div>
    );
  }
}
