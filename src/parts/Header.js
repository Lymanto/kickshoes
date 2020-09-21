import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";
import CartIcon from "assets/images/cart.svg";
export default function Header(props) {
  const { data } = props;
  return (
    <header className="spacing-sm">
      <Fade delay={1}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Button className="brand-icon mx-auto" href="/" type="link">
              KICK<span className="brand-icon-text">SHOES</span>
            </Button>
            <Button className="cart-icon" href="/cart" type="link">
              <img src={CartIcon} alt="Cart Icon" />
              {data.cart && (
                <span className="badge badge-pill badge-danger cart-badge">
                  {data.cart.length ? data.cart.length : ""}
                </span>
              )}
            </Button>
          </nav>
        </div>
      </Fade>
    </header>
  );
}
