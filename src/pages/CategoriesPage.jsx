import * as React from "react";
import products from "../data.js";
import NewDropsCard from "../components/NewDropsCard.jsx";
import { Link, useSubmit } from "react-router-dom";
import nopdt from "../assets/no-product.png";
import Pagination from "../components/Pagination.jsx";
const CatigoriesPage = () => {
  React.useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const filterRef = React.useRef(null);
  const filterbtnRef = React.useRef(null);
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
    "Casual",
    "Runners",
    "Hiking",
    "Sneaker",
    "Basketball",
    "Golf",
    "Outdoor",
  ];
  // *********************pagination********************
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(9);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);
  const [currentPosts, setcurrentposts] = React.useState([]);

  // *************************************************
  const [isSizesCollapsed, setIsSizesCollapsed] = React.useState(false);
  const [isColorsCollapsed, setIsColorsCollapsed] = React.useState(false);
  const [isCategoryCollapsed, setIsCategoryCollapsed] = React.useState(false);
  const [isGenderCollapsed, setIsGenderCollapsed] = React.useState(false);
  const [isPriceCollapsed, setIsPriceCollapsed] = React.useState(false);
  const [price, setPrice] = React.useState(1000);
  const [show, setShow] = React.useState(false);
  function handlefilters() {
    if (filterRef.current.style.display === "block") {
      filterRef.current.style.display = "none";
    } else {
      filterRef.current.style.display = "block";
    }
  }
  // filtring functionality
  const [selectedSizes, setSelectedSizes] = React.useState([]);
  const [selectedColors, setSelectedColors] = React.useState([]);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selectedGender, setSelectedGender] = React.useState([]);

  const [filteredProducts, setFilteredProducts] = React.useState(products);
  React.useEffect(() => {
    const filteredProducts = products.filter((product) => {
      const sizeMatch =
        selectedSizes.length === 0 ||
        selectedSizes.some((size) => product.sizes.includes(size));
      const colorMatch =
        selectedColors.length === 0 ||
        selectedColors.some((color) => product.colors.includes(color));
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.some((category) => product.category === category);
      const genderMatch =
        selectedGender.length === 0 ||
        selectedGender.some((gen) => product.gender === gen);
      const priceMatch = price === 0 || product.price <= price;
      return (
        sizeMatch && colorMatch && categoryMatch && genderMatch && priceMatch
      );
    });
    setFilteredProducts(filteredProducts);
    setcurrentposts(filteredProducts.slice(firstPostIndex, lastPostIndex));
  }, [
    selectedSizes,
    selectedColors,
    selectedCategories,
    selectedGender,
    price,
    currentPage,
  ]);

  const handleSizeClick = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handleColorClick = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleGenderChange = (gender) => {
    if (selectedGender.includes(gender)) {
      setSelectedGender(selectedGender.filter((c) => c !== gender));
    } else {
      setSelectedGender([...selectedGender, gender]);
    }
  };

  const restFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedCategories([]);
    setSelectedGender([]);
    setPrice(1000);
    setCurrentPage(1);
    setFilteredProducts(products);
    document
      .querySelectorAll('.category-checklist-item input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.checked = false;
      });
    document
      .querySelectorAll(
        '.cat-page-body-content-filters-gender input[type="checkbox"]'
      )
      .forEach((checkbox) => {
        checkbox.checked = false;
      });
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
          <div className="cat-page-body-content-filters toggled-title">
            <button
              className={`filters-btn ${show ? "active-filter-btn" : ""}`}
              onClick={() => {
                setShow(!show);
                handlefilters();
              }}
              ref={filterbtnRef}
            >
              <div>Filters</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-align-center"
              >
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="17" x2="7" y1="12" y2="12" />
                <line x1="19" x2="5" y1="18" y2="18" />
              </svg>
              <div></div>
            </button>
            <div className="allfilter" ref={filterRef}>
              <div className="cat-page-body-content-filters-sizes">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  {" "}
                  <h4>Size</h4>
                  <button
                    style={{
                      fontSize: "22px",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: "#e7e7e3",
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
                          selectedSizes.includes(s)
                            ? "active-swatch-size"
                            : null
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
                  style={{
                    fontSize: "22px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#e7e7e3",
                  }}
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {" "}
                  <h4>Category</h4>
                  <button
                    style={{
                      fontSize: "22px",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: "#e7e7e3",
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
                        <input
                          type="checkbox"
                          style={{ marginRight: "10px" }}
                          // checked={selectedCats.includes(x)}
                          onChange={() => handleCategoryChange(x)}
                        />
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>Gender</h4>
                  <button
                    style={{
                      fontSize: "22px",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: "#e7e7e3",
                    }}
                    onClick={() => handleCollapse("gender")}
                    className={isGenderCollapsed ? "reverse-btn" : null}
                  >
                    ^
                  </button>
                </div>
                <div className={isGenderCollapsed ? "coll-inactive" : null}>
                  <input
                    type="checkbox"
                    style={{ marginRight: "5px" }}
                    value="men"
                    onClick={() => {
                      handleGenderChange("men");
                    }}
                  />
                  <span style={{ marginRight: "20px" }}>Men</span>
                  <input
                    type="checkbox"
                    style={{ marginRight: "5px" }}
                    value="women"
                    onClick={() => {
                      handleGenderChange("women");
                    }}
                  />
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
                      backgroundColor: "#e7e7e3",
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
                    step="25"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <div
                    className="price-ranges"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "30px",
                    }}
                  >
                    <label htmlFor="">$0</label>
                    <label htmlFor="">${price}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body-title-left">
            <h2>Life Style Shoes</h2>
            <p>{filteredProducts.length} items</p>
          </div>
          <div className="body-title-right">
            <button
              className="view-all-btn"
              onClick={restFilters}
              style={{
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "16px",
                border: "none",
                cursor: "pointer",
                width: "184px",
                height: "54px",
              }}
            >
              View All
            </button>
          </div>
        </div>
        <div className="cat-page-body-content">
          {/* filllllllllllllllllters */}
          <div className="body-title-left toggled-title">
            <h2>Life Style Shoes</h2>
            <p>{filteredProducts.length} items</p>
          </div>
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
                <h4>Size</h4>
                <button
                  style={{
                    fontSize: "22px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#e7e7e3",
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
                style={{
                  fontSize: "22px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "#e7e7e3",
                }}
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
                    backgroundColor: "#e7e7e3",
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
                      <input
                        type="checkbox"
                        style={{ marginRight: "10px" }}
                        // checked={selectedCats.includes(x)}
                        onChange={() => handleCategoryChange(x)}
                      />
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
                    backgroundColor: "#e7e7e3",
                  }}
                  onClick={() => handleCollapse("gender")}
                  className={isGenderCollapsed ? "reverse-btn" : null}
                >
                  ^
                </button>
              </div>
              <div className={isGenderCollapsed ? "coll-inactive" : null}>
                <input
                  type="checkbox"
                  style={{ marginRight: "5px" }}
                  value="men"
                  onClick={() => {
                    handleGenderChange("men");
                  }}
                />
                <span style={{ marginRight: "20px" }}>Men</span>
                <input
                  type="checkbox"
                  style={{ marginRight: "5px" }}
                  value="women"
                  onClick={() => {
                    handleGenderChange("women");
                  }}
                />
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
                    backgroundColor: "#e7e7e3",
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
                  step="25"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <div
                  className="price-ranges"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "100px",
                  }}
                >
                  <label htmlFor="">$0</label>
                  <label htmlFor="">${price}</label>
                </div>
              </div>
            </div>
          </div>
          <div
            className="cat-page-body-content-products"
            style={{ display: "flex", flexWrap: "wrap", marginLeft: "10px" }}
          >
            {filteredProducts.length !== 0 ? (
              currentPosts.map((pdt) => {
                return (
                  <div className="card-container">
                    {" "}
                    <Link
                      to={`/pdt/${pdt.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <NewDropsCard
                        pdtname={pdt.name}
                        productImage={pdt.image}
                        pdtprice={pdt.price}
                        pdtcat={pdt.category}
                      />
                    </Link>
                  </div>
                );
              })
            ) : (
              <div>
                <img src={nopdt} alt="" srcset="" className="no-pdt-img" />
              </div>
            )}
          </div>
        </div>
      </div>{" "}
      <Pagination
        totalPosts={filteredProducts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CatigoriesPage;
