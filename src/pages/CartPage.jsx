import { React, useContext, useEffect, useState } from "react";
import "./cartpage.css";
import Suggestioncar from "../components/suggestioncar.jsx";
import { CartContext } from "../store/CartContext.jsx";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart , setCart } = useContext(CartContext);
  const [subTotalPrice, setSubTotalPrice] = useState();
  const [tax, setTax] = useState();
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    let total = 0.0;
    cart.forEach((item) => {
      total += item.price;
    });
    setSubTotalPrice(total.toFixed(2));
    setTax((total * 0.08).toFixed(2));
    setTotalPrice((total + total * 0.08 + 10).toFixed(2));
  }, [cart]);
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const removeItem = (index)=>{
    setCart(cart.filter((item, i) => i !== index));

  }
  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-bag">
          <div className="bag-title">
            <h2>Saving to celebrate</h2>
            <p>
              Enjoy up to 60% off thousands of styles during the End of Year
              sale - while suppiles last. No code needed.
            </p>
          </div>
          <div className="the-bag-items">
            <div className="bag-header">
              <h2>Your bag</h2>
              <p>
                Items in your bag not reserved- check out now to make them
                yours.
              </p>
            </div>

            <div className="bag-items-tomap">
              {cart.map((product, index) => {
                return (
                  <div className="bag-item">
                    <div className="bag-item-image">
                      <img
                        src={require("../assets/pdts/" + product.image)}
                        alt={product.name}
                      />
                    </div>
                    <div className="cart-pdt-details">
                      <h3>{product.name}</h3>
                      <div className="cart-colors">
                        <p>color : </p>
                        <div
                          className="color-1"
                          style={{
                            backgroundColor: product.checkoutcolor,
                          }}
                        ></div>
                      </div>
                      <p>size : {product.checkoutsize}</p>
                      <div className="cart-pdt-price-mob">
                      <p>${product.price}</p>
                    </div>
                      <button onClick={()=>{
                        removeItem(index)
                      }}
                      className="wide-black-btn"
                      >Remove</button>
                    </div>
                    <div className="cart-pdt-price">
                      <p>${product.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="order-summery">
          <h2>Order Summary</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{cart.length} item</p>
            <p>${subTotalPrice}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Delivery</p>
            <p>$10.00</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Sales Tax</p>
            <p>${tax}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Total</p>
            <p>${totalPrice}</p>
          </div>
          <button className="wide-black-btn cart-checkout-btn" onClick={()=>{
            navigate("/under-construction")
          }}>CHECKOUT</button>
        </div>
      </div>
      <Suggestioncar />
    </div>
  );
};

export default CartPage;
