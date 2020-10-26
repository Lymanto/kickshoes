import React from "react";
import Button from "elements/Button";
// import InputText from "elements/Form/InputText";
import Fade from "react-reveal/Fade";
export default function ButtonCategories(props) {
  const { data } = props;
  return (
    <Fade>
      <div style={{ backgroundColor: "#f2f2f2", width: "100%" }}>
        <section className="container" style={{ paddingTop: "30px" }}>
          <div className="d-flex flex-row container-categories">
            <Button
              className={`btn btn-circle ${
                data.categorySearch === "all" ? "active" : ""
              }`}
              onClick={props.onClickCategory}
              value="all"
            >
              All Brands
            </Button>
            {data.category.map((item, index) => {
              return (
                <Button
                  className={`btn btn-circle ${
                    data.categorySearch === item.name ? "active" : ""
                  }`}
                  key={index}
                  value={item.name}
                  onClick={props.onClickCategory}
                >
                  {item.name}
                </Button>
              );
            })}
            {/* <InputText
              name="search"
              type="search"
              placeholder="Search"
              value={data.search}
              onChange={props.onChangeSearch}
            /> */}
          </div>
        </section>
      </div>
    </Fade>
  );
}
