import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";
import CartIcon from "assets/images/cart.svg";
export default function Header() {
  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Button className="brand-icon mx-auto" href="/" type="link">
              KICK<span className="brand-icon-text">SHOES</span>
            </Button>
            <Button className="cart-icon" href="/cart" type="link">
              <img src={CartIcon} alt="Cart Icon" />
              {/* <span className="badge badge-pill badge-danger cart-badge">
                1
              </span> */}
            </Button>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
