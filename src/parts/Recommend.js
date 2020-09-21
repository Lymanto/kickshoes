import React from "react";
import Star from "elements/Star";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";
export default function Recommend(props) {
  const { data } = props;
  return (
    <section className="container mt-4 mb-5">
      <div className="row">
        <div className="col-12">
          <h3 className="recommend-title">
            Recommend shoes from {data.item.categoryId.name}
          </h3>
        </div>
      </div>
      <div className="row">
        {data.recommend.map((item, index) => {
          if (item._id === data.item._id) return null;
          return (
            <Fade bottom delay={300 * index}>
              <div
                className="col-md-3 col-sm-6"
                style={{ paddingTop: `30px` }}
                key={index}
              >
                <div className="card w-100" style={{ width: `18rem` }}>
                  <img
                    className="card-img-top align-self-center"
                    style={{ width: `80%` }}
                    src={`${process.env.PUBLIC_URL}/images/product/${item.image}`}
                    alt=""
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.categoryId.name}</h5>
                    <Button
                      href={`/item/${item._id}`}
                      type="link"
                      className="card-text"
                    >
                      {item.name}
                    </Button>
                    <div className="star-position d-flex flex-column">
                      <span className="price mb-2">$ {item.price}</span>
                      <Star
                        value={item.rate}
                        width={35}
                        height={35}
                        spacing={4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </section>
  );
}
