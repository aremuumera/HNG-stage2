
import React, { useState } from 'react'
import VectorDown from '../assets/VectorDown.png'
import box1 from '../assets/box1.png'
import box2 from '../assets/box2.png'
import box3 from '../assets/box4.png'
import  data from '../db/data'
import LeftDouble from '../assets/Group1.png'
import RightDouble from '../assets/Group3.png'
import VectorRight from '../assets/VectorRight.png'
import Vectorleft from '../assets/Vectorleft.png'
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { TiStarOutline } from 'react-icons/ti'
import Sidebar from '../components/Sidebar'






const ProductList = () => {

  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  }

  const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (number) => {
        setActiveButton(number);
    };

  return (
    <div>
      <div className="flex  items-center justify-between  product border-b-[2px]  border-blue pb-[10px] ">
        <div className="flex gap-[10px] items-center" >
            <p className='font-bold sm:block hidden'> Sort by:</p>
            <div className="sm:flex items-center hidden gap-[10px] text-[#12121280]">
                <span>Popular</span>
                <img src={VectorDown} alt="" className='w-[8px] h-[8px]' />
            </div>
            <div className="sm:hidden block" onClick={toggleSidebar}>
                <svg className='w-[40px] h-[40px]' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M21 22L16 17L21 12" stroke="#121212" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 22L11 17L16 12" stroke="#121212" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>

        <div className="flex items-center gap-[20px]">
            <div className="sm:hidden block">
                <svg className='w-[30px]' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 30 30" fill="none">
                    <path d="M15.5319 17.5287L11.4864 22.534V6.91432C11.4864 6.81039 11.4461 6.71072 11.3745 6.63724C11.3028 6.56375 11.2056 6.52247 11.1042 6.52247C11.0028 6.52247 10.9056 6.56375 10.8339 6.63724C10.7622 6.71072 10.7219 6.81039 10.7219 6.91432V22.512L6.67641 17.5282C6.64432 17.4886 6.60494 17.4559 6.56051 17.4319C6.51608 17.4079 6.46748 17.3932 6.41749 17.3884C6.36749 17.3837 6.31707 17.3891 6.26911 17.4043C6.22115 17.4196 6.17659 17.4444 6.13798 17.4773C6.09936 17.5102 6.06744 17.5505 6.04405 17.5961C6.02065 17.6416 6.00623 17.6915 6.00162 17.7427C5.997 17.794 6.00228 17.8457 6.01715 17.8948C6.03202 17.944 6.0562 17.9897 6.08829 18.0293L10.8203 23.8584C10.8562 23.9027 10.9011 23.9384 10.9519 23.9628C11.0028 23.9873 11.0582 24 11.1144 24H11.1149C11.2285 24 11.3361 23.9478 11.4089 23.8584L16.1211 18.0293C16.1858 17.9492 16.2169 17.846 16.2074 17.7424C16.198 17.6389 16.1488 17.5434 16.0706 17.477C15.9925 17.4106 15.8919 17.3788 15.7908 17.3885C15.6898 17.3982 15.5967 17.4486 15.5319 17.5287ZM24.9119 11.9707L20.1804 6.14159C20.1445 6.09742 20.0997 6.06184 20.0489 6.03738C19.9982 6.01292 19.9429 6.00016 19.8868 6C19.7732 6 19.6646 6.05225 19.5928 6.14159L14.8801 11.9707C14.8163 12.0509 14.786 12.1536 14.7958 12.2565C14.8056 12.3594 14.8547 12.4542 14.9324 12.5202C15.0101 12.5862 15.11 12.618 15.2105 12.6088C15.311 12.5995 15.4038 12.5499 15.4687 12.4707L19.5143 7.46604V23.0857C19.5143 23.1896 19.5546 23.2893 19.6262 23.3628C19.6979 23.4362 19.7951 23.4775 19.8965 23.4775C19.9979 23.4775 20.0951 23.4362 20.1668 23.3628C20.2385 23.2893 20.2787 23.1896 20.2787 23.0857V7.48746L24.3243 12.4713C24.3561 12.5111 24.3954 12.544 24.4397 12.5681C24.4841 12.5923 24.5327 12.6072 24.5827 12.6119C24.6327 12.6167 24.6831 12.6112 24.7311 12.5959C24.779 12.5805 24.8235 12.5556 24.8619 12.5225C24.9399 12.4561 24.989 12.3607 24.9984 12.2572C25.0077 12.1537 24.9766 12.0507 24.9119 11.9707Z" fill="#121212"/>
                </svg>
            </div>
            
            <div className="">
                <svg className='w-[30px]' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <g clipPath="url(#clip0_11_420)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.25 16.25C11.913 16.25 12.5489 16.5134 13.0178 16.9822C13.4866 17.4511 13.75 18.087 13.75 18.75V23.75C13.75 24.413 13.4866 25.0489 13.0178 25.5178C12.5489 25.9866 11.913 26.25 11.25 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V18.75C3.75 18.087 4.01339 17.4511 4.48223 16.9822C4.95107 16.5134 5.58696 16.25 6.25 16.25H11.25ZM23.75 16.25C24.3807 16.2498 24.9882 16.488 25.4507 16.9169C25.9132 17.3457 26.1964 17.9336 26.2438 18.5625L26.25 18.75V23.75C26.2502 24.3807 26.012 24.9882 25.5831 25.4507C25.1543 25.9132 24.5664 26.1964 23.9375 26.2438L23.75 26.25H18.75C18.1193 26.2502 17.5118 26.012 17.0493 25.5831C16.5868 25.1543 16.3036 24.5664 16.2563 23.9375L16.25 23.75V18.75C16.2498 18.1193 16.488 17.5118 16.9169 17.0493C17.3457 16.5868 17.9336 16.3036 18.5625 16.2563L18.75 16.25H23.75ZM11.25 18.75H6.25V23.75H11.25V18.75ZM23.75 18.75H18.75V23.75H23.75V18.75ZM23.75 3.75C24.3807 3.7498 24.9882 3.98801 25.4507 4.41687C25.9132 4.84573 26.1964 5.43356 26.2438 6.0625L26.25 6.25V11.25C26.2502 11.8807 26.012 12.4882 25.5831 12.9507C25.1543 13.4132 24.5664 13.6964 23.9375 13.7437L23.75 13.75H18.75C18.1193 13.7502 17.5118 13.512 17.0493 13.0831C16.5868 12.6543 16.3036 12.0664 16.2563 11.4375L16.25 11.25V6.25C16.2498 5.61928 16.488 5.01179 16.9169 4.54932C17.3457 4.08684 17.9336 3.80355 18.5625 3.75625L18.75 3.75H23.75ZM11.25 3.75C11.8807 3.7498 12.4882 3.98801 12.9507 4.41687C13.4132 4.84573 13.6964 5.43356 13.7437 6.0625L13.75 6.25V11.25C13.7502 11.8807 13.512 12.4882 13.0831 12.9507C12.6543 13.4132 12.0664 13.6964 11.4375 13.7437L11.25 13.75H6.25C5.61928 13.7502 5.01179 13.512 4.54932 13.0831C4.08684 12.6543 3.80355 12.0664 3.75625 11.4375L3.75 11.25V6.25C3.7498 5.61928 3.98801 5.01179 4.41687 4.54932C4.84573 4.08684 5.43356 3.80355 6.0625 3.75625L6.25 3.75H11.25ZM23.75 6.25H18.75V11.25H23.75V6.25ZM11.25 6.25H6.25V11.25H11.25V6.25Z" fill="#355ADF"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_11_420">
                        <rect width="30" height="30" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div className="sm:block hidden">
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <g clipPath="url(#clip0_11_425)">
                    <path d="M2 16.4H4.77778V13.6H2V16.4ZM2 22H4.77778V19.2H2V22ZM2 10.8H4.77778V8H2V10.8ZM7.55556 16.4H27V13.6H7.55556V16.4ZM7.55556 22H27V19.2H7.55556V22ZM7.55556 8V10.8H27V8H7.55556Z" fill="#121212"/>
                </g>
                <defs>
                    <clipPath id="clip0_11_425">
                    <rect width="30" height="30" fill="white"/>
                    </clipPath>
                </defs>
                </svg>
            </div>
        </div>        
      </div>

        {/* sidebar mobile */}
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

      {/* all product */}
      <div className="pt-[30px] relative   grid lg:grid-cols-3 grid-cols-2 sm:gap-[40px] gap-[20px] ">
      {data.map((d, i) => (
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
      <span className='text-[18px] font-bold sm:pt-[25px] pt-[15px]'> {d.price}</span>
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
  )
}

export default ProductList
