import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "elements/Button";
import { useHistory } from "react-router-dom";
export default function PaymentDetail(props) {
  let history = useHistory();
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
      <Button
        className="btn mt-2 mb-4"
        onClick={() => {
          history.goBack();
        }}
        isLight
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
      <div className="row">
        <div className="col-12">Coming Soon</div>
      </div>
    </section>
  );
}
