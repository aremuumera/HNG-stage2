
// import React from 'react'
import { useState } from 'react';
import data from '../db/data'
// import Google from '../assets/Google.png'
// import MasterCard from '../assets/Mastercard Logo.png'
// import Paypal from '../assets/PayPal.png'
import { Link } from 'react-router-dom'


const CheckOuts4 = () => {

    const [quantity, setQuantity] = useState(1);
    const handleIncrement = () => {
        setQuantity(quantity + 1);
      
      
    };
  
    const handleDecrement = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }else if(quantity == 0){
        setQuantity(quantity);
      }
      
    };


  return (
    <div>
      <div className="lg:px-[50px] mb-[70px] flex  items-start justify-center gap-[30px] -mt-[80px]">
        <div className="lg:block hidden ">
          <div className="pb-[40px]">
            <h2 className="font-bold text-[32px]">Cart Overview</h2>
            <p className="text-[18px]">
              Items in your cart are not reserved - check out now to make them
              yours
            </p>
          </div>

          <div className="w-full pt-[30px] max-w-[650px] border-[1px] p-[15px] rounded-[30px] border-[#757171]">
            {data.slice(0, 2).map((d, i) => (
              <div
                key={i}
                className=" flex max-w-[600px] gap-[15px] border-b-[1px] border-[#aca7a7]  pb-[10px] mb-[30px] items-center justify-between "
              >
                <div className="pt[30px] flex  items-center gap-[20px]">
                  <div className="">
                    <img
                      src={d.imagePath}
                      className="w-full max-w-[150px] border-[1px] border-[#757171] py-[10px] rounded-[10px]  "
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h2 className="font-bold text-[18px] ">{d.title}</h2>
                    <p className="text-[14px]">{d.brandName}</p>
                  </div>
                </div>

                <div className="">
                  <div className="flex  items-center gap-[30px] pt-[30px] pb-[30px]">
                    {/* <p className='text-[18px]'>QTY</p> */}
                    <button onClick={handleDecrement} className="w-[50px] h-[50px]  bg-[#75717180] active:bg-[#355ADF] hover:bg-[#355ADF] rounded-lg flex-col justify-center items-center gap-2 inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M19 12.998H5V10.998H19V12.998Z"
                          fill="#FCFCFC"
                        />
                      </svg>
                    </button>
                    <p className="font-bold">{quantity} </p>
                    <button onClick={handleIncrement} className="w-12 h-12 p-2 bg-[#75717180]  hover:bg-[#355ADF] rounded-lg flex-col justify-center items-center gap-2 inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M18.1943 12.998H13.1943V17.998C13.1943 18.2633 13.089 18.5176 12.9014 18.7052C12.7139 18.8927 12.4596 18.998 12.1943 18.998C11.9291 18.998 11.6748 18.8927 11.4872 18.7052C11.2997 18.5176 11.1943 18.2633 11.1943 17.998V12.998H6.19434C5.92912 12.998 5.67477 12.8927 5.48723 12.7052C5.29969 12.5176 5.19434 12.2633 5.19434 11.998C5.19434 11.7328 5.29969 11.4785 5.48723 11.2909C5.67477 11.1034 5.92912 10.998 6.19434 10.998H11.1943V5.99805C11.1943 5.73283 11.2997 5.47848 11.4872 5.29094C11.6748 5.1034 11.9291 4.99805 12.1943 4.99805C12.4596 4.99805 12.7139 5.1034 12.9014 5.29094C13.089 5.47848 13.1943 5.73283 13.1943 5.99805V10.998H18.1943C18.4596 10.998 18.7139 11.1034 18.9014 11.2909C19.089 11.4785 19.1943 11.7328 19.1943 11.998C19.1943 12.2633 19.089 12.5176 18.9014 12.7052C18.7139 12.8927 18.4596 12.998 18.1943 12.998Z"
                          fill="#EDEDEF"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="">
                  <p className="font-bold text-[20px]">$340.00</p>
                </div>
                <div className="">
                  <svg
                    className="w-[40px] h-[40px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                  >
                    <path
                      d="M11.667 35.5C10.7503 35.5 9.96588 35.1739 9.31366 34.5217C8.66144 33.8694 8.33477 33.0844 8.33366 32.1667V10.5H6.66699V7.16667H15.0003V5.5H25.0003V7.16667H33.3337V10.5H31.667V32.1667C31.667 33.0833 31.3409 33.8683 30.6887 34.5217C30.0364 35.175 29.2514 35.5011 28.3337 35.5H11.667ZM28.3337 10.5H11.667V32.1667H28.3337V10.5ZM15.0003 28.8333H18.3337V13.8333H15.0003V28.8333ZM21.667 28.8333H25.0003V13.8333H21.667V28.8333Z"
                      fill="#F00A0A"
                      fillOpacity="0.5"
                    />
                  </svg>
                </div>
              </div>
            ))}
            <div className="flex justify-end">
              <div>
                <div className="flex items-center justify-between gap-[150px] py-[10px]  border-[#121212] px-[10px]">
                  <p className="">SubTotal</p>
                  <h2 className="font-bold text-32px">$698.00</h2>
                </div>
                <div className="flex items-center justify-between gap-[150px] py-[10px]  border-[#121212] px-[10px]">
                  <p className="">Shipping Cost</p>
                  <h2 className="font-bold text-32px">$100.50</h2>
                </div>
                <div className="flex items-center justify-between gap-[150px] py-[10px]  border-[#121212] px-[10px]">
                  <p className="">SubTotal</p>
                  <h2 className="font-bold text-32px">$0.50</h2>
                </div>
                <div className="flex items-center justify-between gap-[150px] py-[20px] border-y-[2px] border-[#121212] px-[10px]">
                  <p className="font-bold">Total</p>
                  <h2 className="font-bold text-32px">$800.00</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second container */}
        <div className=" ">
          <div className="flex flex-col items-center w-full lg:max-w-[600px] max-w-[600px] justify-center">
            <section className="step-wizard">
              <ul className="step-wizard-list">
                <li className="step-wizard-item   ">
                  <span className=" item4"><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                    >
                      <circle cx="5.5" cy="5.5" r="5" fill="#2268f3" />
                    </svg></span>
                  <span className="progress-label">Shipping</span>
                </li>

                <li className="step-wizard-item current-item border-[#fff]">
                  <span className="progress-count item4">
                  </span>
                  <span className="progress-label">Payment</span>
                </li>

                <li className="step-wizard-item ">
                  <span className="progress-count">3</span>
                  <span className="progress-label">Confirm Order</span>
                </li>
              </ul>
            </section>

            {/* FORM SECTION */}
            <div className=" pt-[30px]  w-full max-w-[600px]   lg:border-[1px] p-[15px] rounded-[30px] lg:border-[#757171]">
              <div className="pl-[20px]">
                <h2 className="font-bold pb-[10px] text-[24px]">
                  Shipping Information
                </h2>
                {/* <p> Payment Methods</p> */}
              </div>

              {/* FORM START */}
              <div className="">
                <div className="modal">
                  <form className="form ">
                    {/* <div className="payment--options flex lg:gap-[30px] gap-[10px] justify-start">
                    <button className='flex items-center hover:bg-blue hover:text-white bg-blue text-white gap-[3px] justify-start border-[#75717180] ' name="paypal" type="button" >
                        <img src={MasterCard} alt="Paypal" className='lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] ' />
                        <p>Credit/Debit card</p>
                    </button>
                    <button className='flex items-center hover:bg-blue hover:text-white gap-[3px] justify-center border-[#75717180] ' name="apple-pay" type="button">
                        <img src={Paypal} alt="Paypal" className='lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]' />
                        <p>Paypal</p>
                    </button>
                    <button className='flex items-center hover:bg-blue hover:text-white gap-[3px] justify-center border-[#75717180] ' name="google-pay" type="button">
                        <img src={Google} alt="Paypal" className='lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]' />
                        <p>Google Pay</p>
                    </button>
                </div> */}

                    <div className="separator">
                      {/* <hr className="line">
                    <p>or pay using credit card</p>
                    </hr className="line"> */}
                    </div>

                    <div className="credit-card-info--form">
                      {/* <p className='font-bold'> Card Details</p> */}
                      <div className="input_container">
                        <label
                          htmlFor="password_field"
                          className="input_label text-[#000]"
                        >
                          Name
                        </label>
                        <input
                          id="password_field"
                          className="input_field"
                          type="text"
                          name="input-name"
                          title="Inpit title"
                          placeholder="Enter your full name"
                        />
                      </div>
                      {/* <div className="flex gap-[30px] items-end"> */}
                      <div className="input_container ">
                        <label
                          htmlFor="password_field"
                          className="input_label text-[#000]"
                        >
                          Address City
                        </label>
                        <input
                          id="password_field"
                          className="input_field"
                          type="text"
                          name="input-name"
                          title="Inpit title"
                          placeholder="Enter your shipping Address"
                        />
                      </div>

                      <div className="input_container">
                        <label
                          htmlFor="password_field"
                          className="input_label text-[#000]"
                        >
                          Email Address
                        </label>
                        <input
                          id="password_field"
                          className="input_field  "
                          type="text"
                          name="input-name"
                          title="Inpit title"
                          placeholder="Enter your email Address"
                        />
                      </div>
                      <div className="flex md:gap-[30px] gap-[8px] items-end">
                        <div className="input_container">
                          <label
                            htmlFor="password_field"
                            className="input_label text-[#000]"
                          >
                            Country
                          </label>
                          <input
                            id="password_field"
                            className="input_field"
                            type="text"
                            name="input-name"
                            title="Inpit title"
                            placeholder="Nigeria"
                          />
                        </div>

                        <div className="input_container">
                          <label
                            htmlFor="password_field"
                            className="input_label text-[#000]"
                          >
                            Postal Code
                          </label>
                          <input
                            id="password_field"
                            className="input_field"
                            type="text"
                            name="input-name"
                            title="Expiry Date"
                            placeholder=""
                          />
                        </div>
                      </div>

                      <div className=" flex sm:gap-[30px] gap-[8px]">
                        <div className="input_container ">
                          <label
                            htmlFor="password_field"
                            className="input_label text-[#000]"
                          >
                            Phone Number
                          </label>
                          <div className="flex h-[40px] bg-bg1 p-[2px] rounded-[10px] ">
                            <div className=" flex items-center gap-[10px]">
                              <svg
                                className="w-[30px] h-[30px]"
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                              >
                                <path
                                  d="M3.33333 4.16699C2.44928 4.16699 1.60143 4.51818 0.976311 5.1433C0.35119 5.76842 0 6.61627 0 7.50033L0 22.5003C0 23.3844 0.35119 24.2322 0.976311 24.8573C1.60143 25.4825 2.44928 25.8337 3.33333 25.8337H10V4.16699H3.33333Z"
                                  fill="#009A49"
                                />
                                <path
                                  d="M10 4.16699H20V25.8337H10V4.16699Z"
                                  fill="#FCFCFC"
                                />
                                <path
                                  d="M26.6667 4.16699H20V25.8337H26.6667C27.5507 25.8337 28.3986 25.4825 29.0237 24.8573C29.6488 24.2322 30 23.3844 30 22.5003V7.50033C30 6.61627 29.6488 5.76842 29.0237 5.1433C28.3986 4.51818 27.5507 4.16699 26.6667 4.16699Z"
                                  fill="#009A49"
                                />
                              </svg>
                              <svg
                                className="w-[10px] h-[8px] "
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                              >
                                <path d="M0 0.5L5 5.5L10 0.5H0Z" fill="black" />
                              </svg>
                            </div>
                            <input
                              type="number"
                              id="password_field"
                              className="input "
                              placeholder="0812 345 6789"
                            />
                          </div>
                        </div>

                        <div className="input_container">
                        <label htmlFor="delivery_method" className="input_label text-[#000]">
                            Method of Delivery
                        </label>
                        <div className="flex items-center h-[40px] pr-[10px] bg-bg1 p-[2px] rounded-[10px] ">
                            <select id="delivery_method" className="input bg-bg1 w-full h-full p-[2px] rounded-[10px]">
                            <option value="door_delivery">Door Delivery</option>
                            <option value="pickup_location">Pick up at a Location</option>
                            </select>
                            {/* <svg
                            className="w-[10px] h-[8px] ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            >
                            <path d="M0 0.5L5 5.5L10 0.5H0Z" fill="black" />
                            </svg> */}
                        </div>
                        </div>
                      </div>
                     
                    </div>
                    <div className="relative pt-[20px]">
                      <Link to='/cart1'>
                        <button className="purchase--btn  btn button h-[60px] w-[120px] text-[14px] bg-blue">
                            Continue
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOuts4
