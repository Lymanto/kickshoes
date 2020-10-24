import React, { useState } from "react";
import Button from "elements/Button";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { faEnvelope, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import InputText from "elements/Form/InputText";
import { useHistory } from "react-router-dom";
export default function MyCheckoutForm(props) {
  const [inputName, setInputName] = useState();
  let history = useHistory();
  const [inputEmail, setInputEmail] = useState();
  const [inputPhone, setInputPhone] = useState();
  const { data } = props;

  // const onClick = () => {
  //   localStorage.clear("data");
  // };

  const onChangeEmail = (ev) => {
    setInputEmail(ev.target.value);
  };
  const onChangePhone = (ev) => {
    setInputPhone(ev.target.value);
  };
  const onChangeName = (ev) => {
    setInputName(ev.target.value);
  };
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (inputName != null && inputEmail != null && inputPhone != null) {
      if (result.error) {
        // Inform the user if there was an error.
        setError(result.error.message);
      } else {
        setError(null);
        localStorage.clear("data");
        history.push("/finish");
        // Send the token to your server.
      }
    } else {
      setError("Input name, email, phone number first");
    }
  };
  //
  return (
    <>
      <InputText
        name="name"
        type="text"
        placeholder="Name"
        value={inputName}
        prepend={faUser}
        inputClassName="border"
        outerClassName="mb-3"
        onChange={onChangeName}
      />
      <InputText
        name="email"
        type="email"
        placeholder="Email"
        value={inputEmail}
        prepend={faEnvelope}
        outerClassName="mb-3"
        inputClassName="border"
        onChange={onChangeEmail}
      />
      <InputText
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={inputPhone}
        prepend={faPhone}
        outerClassName="mb-3"
        inputClassName="border"
        onChange={onChangePhone}
      />
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#9ca0a8",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
          onChange={handleChange}
        />
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div className="text-center mt-3">
          <Button className="btn" type="submit" isPrimary>
            Pay $ {data}
          </Button>
        </div>
      </form>
    </>
  );
}
