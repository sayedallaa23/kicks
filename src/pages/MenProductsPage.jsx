import * as React from "react";
import products from "../data.js";
import NewDropsCard from "../components/NewDropsCard.jsx";
import { Link, useSubmit } from "react-router-dom";
import nopdt from "../assets/no-product.png";
import Pagination from "../components/Pagination.jsx";
import { IoMdClose } from "react-icons/io";
import { FaAngleUp,FaAngleDown } from "react-icons/fa6";
export const MenProductsPage = () => {
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

  const menproducts = products.filter((product) => {
    return product.gender === "men";
  });

  const [filteredProducts, setFilteredProducts] = React.useState(menproducts);
  React.useEffect(() => {
    const filteredProducts = menproducts.filter((product) => {
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
    <div className="w-[90%] mx-auto my-[4%]">
      <div className="relative h-[15vh] xl:h-[35vh]">
        <img
          src={require(`../assets/pdts/50.jpg`)}
          alt=""
          className="absolute object-cover w-[100%] h-[15vh] rounded-3xl xl:h-[35vh] xl:object-[center_-450px] "
        />
        <div className="absolute text-[#FFFFFF] top-[2.5rem] left-[1rem] xl:top-[10rem]">
          <h3>Limited time only</h3>
          <h1 className="font-[700]">Get 30% off</h1>
          <p className="text-[8px] w-[70%]">
            Sneakers made with your comfort in mind so you can put all of your
            focus into your next session.
          </p>
        </div>
      </div>
      <div className="cat-page-body2 ">
        <div className="cat-page-body-title flex justify-between items-center my-[2rem]">
          {/* mob filter btn */}
          <div className="mob-filters border-[1px] md:hidden">
            <button
              className={`bg-[#f1f1f1] py-[1rem] px-[2rem] rounded-xl ${
                show ? "active-filter-btn" : ""
              }`}
              onClick={() => {
                setShow(!show);
                handlefilters();
              }}
              ref={filterbtnRef}
            >
              <div>Filters</div>

              <div></div>
            </button>
            <div
              className="fixed top-0 left-0 bg-[#f1f1f1] w-[100%] z-50 h-[100%] p-[2rem] hidden"
              ref={filterRef}
            >
              <div className="flex justify-between mb-[1rem]">
                <div className="font-[700]">Filters</div>
                <IoMdClose
                  onClick={() => {
                    setShow(!show);
                    handlefilters();
                  }}
                />
              </div>
              <div className="cat-page-body-content-filters-sizes">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px"
                    ,alignItems:"center"
                  }}
                >
                  {" "}
                  <h4 className="font-[700]">Size</h4>
                  <button
                    style={{
                      fontSize: "22px",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: "#e7e7e3",
                    }}
                    onClick={() => handleCollapse("sizes")}
                  >
                  {isSizesCollapsed ?<FaAngleDown className="text-[15px]"/>:<FaAngleUp className="text-[15px]"/>}
                  </button>
                </div>

                <div
                  className={`sizes-btns ${
                    isSizesCollapsed ? "!hidden" : null
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
              <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
                <h4 className="font-[700]">colors</h4>
                <button
                  style={{
                    fontSize: "22px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#e7e7e3",
                  }}
                  onClick={() => handleCollapse("colors")}
                >
                {isColorsCollapsed ?<FaAngleDown className="text-[15px]" />:<FaAngleUp className="text-[15px]"/>}
                </button>
              </div>

              <div
                className={`cat-page-body-content-filters-colors ${
                  isColorsCollapsed ? "!hidden" : null
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
                  style={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}
                 className="mb-[1rem]"
                >
                  {" "}
                  <h4 className="font-[700]">Category</h4>
                  <button
                    style={{
                      fontSize: "22px",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: "#e7e7e3",
                    }}
                    onClick={() => handleCollapse("category")}
                  >
                  {isCategoryCollapsed ?<FaAngleDown className="text-[15px]" />:<FaAngleUp className="text-[15px]"/>}
                  </button>
                </div>

                <div
                  className={`category-checklist-container ${
                    isCategoryCollapsed ? "!hidden" : null
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
                  style={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}
                 className="mb-[1rem]"
                >
                  <h4 className="font-[700]">Gender</h4>
                  <button
                    style={{
                      fontSize: "22px",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: "#e7e7e3",
                    }}
                    onClick={() => handleCollapse("gender")}
                  >
                  {isGenderCollapsed ?<FaAngleDown className="text-[15px]" />:<FaAngleUp className="text-[15px]"/>}
                  </button>
                </div>
                <div className={isGenderCollapsed ? "!hidden" : null}>
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
                  }}
                  className="mb-[1rem]"
                >
                  <h4 className="font-[700]">Price</h4>
                  <button
                    style={{
                      fontSize: "22px",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: "#e7e7e3",
                    }}
                    onClick={() => handleCollapse("price")}
                    className="items-center"
                  >
                  {isPriceCollapsed ?<FaAngleDown className="text-[15px]" />:<FaAngleUp className="text-[15px]"/>}
                  </button>
                </div>
                <div className={isPriceCollapsed ? "!hidden"  : null}>
                  <input
                    type="range"
                    name=""
                    id=""
                    min="0"
                    max="1000"
                    step="25"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-[100%]"
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
          <div className="body-title-left hidden md:flex flex-col">
            <h2 className="font-[700] text-[1.5rem]">Life Style Shoes</h2>
            <p>{filteredProducts.length} items</p>
          </div>
          <div className="body-title-right">
            <button
              className="bg-[#f1f1f1] py-[1rem] px-[2rem] rounded-xl"
              onClick={restFilters}
            >
              View All
            </button>
          </div>
        </div>
        <div className="cat-page-body-content flex flex-col md:flex-row gap-[4rem]">
          {/* filllllllllllllllllters */}
          <div className="phone-title md:hidden">
            <h2 className="font-[700] text-[1.2rem]">Life Style Shoes</h2>
            <p>{filteredProducts.length} items</p>
          </div>
          <div className="pc-filters hidden md:flex flex-col w-[30%] shrink-0 ">
            <h3 className="font-[700] mb-[1rem]">Filters</h3>
            <div className="cat-page-body-content-filters-sizes">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "20px"
                  ,alignItems:"center"
                }}
              >
                {" "}
                <h4 className="font-[700]">Size</h4>
                <button
                  style={{
                    fontSize: "22px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#e7e7e3",
                  }}
                  onClick={() => handleCollapse("sizes")}
                  
                >
                  {isSizesCollapsed ?<FaAngleDown className="text-[15px]"/>:<FaAngleUp className="text-[15px]"/>}
                </button>
              </div>

              <div
                className={`sizes-btns ${
                  isSizesCollapsed ? "!hidden" : null
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
            <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
              <h4 className="font-[700]">colors</h4>
              <button
                style={{
                  fontSize: "22px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "#e7e7e3",
                }}
                onClick={() => handleCollapse("colors")}

              >
                {isColorsCollapsed ?<FaAngleDown className="text-[15px]" />:<FaAngleUp className="text-[15px]"/>}
              </button>
            </div>

            <div
              className={`cat-page-body-content-filters-colors ${
                isColorsCollapsed ? "!hidden" : null
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
              <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}  className="mb-[1rem]">
                {" "}
                <h4 className="font-[700]">Category</h4>
                <button
                  style={{
                    fontSize: "22px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#e7e7e3",
                  }}
                  onClick={() => handleCollapse("category")}
     
                >
                  {isCategoryCollapsed ?<FaAngleDown className="text-[15px]" />:<FaAngleUp className="text-[15px]"/>}
                </button>
              </div>

              <div
                className={`category-checklist-container ${
                  isCategoryCollapsed ? "!hidden" : null
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
              <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
                <h4 className="font-[700]">Gender</h4>
                <button
                  style={{
                    fontSize: "22px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#e7e7e3",
                  }}
                  onClick={() => handleCollapse("gender")}
   className="mb-[1rem]"
                >
                  {isGenderCollapsed ?<FaAngleDown className="text-[15px]" />:<FaAngleUp className="text-[15px]"/>}
                </button>
              </div>
              <div className={isGenderCollapsed ? "!hidden" : null}>
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
                  // width: "315px",
                  
                }}
                className="items-center"
              >
                <h4 className="font-[700]">Price</h4>
                <button
                  style={{
                    fontSize: "22px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#e7e7e3",
                  }}
                  onClick={() => handleCollapse("price")}
  className="mb-[1rem]"
                >
                  {isPriceCollapsed ?<FaAngleDown className="text-[15px]" />:<FaAngleUp className="text-[15px]"/>}
                </button>
              </div>
              <div className={isPriceCollapsed ? "!hidden" : null}>
                <input
                  type="range"
                  name=""
                  id=""
                  min="0"
                  max="1000"
                  step="25"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-[100%]"
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
          <div className="products-secion flex flex-wrap gap-1 mt-[2rem] lg:gap-3 w-[100%]">
            {filteredProducts.length !== 0 ? (
              currentPosts.map((pdt) => {
                return (
                  <div className="card-container w-[46%] md:w-[40%] lg:w-[30%]">
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
              <div className="w-[100%] mx-auto">
                <img src={nopdt} alt="" srcset="" className="mx-auto" />
              </div>
            )}
          </div>
        </div>
      </div>
      <Pagination
        totalPosts={filteredProducts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
