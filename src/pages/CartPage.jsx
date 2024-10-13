import { React, useContext, useEffect, useState } from "react";
import Suggestioncar from "../components/suggestioncar.jsx";
import { CartContext } from "../store/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
const CartPage = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  const [subTotalPrice, setSubTotalPrice] = useState();
  const [tax, setTax] = useState();
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    let total = 0.0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setSubTotalPrice(total.toFixed(2));
    setTax((total * 0.08).toFixed(2));
    setTotalPrice((total + total * 0.08 + 10).toFixed(2));
  }, [cart]);
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const removeItem = (index) => {
    setCart(cart.filter((item, i) => i !== index));
  };
  const updateQuantity = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    setCart(newCart);
    if (newCart[index].quantity < 1) {
      removeItem(index);
    }
  };

  return (
    <div className="cart-container w-[90%] mx-auto my-[6%]">
      <div className="bag-title">
        <h2 className="font-[700] text-[1.5rem] ">Saving to celebrate</h2>
        <p className="my-[0.5rem]">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
      </div>
      <div className="cart-header flex flex-col lg:flex-row my-[5%]">
        <div className="cart-bag lg:w-[50%]">
          <div className="the-bag-items bg-[#fafafa] rounded-xl">
            <div className="bag-header p-[1rem] rounded-lg ">
              <h2 className="font-[700] text-[1.5rem]">Your bag</h2>
              <p className="my-[1rem]">
                Items in your bag not reserved- check out now to make them
                yours.
              </p>
            </div>

            <div className="bag-items-tomap p-[1rem]">
              {cart.map((product, index) => {
                return (
                  <div className="bag-item flex justify-between items-start">
                    <div className="bag-item-image w-[35%] lg:w-[25%] mr-[1rem] md:mr-[0.25rem]">
                      <img
                        src={require("../assets/pdts/" + product.image)}
                        alt={product.name}
                        className=" rounded-xl object-cover"
                      />
                    </div>
                    <div className="cart-pdt-details">
                      <h3 className="font-[700]">{product.name}</h3>
                      <div className="cart-colors flex items-center">
                        <p>color : </p>
                        <div
                          className="color-1 w-[15px] h-[15px] mx-[0.35rem] rounded-[50%]"
                          style={{
                            backgroundColor: product.checkoutcolor,
                          }}
                        ></div>
                      </div>
                      <div className="size-quantity">
                        <p className="bag-item-size">
                          size : {product.checkoutsize}
                        </p>
                        <div className="cart-quantity flex">
                          <p>Quantity</p>
                          <div className=" mx-[0.5rem] cart-quantitiy-btns flex items-center justify-between">
                            <button
                              onClick={() => {
                                updateQuantity(index, (product.quantity -= 1));
                              }}
                            >
                              <IoIosRemoveCircle />
                            </button>
                            <p className="mx-[0.5rem]">{product.quantity}</p>
                            <button
                              onClick={() => {
                                updateQuantity(index, (product.quantity += 1));
                              }}
                            >
                              <IoIosAddCircle />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="lg:hidden">
                        <p className="text-[#4A69E2] font-[700]">${product.price}</p>
                      </div>

                      <button
                        onClick={() => {
                          removeItem(index);
                        }}
                        className="bg-[#232321] w-[100%] text-[#fff] rounded-md p-[0.5rem] mt-[1.5rem]"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="cart-pdt-price hidden lg:flex">
                      <p className=" text-[#4A69E2] font-[700]">${product.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="order-summery bg-[#fafafa] lg:bg-inherit p-[1rem] my-[5%] lg:my-0 rounded-xl lg:w-[50%] lg:ml-[5%] lg:self-start">
          <h2 className="font-[700] text-[1.5rem] mb-[1rem]">Order Summary</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}className="mb-[1rem]">
            <p>{cart.length} item</p>
            <p>${subTotalPrice}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}className="mb-[1rem]">
            <p>Delivery</p>
            <p>$10.00</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}className="mb-[1rem]">
            <p>Sales Tax</p>
            <p>${tax}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}className="mb-[1rem]">
            <p>Total</p>
            <p>${totalPrice}</p>
          </div>
          <button
            className={`bg-[#232321] w-[100%]  text-[#fff] rounded-md p-[0.5rem] my-[1rem] ${
              cart.length == 0 && "is-dark"
            }`}
            onClick={() => {
              navigate("/under-construction");
            }}
          >
            CHECKOUT
          </button>
        </div>
      </div>
      <Suggestioncar />
    </div>
  );
};

export default CartPage;
