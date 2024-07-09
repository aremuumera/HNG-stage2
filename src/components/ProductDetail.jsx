
import React, { useState } from 'react'
import data from '../db/data'
import box5 from '../assets/box5.png'
import box1 from '../assets/box1.png'
import box2 from '../assets/box2.png'
import box3 from '../assets/box3.png'
import box4 from '../assets/box4.png'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { TiStarOutline } from 'react-icons/ti'
import LeftDouble from '../assets/Group1.png'
import RightDouble from '../assets/Group3.png'
import VectorRight from '../assets/VectorRight.png'
import Vectorleft from '../assets/Vectorleft.png'
import Sidebar from './Sidebar'

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
      setOpen(!open);
    }

    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (number) => {
        setActiveButton(number);
    };


    

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
      <div className="xl:px-[120px] lg:px-[80px] -mt-[60px] sm:px-[40px] px-[20px]">
      
      <div className="sm:hidden block pb-[40px]" onClick={toggleSidebar}>
            <svg className='w-[40px] h-[40px]' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M21 22L16 17L21 12" stroke="#121212" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 22L11 17L16 12" stroke="#121212" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
      <div className={`fixed top-0 left-0 h-full w-full transition-all duration-300 ease-in-out ${open ? 'bg-black bg-opacity-50' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>

      <div className={`fixed top-0 left-0 h-full  overflow-y-scroll w-[70%] bg-white z-[10000000000000] transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full '}`}>
         <div className='flex justify-end pt-[15px] pr-[20px]' onClick={toggleSidebar}>
            <svg className='w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.71983 5.72006C5.86045 5.57961 6.05108 5.50072 6.24983 5.50072C6.44858 5.50072 6.6392 5.57961 6.77983 5.72006L11.9998 10.9401L17.2198 5.72006C17.3115 5.62133 17.4281 5.54916 17.5574 5.51115C17.6866 5.47313 17.8237 5.47068 17.9542 5.50406C18.0848 5.53743 18.2039 5.60539 18.299 5.70078C18.3941 5.79617 18.4618 5.91545 18.4948 6.04606C18.5281 6.17644 18.5258 6.31338 18.4879 6.44252C18.4501 6.57167 18.3782 6.68825 18.2798 6.78006L13.0598 12.0001L18.2798 17.2201C18.3786 17.3117 18.4507 17.4283 18.4887 17.5576C18.5268 17.6868 18.5292 17.8239 18.4958 17.9545C18.4625 18.085 18.3945 18.2041 18.2991 18.2992C18.2037 18.3944 18.0844 18.462 17.9538 18.4951C17.8234 18.5284 17.6865 18.526 17.5574 18.4882C17.4282 18.4503 17.3116 18.3784 17.2198 18.2801L11.9998 13.0601L6.77983 18.2801C6.63768 18.4127 6.44958 18.485 6.25519 18.4816C6.0608 18.4782 5.87531 18.3995 5.73783 18.2621C5.60036 18.1246 5.52164 17.9391 5.51828 17.7447C5.51493 17.5503 5.58719 17.3622 5.71983 17.2201L10.9398 12.0001L5.71983 6.78006C5.57938 6.63943 5.50049 6.44881 5.50049 6.25006C5.50049 6.05131 5.57938 5.86068 5.71983 5.72006Z" fill="black"/>
            </svg>
         </div>
         <div className="px-[30px] h-full pt-[20px] pb-[100px]">
            <Sidebar display={`block`}/>
         </div>
      </div>
      
      
      
      <div className="flex md:flex-row flex-col items-start justify-center gap-[50px] lg:pt-[50px]">
        <div className="w-full max-w-[560px] h-full pb-[30px] border-[1px] border-[#757171] rounded-[10px]">
          <div className=" flex justify-center  :pt-[100px] pt-[30px]">
              <img src={box5} className='w-full max-w-[500px] object-contain  h-[320px]' alt='' />
          </div>
          <div className="flex items-center justify-center lg:gap-[35px] gap-[15px] sm:px[0px] px-[10px]">
            <div className="">
              <img src={box1} className='w-full max-w-[100px] border-[1px] border-[#757171] py-[10px] rounded-[10px]  ' alt="" />
            </div>
            <div className="">
              <img src={box1} className='w-full max-w-[100px] border-[1px] border-[#757171] py-[10px] rounded-[10px]  ' alt="" />
            </div>
            <div className="">
              <img src={box1} className='w-full max-w-[100px] border-[1px] border-[#757171] py-[10px] rounded-[10px]  ' alt="" />
            </div>
            <div className="">
              <img src={box1} className='w-full max-w-[100px] border-[1px] border-[#757171] py-[10px] rounded-[10px]  ' alt="" />
            </div>
          </div>
        </div>

        <div className="pt-[20px] w-full max-w-[400px] sm:max-w-[600px]">
          <p className='text-[18px] font-bold'>Designed 2023</p>
          <h1 className='font-[500] text-[32px]'>Scandinavian Sofa</h1>
          <p className='text-[#C88504] font-bold'><span>$25.00</span> - <span>$32.00</span></p>
          <div className="flex  items-center gap-[10px]">
            <p className='font-bold py-[20px]'>COLOR</p>
            <div className="flex gap-[10px] ">
              <p className='bg-[#E9D30C] w-[18px] h-[18px]  rounded-full '></p>
              <p className='bg-[#deb252] w-[18px] h-[18px]  rounded-full '></p>
              <p className='bg-[#000] w-[18px] h-[18px]  rounded-full '></p>
              <p className='bg-[#757171] w-[18px] h-[18px]  rounded-full '></p>
            </div> 
          </div>
          <div className="">
            <h2>
              Experience the perfect blend of style and comfort with our Modern Scandinavian Sofa. Crafted with precision and elegance, this sofa is designed to elevate your living space.
            </h2>
            <div className="">
                <ul className="pl-[20px] pt-[5px]">
                    <li className="list-discs">
                    <p>Elegant Design: Featuring clean lines and a minimalist aesthetic, this sofa effortlessly complements any decor style</p>
                    </li>
                    <li className="list-discs">
                    <p>Elegant Design: Featuring clean lines and a minimalist aesthetic, this sofa effortlessly complements any decor style</p>
                    </li>
                    <li className="list-discs">
                    <p>Elegant Design: Featuring clean lines and a minimalist aesthetic, this sofa effortlessly complements any decor style</p>
                    </li>
                </ul>
            </div>

          </div>
          <div className="">
            <div className="flex items-center gap-[10px] pt-[30px] pb-[30px]">
              <p className='text-[18px]'>QTY</p>
              <button onClick={handleDecrement} className='w-[50px] h-[50px]  bg-[#75717180] active:bg-[#355ADF] hover:bg-[#355ADF] rounded-lg flex-col justify-center items-center gap-2 inline-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12.998H5V10.998H19V12.998Z" fill="#FCFCFC"/>
              </svg>
              </button>
              <p> {quantity} </p>
              <button onClick={handleIncrement} className='w-12 h-12 p-2 bg-[#75717180] hover:bg-[#355ADF] rounded-lg flex-col justify-center items-center gap-2 inline-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M18.1943 12.998H13.1943V17.998C13.1943 18.2633 13.089 18.5176 12.9014 18.7052C12.7139 18.8927 12.4596 18.998 12.1943 18.998C11.9291 18.998 11.6748 18.8927 11.4872 18.7052C11.2997 18.5176 11.1943 18.2633 11.1943 17.998V12.998H6.19434C5.92912 12.998 5.67477 12.8927 5.48723 12.7052C5.29969 12.5176 5.19434 12.2633 5.19434 11.998C5.19434 11.7328 5.29969 11.4785 5.48723 11.2909C5.67477 11.1034 5.92912 10.998 6.19434 10.998H11.1943V5.99805C11.1943 5.73283 11.2997 5.47848 11.4872 5.29094C11.6748 5.1034 11.9291 4.99805 12.1943 4.99805C12.4596 4.99805 12.7139 5.1034 12.9014 5.29094C13.089 5.47848 13.1943 5.73283 13.1943 5.99805V10.998H18.1943C18.4596 10.998 18.7139 11.1034 18.9014 11.2909C19.089 11.4785 19.1943 11.7328 19.1943 11.998C19.1943 12.2633 19.089 12.5176 18.9014 12.7052C18.7139 12.8927 18.4596 12.998 18.1943 12.998Z" fill="#EDEDEF"/>
                  </svg>
                </button>
            </div>

            <div  className="flex items-center gap-[10px]"> 
              <div  className=" w-12 h-12 p-2 rounded-lg border border-neutral-900/opacity-50 flex-col justify-center items-center gap-2 inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M12.1 18.78L12 18.88L11.89 18.78C7.14 14.47 4 11.62 4 8.72998C4 6.72998 5.5 5.22998 7.5 5.22998C9.04 5.22998 10.54 6.22998 11.07 7.58998H12.93C13.46 6.22998 14.96 5.22998 16.5 5.22998C18.5 5.22998 20 6.72998 20 8.72998C20 11.62 16.86 14.47 12.1 18.78ZM16.5 3.22998C14.76 3.22998 13.09 4.03998 12 5.30998C10.91 4.03998 9.24 3.22998 7.5 3.22998C4.42 3.22998 2 5.63998 2 8.72998C2 12.5 5.4 15.59 10.55 20.26L12 21.58L13.45 20.26C18.6 15.59 22 12.5 22 8.72998C22 5.63998 19.58 3.22998 16.5 3.22998Z" fill="black"/>
                </svg>
              </div>

              <div className=" w-12 h-12 p-2 rounded-lg border border-neutral-900/opacity-50 flex-col justify-center items-center gap-2 inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M18 22.23C17.1667 22.23 16.4583 21.9383 15.875 21.355C15.2917 20.7716 15 20.0633 15 19.23C15 19.1133 15.0083 18.9923 15.025 18.867C15.0417 18.7416 15.0667 18.6293 15.1 18.53L8.05 14.43C7.76667 14.68 7.45 14.876 7.1 15.018C6.75 15.16 6.38333 15.2306 6 15.23C5.16667 15.23 4.45833 14.9383 3.875 14.355C3.29167 13.7716 3 13.0633 3 12.23C3 11.3966 3.29167 10.6883 3.875 10.105C4.45833 9.52165 5.16667 9.22998 6 9.22998C6.38333 9.22998 6.75 9.30098 7.1 9.44298C7.45 9.58498 7.76667 9.78065 8.05 10.03L15.1 5.92998C15.0667 5.82998 15.0417 5.71765 15.025 5.59298C15.0083 5.46831 15 5.34731 15 5.22998C15 4.39665 15.2917 3.68831 15.875 3.10498C16.4583 2.52165 17.1667 2.22998 18 2.22998C18.8333 2.22998 19.5417 2.52165 20.125 3.10498C20.7083 3.68831 21 4.39665 21 5.22998C21 6.06331 20.7083 6.77165 20.125 7.35498C19.5417 7.93831 18.8333 8.22998 18 8.22998C17.6167 8.22998 17.25 8.15931 16.9 8.01798C16.55 7.87665 16.2333 7.68065 15.95 7.42998L8.9 11.53C8.93333 11.63 8.95833 11.7426 8.975 11.868C8.99167 11.9933 9 12.114 9 12.23C9 12.346 8.99167 12.467 8.975 12.593C8.95833 12.719 8.93333 12.8313 8.9 12.93L15.95 17.03C16.2333 16.78 16.55 16.5843 16.9 16.443C17.25 16.3016 17.6167 16.2306 18 16.23C18.8333 16.23 19.5417 16.5216 20.125 17.105C20.7083 17.6883 21 18.3966 21 19.23C21 20.0633 20.7083 20.7716 20.125 21.355C19.5417 21.9383 18.8333 22.23 18 22.23ZM18 6.22998C18.2833 6.22998 18.521 6.13431 18.713 5.94298C18.905 5.75165 19.0007 5.51398 19 5.22998C18.9993 4.94598 18.9033 4.70865 18.712 4.51798C18.5207 4.32731 18.2833 4.23131 18 4.22998C17.7167 4.22865 17.4793 4.32465 17.288 4.51798C17.0967 4.71131 17.0007 4.94865 17 5.22998C16.9993 5.51131 17.0953 5.74898 17.288 5.94298C17.4807 6.13698 17.718 6.23265 18 6.22998ZM6 13.23C6.28333 13.23 6.521 13.134 6.713 12.942C6.905 12.75 7.00067 12.5126 7 12.23C6.99933 11.9473 6.90333 11.71 6.712 11.518C6.52067 11.326 6.28333 11.23 6 11.23C5.71667 11.23 5.47933 11.326 5.288 11.518C5.09667 11.71 5.00067 11.9473 5 12.23C4.99933 12.5126 5.09533 12.7503 5.288 12.943C5.48067 13.1356 5.718 13.2313 6 13.23ZM18 20.23C18.2833 20.23 18.521 20.134 18.713 19.942C18.905 19.75 19.0007 19.5126 19 19.23C18.9993 18.9473 18.9033 18.71 18.712 18.518C18.5207 18.326 18.2833 18.23 18 18.23C17.7167 18.23 17.4793 18.326 17.288 18.518C17.0967 18.71 17.0007 18.9473 17 19.23C16.9993 19.5126 17.0953 19.7503 17.288 19.943C17.4807 20.1356 17.718 20.2313 18 20.23Z" fill="black"/>
                </svg>
              </div>

              <Link to='/shoppingCart' className="button btn items-center  w-44 h-12 p-2 bg-blue rounded-lg justify-center  gap-4 inline-flex">
                <div className="">
                  <svg className='w-[18px] h-[18px]' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M3 6.22998H22L19 16.23H6L3 6.22998ZM3 6.22998L2.25 3.72998M9.992 11.23H11.992M11.992 11.23H13.992M11.992 11.23V9.22998M11.992 11.23V13.23M11 19.73C11 20.1278 10.842 20.5093 10.5607 20.7906C10.2794 21.0719 9.89782 21.23 9.5 21.23C9.10218 21.23 8.72064 21.0719 8.43934 20.7906C8.15804 20.5093 8 20.1278 8 19.73M17 19.73C17 20.1278 16.842 20.5093 16.5607 20.7906C16.2794 21.0719 15.8978 21.23 15.5 21.23C15.1022 21.23 14.7206 21.0719 14.4393 20.7906C14.158 20.5093 14 20.1278 14 19.73" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className='text-white '>ADD TO CART</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[85px]">
        <h2 className='text-4xl font-semibold  tracking-wide text-center '>Related Products</h2>
        <div className="pt-[30px]  grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 sm:gap-[40px] gap-[20px] ">
        {data.slice(0,4).map((d, i) => (
            <Link 
                key={i}
                to='/productPage'
            >
                <div className="w-full max-w-[330px] h-full p-[10px] border-[1px] border-[#EDEDEF] rounded-[15px]">
                <div className="relative bg-bg1 max-w-[550px] sm:h-[260px] h-[180px] rounded-[16px] overflow-hidden">
                    <img 
                    src={d.imagePath} 
                    alt={d.title} 
                    className='w-full h-full rounded-[16px] transform transition-transform duration-100 ease-in-out hover:scale-105'
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-opacity duration-300 ease-in-out rounded-[16px]"></div>
                </div>
                <h1 className='sm:text-[22px] text-[14px] text-[#121212CC] py-[6px]'>{d.title}</h1>
                <div className="flex gap-[5px] pb-[8px] sm:pb-[15px] text-[20px]">
                    <AiFillStar className="text-[#FFBE1E] text-[20px]" /><AiFillStar className="text-[#FFBE1E] text-[20px]" /><AiFillStar className="text-[#FFBE1E] text-[20px]" /><AiFillStar className="text-[#FFBE1E] text-[20px]" /><TiStarOutline className='text-[#12121280]' />                  
                </div>
                <span className='text-[18px] font-bold sm:pt-[25px] pt-[15px]'>$ {d.price}</span>
                </div>
            </Link>
        ))}
        </div>
        <div className="flex py-[70px] items-center justify-center gap-[10px]">
            <button
                className='border-[1px] hidden border-[#12121280] sm:w-[40px] w-[30px] sm:flex items-center justify-center font-bold text-[18px] sm:h-[40px] h-[30px] rounded-[8px] hover:bg-blue hover:text-white transition-all duration-200'
                onClick={() => handleButtonClick(0)}
                style={activeButton === 0 ? { backgroundColor: 'blue', color: 'white' } : {}}
            >
                <img src={LeftDouble} alt="" />
            </button>
            <button
                className='border-[1px] hidden border-[#12121280] sm:w-[40px] w-[30px] sm:flex items-center justify-center font-bold text-[18px] sm:h-[40px] h-[30px] rounded-[8px] hover:bg-blue hover:text-white transition-all duration-200'
                onClick={() => handleButtonClick(-1)}
                style={activeButton === -1 ? { backgroundColor: 'blue', color: 'white' } : {}}
            >
                <img src={Vectorleft} alt="" />
            </button>
            {[1, 2, 3].map(number => (
                <button
                    key={number}
                    className={`border-[1px] sm:w-[40px] w-[30px] flex items-center justify-center font-bold text-[18px] sm:h-[40px] h-[30px] rounded-[8px] hover:bg-blue hover:text-white transition-all duration-200 ${activeButton === number ? 'bg-blue text-white' : 'border-[#12121280]'}`}
                    onClick={() => handleButtonClick(number)}
                >
                    {number}
                </button>
            ))}
            <button
                className='border-[1px] border-[#12121280] sm:w-[40px] w-[30px] flex items-center justify-center font-bold text-[18px] sm:h-[40px] h-[30px] rounded-[8px] hover:bg-blue hover:text-white transition-all duration-200'
                onClick={() => handleButtonClick('...')}
                style={activeButton === '...' ? { backgroundColor: 'blue', color: 'white' } : {}}
            >
                ...
            </button>
            <button
                className='border-[1px] border-[#12121280] sm:w-[40px] w-[30px] flex items-center justify-center font-bold text-[18px] sm:h-[40px] h-[30px] rounded-[8px] hover:bg-blue hover:text-white transition-all duration-200'
                onClick={() => handleButtonClick(10)}
                style={activeButton === 10 ? { backgroundColor: 'blue', color: 'white' } : {}}
            >
                10
            </button>
            <button
                className='border-[1px] border-[#12121280] sm:w-[40px] w-[30px] flex items-center justify-center font-bold text-[18px] sm:h-[40px] h-[30px] rounded-[8px] hover:bg-blue hover:text-white transition-all duration-200'
                onClick={() => handleButtonClick(-2)}
                style={activeButton === -2 ? { backgroundColor: 'blue', color: 'white' } : {}}
            >
                <img src={VectorRight} alt="" />
            </button>
            <button
                className='border-[1px] border-[#12121280] sm:w-[40px] w-[30px] h-[30px] flex items-center justify-center font-bold text-[18px] sm:h-[40px] rounded-[8px] hover:bg-blue hover:text-white transition-all duration-200'
                onClick={() => handleButtonClick(-3)}
                style={activeButton === -3 ? { backgroundColor: 'blue', color: 'white' } : {}}
            >
                <img src={RightDouble} alt="" />
            </button>
        </div>

      </div>
      </div>
    </div>
  )
}

export default ProductDetails
