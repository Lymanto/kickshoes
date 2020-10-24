import React from "react";
import Star from "elements/Star";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function ItemDetail(props) {
  const { data } = props;
  return (
    <div className="row" style={{ padding: `0px 16px 50px ` }}>
      <div className="col-6 text-center">
        <Fade left>
          <img
            width="80%"
            src={`${process.env.PUBLIC_URL}/images/product/${data.item.image}`}
            alt=""
          />
        </Fade>
      </div>
      <Fade right>
        <div className="col-6" style={{ paddingLeft: 50, paddingRight: 50 }}>
          <div className="d-flex flex-row">
            <Star value={data.item.rate} width={35} height={35} spacing={4} />
            <span className="align-self-center">({data.item.rate})</span>
          </div>
          <h1 className="item-name mt-3">{data.item.name}</h1>
          <div className="d-flex flex-column">
            <span className="price mb-2" style={{ fontSize: "20px" }}>
              $ {data.item.price}
            </span>
            <div className="d-flex flex-row mt-3">
              {data.item.size.map((item, index) => {
                return (
                  <Button
                    className={`btn btn-circle size ${
                      item === data.size ? "active" : ""
                    }`}
                    key={index}
                    value={item}
                    onClick={props.onClickSize}
                  >
                    {item}
                  </Button>
                );
              })}
            </div>
            <Button
              className="btn mt-4 btn-cart d-flex flex-row justify-content-center align-items-center"
              onClick={props.onClickCart}
              hasShadow
              isPrimary
              isBlock
            >
              <span style={{ fontSize: 24, marginRight: 5 }}>+</span> Add to
              cart
            </Button>
          </div>
        </div>
      </Fade>
    </div>
  );
}
