import React from "react";
import Button from "elements/Button";
import Lottie from "react-lottie";
import Finish from "assets/json/finish.json";
export default function FinishDetail(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Finish,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
          <Lottie options={defaultOptions} height={300} width={300} />
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
