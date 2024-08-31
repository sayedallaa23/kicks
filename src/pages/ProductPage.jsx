import Navbar from "../components/Navbar";
import NewDrops from "../components/NewDrops";
import Footer from "../components/Footer";
import * as React from "react";
import PdtCarosel from "../components/PdtCarosel";
import Suggestioncar from "../components/suggestioncar.jsx";
import { useParams } from "react-router-dom";
import products from "../data.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../store/CartContext.jsx";

const ProductPage = () => {
  const { cart, setCart } = React.useContext(CartContext);
  const navigate = useNavigate();
  const [selectedSize, SetSelectedSize] = React.useState(null);
  const [selectedColor, setSelectedColor] = React.useState(null);
  const [isItemInCart, setisItemInCart] = React.useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    SetSelectedSize(size);
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const data = useParams();
  const pdtid = data.id - 1;
  const product = products[pdtid];

  if (!product) {
    return (
      <h1 style={{ fontSize: "5rem", textAlign: "center", margin: "100px" }}>
        {" "}
        Invalid product ID
      </h1>
    ); // or render a 404 page
  }
  const colorsAvaliable = products[pdtid].colors;
  const allSizes = [7, 8, 9, 10, 11, 12, 13, 14];
  const sizesAvaliable = products[pdtid].sizes;
  console.log(selectedSize);

  const addToCart = () => {
    if (selectedSize && selectedColor) {
      product.checkoutsize = selectedSize;
      product.checkoutcolor = selectedColor;
      product.quantity = 1
      setCart((oldArray) => [...oldArray, product]);
      setisItemInCart(true);
    } else {
      setisItemInCart(false);
    }
  };

  const buyItNow = () => {
    if (selectedSize && selectedColor) {
      product.checkoutsize = selectedSize;
      product.checkoutcolor = selectedColor;
      setCart((oldArray) => [...oldArray, product]);
      navigate("/cart");
      setisItemInCart(true);
    } else {
      setisItemInCart(false);
    }
  };

  return (
    <div className="App">
      <div className="pdt-details">
        <div className="pdt-page-top-left">
          <PdtCarosel />
        </div>
        <div className="pdt-page-top-right">
          <button
            className="blue-btn new-release-btn"
            style={{ marginBottom: 20, cursor: "default" }}
          >
            New Release
          </button>
          <h1>{products[pdtid].name}</h1>
          <p className="pdt-page-top-right-price">${products[pdtid].price}</p>
          <div className="color-sel-sec">
            <p>color</p>
            <div className="color-selector">
              {colorsAvaliable.map((colorhex, index) => {
                return (
                  <div
                    key={index}
                    className={`color-circle ${
                      selectedColor === colorhex ? "active-swatch" : ""
                    }`}
                    style={{ backgroundColor: colorhex }}
                    onClick={() => handleColorClick(colorhex)}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="size-sel-sec">
            <div className="size-chart">
              <p>SIZE</p>
              <p>SIZE CHART</p>
            </div>
            <div className="size-selector">
              {allSizes.map((size, index) => {
                return (
                  <div
                    key={index}
                    className={`size-num ${
                      selectedSize === size && sizesAvaliable.includes(size)
                        ? "active-swatch-size"
                        : null
                    }`}
                    style={
                      sizesAvaliable.includes(size)
                        ? { backgroundColor: "#FFFFFF" }
                        : { backgroundColor: "#D2D1D3", cursor: "default" }
                    }
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="add-to-cart">
            {!isItemInCart?
            <div>
            <button
              className={`blue-btn ${
                !selectedColor || !selectedSize ? "is-dark" : ""
              }`}
              onClick={addToCart}
              style={{width:"100%"}}
            >
              ADD TO CART
            </button>
            <button
              className={`wide-black-btn buy-now-btn ${
                !selectedColor || !selectedSize ? "is-dark" : ""
              }`}
              onClick={buyItNow}
            >
              BUY IT NOW
            </button></div>:<div style={{width:"100%"}}>
            <p style={{color:"#4A69E2",fontSize:"20px"}}>Item added successfully</p>
            <button className="blue-btn " onClick={()=>{
              navigate("/cart")
            }} style={{width:"100%"}}>Go To Cart</button></div>}
            
          </div>
          
          <div className="about-the-pdt-sec">
            <p className="about-the-pdt-title">ABOUT THE PRODUCT</p>
            <p className="about-the-pdt-desc">
              Shadow Navy / Army Green This product is excluded from all
              promotional discounts and offers. Pay over time in interest-free
              installments with Affirm, Klarna or Afterpay. Join adiClub to get
              unlimited free standard shipping, returns, & exchanges.
            </p>
          </div>
        </div>
      </div>
      <Suggestioncar />
    </div>
  );
};

export default ProductPage;
