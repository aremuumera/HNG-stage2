import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import box1 from '../assets/box1.png'
import data from '../db/data'


const ShoppingCarts = () => {


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
      <div className="xl:px-[100px] md:block hidden sm:px-[30px] px-[20px] -mt-[60px]">
        <div className="flex items-center pb-[40px] gap-[10px]">
            <Link to='/productPage'>
                <div className="">
                    <svg className='w-[18px] h-[18px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </div>
            </Link>
            <p className='text-[18px]'>Continue Shopping</p>
        </div>

        <div className="pt-4 pb-[30px] flex ">
            <p className='w-1/3  '>Products</p>
            <p className='w-1/4 text-center'>Qty</p>
            <p className='w-1/4 text-center'>Price</p>

        </div>


        <div className="pb[30px] ">
            {data.slice(0,2).map((d, i)=> (
                <div
                key={i}
                 className=" flex w-full border-b-[1px] border-[#757171] pb-[10px] mb-[30px] items-center justify-between ">
                <div className="pt[30px] flex w-1/3 items-center gap-[20px]">
                    
                    <div className="">
                        <img src={d.imagePath} className='w-full max-w-[100px] border-[1px] border-[#757171] py-[10px] rounded-[10px]  ' alt="" />
                    </div>
                    <div className="">
                        <h2 className='font-bold text-[24px] '>{d.title}</h2>
                        <p className='text-[18px]'>{d.brandName}</p>
                    </div>
                </div>

                <div className="w-1/5">
                    <div className="flex  items-center gap-[30px] pt-[30px] pb-[30px]">
                        {/* <p className='text-[18px]'>QTY</p> */}
                        <button onClick={handleDecrement} className='w-[50px] h-[50px]  bg-[#75717180] active:bg-[#355ADF] hover:bg-[#355ADF] rounded-lg flex-col justify-center items-center gap-2 inline-flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12.998H5V10.998H19V12.998Z" fill="#FCFCFC"/>
                        </svg>
                        </button>
                        <p className='font-bold'> {quantity} </p>
                        <button onClick={handleIncrement} className='w-12 h-12 p-2 bg-[#75717180]  hover:bg-[#355ADF] rounded-lg flex-col justify-center items-center gap-2 inline-flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M18.1943 12.998H13.1943V17.998C13.1943 18.2633 13.089 18.5176 12.9014 18.7052C12.7139 18.8927 12.4596 18.998 12.1943 18.998C11.9291 18.998 11.6748 18.8927 11.4872 18.7052C11.2997 18.5176 11.1943 18.2633 11.1943 17.998V12.998H6.19434C5.92912 12.998 5.67477 12.8927 5.48723 12.7052C5.29969 12.5176 5.19434 12.2633 5.19434 11.998C5.19434 11.7328 5.29969 11.4785 5.48723 11.2909C5.67477 11.1034 5.92912 10.998 6.19434 10.998H11.1943V5.99805C11.1943 5.73283 11.2997 5.47848 11.4872 5.29094C11.6748 5.1034 11.9291 4.99805 12.1943 4.99805C12.4596 4.99805 12.7139 5.1034 12.9014 5.29094C13.089 5.47848 13.1943 5.73283 13.1943 5.99805V10.998H18.1943C18.4596 10.998 18.7139 11.1034 18.9014 11.2909C19.089 11.4785 19.1943 11.7328 19.1943 11.998C19.1943 12.2633 19.089 12.5176 18.9014 12.7052C18.7139 12.8927 18.4596 12.998 18.1943 12.998Z" fill="#EDEDEF"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div className="w-1/5">
                    <p className='font-bold text-[24px]'>$340.00</p>
                </div>
                <Link className="">
                    <svg className='w-[40px] h-[40px]' xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                    <path d="M11.667 35.5C10.7503 35.5 9.96588 35.1739 9.31366 34.5217C8.66144 33.8694 8.33477 33.0844 8.33366 32.1667V10.5H6.66699V7.16667H15.0003V5.5H25.0003V7.16667H33.3337V10.5H31.667V32.1667C31.667 33.0833 31.3409 33.8683 30.6887 34.5217C30.0364 35.175 29.2514 35.5011 28.3337 35.5H11.667ZM28.3337 10.5H11.667V32.1667H28.3337V10.5ZM15.0003 28.8333H18.3337V13.8333H15.0003V28.8333ZM21.667 28.8333H25.0003V13.8333H21.667V28.8333Z" fill="#F00A0A" fillOpacity="0.5"/>
                    </svg>
                </Link>
            
            </div>
        ))
    }
        </div>
        <div className="">
        <h1 className='text-[24px] font-bold'>Do you have a coupon?</h1>
        <div className="relative w-full max-w-[500px]  mt-6">
            <input
                type="email"
                placeholder="Enter your coupon code"
                autoComplete="email"
                aria-label="Email address"
                className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6  text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
            />
            <div className="absolute inset-y-1 right-1 flex justify-end">
                <button
                type="submit"
                aria-label="Submit"
                className="flex aspect-square h-full items-center justify-center rounded-tr-xl bg-blue text-white transition hover:bg-black"
                >
                <svg className='w-[40px] h-[40px] ' xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                <path d="M0 0.43457H46.6667C54.0305 0.43457 60 6.40411 60 13.7679V47.1012C60 54.465 54.0305 60.4346 46.6667 60.4346H0V0.43457Z" fill="" fillOpacity="0.5"/>
                <path d="M25 38.4346L35 29.9346L25 21.4346" stroke="#FCFCFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
            </div>
        </div>

        <div className="flex  justify-between  py-[50px] ">
           <div></div>
           <div className="">
                <div className='flex items-center justify-between gap-[150px] py-[20px] border-y-[2px] border-[#121212] px-[10px]'>
                    <p className=''>SubTotal</p>
                    <h2 className='font-bold text-32px'>$698.00</h2>
                </div>

                <Link to='/cart4'>
                    <div className="flex  items-center  justify-end">
                        <button className=' text-right btn mt-[30px] hover:text-white button h-[80px] p-[8px] rounded-[16px]'>
                            Proceed to checkout
                        </button>
                    </div>
                </Link>
           </div>
        </div>
        </div>
      </div>




        {/* mobile view  */}
        <div className="-mt-[60px] md:hidden block px-[10px]  relative pb-[20px]">
        <div className="flex items-center px-[20px] gap-[10px]">
            <Link to='/productPage'>
                <div className="">
                    <svg className='w-[18px] h-[18px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </div>
            </Link>
            <p className='text-[18px]'>Continue Shopping</p>
        </div>
        {data.slice(0,2).map((d, i)=>(
        <div 
        key={i}
        className="relative  border-b-[1px]  border-[#757171] pb-[20px]">
        <div className="flex justify-center items-start  pt-[40px]"> 
             <div className="w-1/2">
                <img src={d.imagePath} className='w-full max-w-[450px] border-[1px] border-[#757171] py-[10px] rounded-[10px]  ' alt="" />
            </div>
        </div>

        <button className='absolute top-[80px] right-[30px]'>
            <svg className='w-[24px] h-[24px]' xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
            <path d="M11.667 35.5C10.7503 35.5 9.96588 35.1739 9.31366 34.5217C8.66144 33.8694 8.33477 33.0844 8.33366 32.1667V10.5H6.66699V7.16667H15.0003V5.5H25.0003V7.16667H33.3337V10.5H31.667V32.1667C31.667 33.0833 31.3409 33.8683 30.6887 34.5217C30.0364 35.175 29.2514 35.5011 28.3337 35.5H11.667ZM28.3337 10.5H11.667V32.1667H28.3337V10.5ZM15.0003 28.8333H18.3337V13.8333H15.0003V28.8333ZM21.667 28.8333H25.0003V13.8333H21.667V28.8333Z" fill="#F00A0A" fillOpacity="0.5"/>
            </svg>
        </button>

        <div className="px-[30px] pt-[30px]">
            <div className="flex flex-col justify-center items-center">
                <div className=" flex w-full items-center  justify-between  gap-[50px]">
                    <p className=' font-bold text-[16px]'>Product</p>
                    
                    <div className="pt[30px] flex items-center gap-[100px]">      
                        <div className="">
                            <h2 className='font-bold text-[16px] '>Scandinavian Sofa</h2>
                            <p className='text-[13px]'>Aqua Beam</p>
                        </div>
                    </div>
                </div>

                <div className=" flex  w-full items-center justify-between gap-[160px]">
                    <p className='  font-bold text-[16px]'>Qty</p>
                    <div className="flex  items-center gap-[25px] pt-[30px] pb-[30px]">
                        <button className='w-[32px] h-[32px]  bg-[#75717180] active:bg-[#355ADF] hover:bg-[#355ADF] rounded-lg flex-col justify-center items-center gap-2 inline-flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12.998H5V10.998H19V12.998Z" fill="#FCFCFC"/>
                        </svg>
                        </button>
                        <p className='font-bold'> 1 </p>
                        <button className='w-[32px] h-[32px] p-2 bg-[#75717180] hover:bg-[#355ADF] rounded-lg flex-col justify-center items-center gap-2 inline-flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M18.1943 12.998H13.1943V17.998C13.1943 18.2633 13.089 18.5176 12.9014 18.7052C12.7139 18.8927 12.4596 18.998 12.1943 18.998C11.9291 18.998 11.6748 18.8927 11.4872 18.7052C11.2997 18.5176 11.1943 18.2633 11.1943 17.998V12.998H6.19434C5.92912 12.998 5.67477 12.8927 5.48723 12.7052C5.29969 12.5176 5.19434 12.2633 5.19434 11.998C5.19434 11.7328 5.29969 11.4785 5.48723 11.2909C5.67477 11.1034 5.92912 10.998 6.19434 10.998H11.1943V5.99805C11.1943 5.73283 11.2997 5.47848 11.4872 5.29094C11.6748 5.1034 11.9291 4.99805 12.1943 4.99805C12.4596 4.99805 12.7139 5.1034 12.9014 5.29094C13.089 5.47848 13.1943 5.73283 13.1943 5.99805V10.998H18.1943C18.4596 10.998 18.7139 11.1034 18.9014 11.2909C19.089 11.4785 19.1943 11.7328 19.1943 11.998C19.1943 12.2633 19.089 12.5176 18.9014 12.7052C18.7139 12.8927 18.4596 12.998 18.1943 12.998Z" fill="#EDEDEF"/>
                            </svg>
                        </button>
                    </div>
                </div>


                <div className=" flex w-full  items-center justify-between gap-[50px]">
                    <p className='  font-bold text-[16pxpx]'>Price</p>
                    <div className="w-1/5">
                        <p className='font-bold text-[18px]'>$340.00</p>
                    </div>
                </div>                
            </div>
        </div>
        </div>
    ))
        }
        <div className="px-[30px]">
            <div className='flex items-center justify-between gap-[150px] py-[10px] mt-[50px] border-y-[2px] border-[#121212] px-[10px]'>
                <p className=''>SubTotal</p>
                <h2 className='font-bold text-32px'>$698.00</h2>
            </div>
            <h1 className='text-[18px] pt-[20px]'>Do you have a coupon?</h1>
            <div className="relative w-full max-w-[500px]  mt-6">
                <input
                    type="email"
                    placeholder="Enter your coupon code"
                    autoComplete="email"
                    aria-label="Email address"
                    className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6  text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                />
                <div className="absolute inset-y-1 right-1 flex justify-end">
                    <button
                    type="submit"
                    aria-label="Submit"
                    className="flex aspect-square h-full items-center justify-center rounded-tr-xl bg-blue text-white transition hover:bg-black"
                    >
                    <svg className='w-[40px] h-[40px] ' xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                    <path d="M0 0.43457H46.6667C54.0305 0.43457 60 6.40411 60 13.7679V47.1012C60 54.465 54.0305 60.4346 46.6667 60.4346H0V0.43457Z" fill="" fillOpacity="0.5"/>
                    <path d="M25 38.4346L35 29.9346L25 21.4346" stroke="#FCFCFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </button>
                </div>
            </div>
            <Link to='/cart4'>
                <div className="flex  items-center  justify-end">
                    <button className=' text-right btn mt-[30px] hover:text-[white] button h-[60px]  p-[12px] rounded-[10px]'>
                            Proceed to checkout
                    </button>
                </div>
            </Link>
            </div>
      </div>
    </div>
  )
}

export default ShoppingCarts
