import Navbar from "../components/Nabar/Navbar.jsx";
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
    <div className="w-[90%] mx-auto my-[10%]">
      <div className="pdt-details2 flex flex-col md:flex-row mb-[5%]">
        <div className="pdt-page-top-left2 md:w-[70%]">
          <PdtCarosel />
        </div>
        <div className="pdt-page-top-right2 md:w-[30%] my-[3rem] md:my-0 md:ml-[2rem]">
          <div
            className="bg-[#4A69E2] px-[1rem] py-[0.5rem] rounded-xl text-[#FFFFFF] w-fit"
            style={{ marginBottom: 20, cursor: "default" }}
          >
            New Release
          </div>
          <h1 className="font-[700] text-[1.2rem]">{products[pdtid].name}</h1>
          <p className="text-[#4A69E2] font-[700]">${products[pdtid].price}</p>
          <div className="flex items-center mt-[1rem]">
            <p>color</p>
            <div className="flex items-center">
              {colorsAvaliable.map((colorhex, index) => {
                return (
                  <div
                    key={index}
                    className={`w-[20px] h-[20px] rounded-[50%] mx-[0.5rem] cursor-pointer	${
                      selectedColor === colorhex ? "active-swatch" : ""
                    }`}
                    style={{ backgroundColor: colorhex }}
                    onClick={() => handleColorClick(colorhex)}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="">
            <div className="size-chart flex justify-between my-[1rem]">
              <p>SIZE</p>
              <p>SIZE CHART</p>
            </div>
            <div className="size-selector flex flex-wrap gap-1">
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
              className={`bg-[#232321] w-[100%] md:w-[80%] text-[#fff] rounded-md p-[0.5rem] lg:w-[80%] mt-[1.5rem] ${
                !selectedColor || !selectedSize ? "is-dark" : ""
              }`}
              onClick={addToCart}
              style={{width:"100%"}}
            >
              ADD TO CART
            </button>
            <button
              className={`bg-[#4A69E2] w-[100%]  text-[#fff] rounded-md p-[0.5rem]  mt-[1rem] ${
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
          
          <div className="my-[1rem]">
            <p className="font-[700] mb-[1rem]">ABOUT THE PRODUCT</p>
            <p className="text-[12px] lg:text-[1rem]">
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
