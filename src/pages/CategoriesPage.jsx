import * as React from "react";
import products from "../data.js";
import NewDropsCard from "../components/NewDropsCard.jsx";
import { useSubmit } from "react-router-dom";
const CatigoriesPage = () => {
  const allColors = [
    "#232321",
    "#234D41",
    "#353336",
    "#4A69E2",
    "#677282",
    "#925513",
    "#BB8056",
    "#C9CCC6",
    "#F08155",
    "#FFA52F",
  ];
  const allsizes = [7, 8, 9, 10, 11, 12, 13, 14];
  const allcats = [
    "Casual shoes",
    "Runners",
    "Hiking",
    "Sneaker",
    "Basketball",
    "Golf",
    "Outdoor",
  ];
  const [isSizesCollapsed, setIsSizesCollapsed] = React.useState(false);
  const [isColorsCollapsed, setIsColorsCollapsed] = React.useState(false);
  const [isCategoryCollapsed, setIsCategoryCollapsed] = React.useState(false);
  const [isGenderCollapsed, setIsGenderCollapsed] = React.useState(false);
  const [isPriceCollapsed, setIsPriceCollapsed] = React.useState(false);
  const [price, setPrice] = React.useState(1000);

  const [selectedSizes, setSelectedSizes] = React.useState([]);
  const [selectedColors, setSelectedColors] = React.useState([]);

console.log(selectedSizes);

  // filtring functionality
  const[filteredProducts,setFilteredProducts]=React.useState(products)

  const handleSizeClick = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
      
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
    setFilteredProducts(filteredProducts.filter((product)=>
       product.sizes.includes(size)
    ))
  };
console.log(filteredProducts.size)


  const handleColorClick = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleCollapse = (section) => {
    switch (section) {
      case "sizes":
        setIsSizesCollapsed(!isSizesCollapsed);
        break;
      case "colors":
        setIsColorsCollapsed(!isColorsCollapsed);
        break;
      case "category":
        setIsCategoryCollapsed(!isCategoryCollapsed);
        break;
      case "gender":
        setIsGenderCollapsed(!isGenderCollapsed);
        break;
      case "price":
        setIsPriceCollapsed(!isPriceCollapsed);
        break;
      default:
        break;
    }
  };
  return (
    <div className="cat-page-container">
      <div className="cat-page-header">
        <div className="header-text">
          <h3>Limited time only</h3>
          <h1>Get 30% off</h1>
          <p>
            Sneakers made with your comfort in mind so you can put all of your
            focus into your next session.
          </p>
        </div>
      </div>
      <div className="cat-page-body">
        <div className="cat-page-body-title">
          <div className="body-title-left">
            <h2>Life Style Shoes</h2>
            <p>{filteredProducts.length} items</p>
          </div>
          <div className="body-title-right">
            <button className="view-all-btn">View All</button>
          </div>
        </div>
        <div className="cat-page-body-content">
          <div className="cat-page-body-content-filters">
            <h3>Filters</h3>
            <div className="cat-page-body-content-filters-sizes">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                {" "}
                <h4>Size:</h4>
                <button
                  style={{
                    fontSize: "22px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCollapse("sizes")}
                  className={isSizesCollapsed ? "reverse-btn" : null}
                >
                  ^
                </button>
              </div>

              <div
                className={`sizes-btns ${
                  isSizesCollapsed ? "coll-inactive" : null
                }`}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "start",
                  marginBottom: "20px",
                }}
              >
                {allsizes.map((s) => {
                  return (
                    <button
                      className={`size-num ${
                        selectedSizes.includes(s) ? "active-swatch-size" : null
                      }`}
                      key={s}
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "none",
                        margin: "4px",
                      }}
                      onClick={() => handleSizeClick(s)}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>colors</h4>
              <button
                style={{ fontSize: "22px", border: "none", cursor: "pointer" }}
                onClick={() => handleCollapse("colors")}
                className={isColorsCollapsed ? "reverse-btn" : null}
              >
                ^
              </button>
            </div>

            <div
              className={`cat-page-body-content-filters-colors ${
                isColorsCollapsed ? "coll-inactive" : null
              }`}
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              {allColors.map((x) => {
                return (
                  <button
                    key={x}
                    className={`size-num ${
                      selectedColors.includes(x) ? "active-swatch" : null
                    }`}
                    style={{
                      backgroundColor: x,
                      margin: "6px",
                      border: "none",
                    }}
                    onClick={() => handleColorClick(x)}
                  ></button>
                );
              })}
            </div>
            <div className={`cat-page-body-content-filters-category `}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <h4>Category</h4>
                <button
                  style={{
                    fontSize: "22px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCollapse("category")}
                  className={isCategoryCollapsed ? "reverse-btn" : null}
                >
                  ^
                </button>
              </div>

              <div
                className={`category-checklist-container ${
                  isCategoryCollapsed ? "coll-inactive" : null
                }`}
                style={{ marginBottom: "20px" }}
              >
                {allcats.map((x) => {
                  return (
                    <div
                      key={x}
                      className="category-checklist-item"
                      style={{ marginBottom: "5px" }}
                    >
                      <input type="checkbox" style={{ marginRight: "10px" }} />
                      <span>{x}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={`cat-page-body-content-filters-gender`}
              style={{ marginBottom: "20px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Gender</h4>
                <button
                  style={{
                    fontSize: "22px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCollapse("gender")}
                  className={isGenderCollapsed ? "reverse-btn" : null}
                >
                  ^
                </button>
              </div>
              <div className={isGenderCollapsed ? "coll-inactive" : null}>
                <input type="checkbox" style={{ marginRight: "5px" }} />
                <span style={{ marginRight: "20px" }}>Men</span>
                <input type="checkbox" style={{ marginRight: "5px" }} />
                <span>Women</span>
              </div>
            </div>
            <div className={`cat-page-body-content-filters-price`}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "315px",
                }}
              >
                <h4>Price</h4>
                <button
                  style={{
                    fontSize: "22px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCollapse("price")}
                  className={isPriceCollapsed ? "reverse-btn" : null}
                >
                  ^
                </button>
              </div>
              <div className={isPriceCollapsed ? "coll-inactive" : null}>
                <input
                  type="range"
                  name=""
                  id=""
                  min="0"
                  max="1000"
                  step="50"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <div
                  className="price-ranges"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <label htmlFor="">$0</label>
                  <label htmlFor="">$1000</label>
                </div>
              </div>
            </div>
          </div>
          <div
            className="cat-page-body-content-products"
            style={{ display: "flex", flexWrap: "wrap", marginLeft: "10px" }}
          >
            {filteredProducts.map((pdt) => {
              return (
                <div
                  style={{ margin: "10px", width: "318px", height: "490px" }}
                >
                  {" "}
                  <NewDropsCard
                    pdtname={pdt.name}
                    productImage={pdt.image}
                    pdtprice={pdt.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatigoriesPage;
