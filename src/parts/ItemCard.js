import React, { useEffect, useState } from "react";
import Star from "elements/Star";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";
export default function ItemCard(props) {
  const { data } = props;

  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    let filter = data.item.filter((list) => {
      return data.categorySearch === list.categoryId.name;
      // return list.name.toLowerCase().includes(data.search.toLowerCase());
    });
    setSearchResult(filter);
    if (data.categorySearch === "all") {
      setSearchResult(data.item);
    }
  }, [data]);
  if (searchResult.length === 0) {
    return (
      <div style={{ backgroundColor: "#f2f2f2", width: "100%" }}>
        <section className="container">
          <div>Produk Tidak ada</div>
        </section>
      </div>
    );
  }
  return (
    <div style={{ backgroundColor: "#f2f2f2", width: "100%" }}>
      <Fade bottom>
        <section className="container" style={{ paddingBottom: `30px` }}>
          <div className="row">
            {searchResult.map((item, index) => {
              return (
                <Fade bottom delay={200 * index}>
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
      </Fade>
    </div>
  );
}
