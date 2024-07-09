import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import heroImage from '../assets/Cloud.jpg';
import VectorSearch from '../assets/VectorSearch.png';
import Profile from '../assets/Profile.png';
import VectorBag from '../assets/VectorBag.png';
import Menu from '../assets/menu.png';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(!open)
    setOpenMenu(true); 
    // const checkbox = document.getElementById('checkbox2');
    // if (checkbox) {
    //   checkbox.checked = false; 
    // }
  };
  return (
    <div className='relative'>
      <div className='xl:px-[100px]  lg:px-[60px] px-[30px] md:px-[40px] flex items-center justify-between xl:gap-[200px] lg:gap-[100px] sm:pt-[20px] sm:pb-[20px] pb-[20px] pt-[15px]'>
        <div className="logo md:flex hidden">
          <Link to='/' className='flex items-center justify-center'>
            <img src={heroImage} alt="" className='sm:w-[80px] sm:h-[80px] w-[40px]' />
            <p className='sm:text-[20px] text-[15px] font-bold'>timbu<span className="text-blue">cloud</span></p>
          </Link>
        </div>

        <div className="md:flex hidden">
          <nav>
            <ul className='flex xl:gap-[48px] md:gap-[20px] items-center justify-center'>
              <NavLink to='/productCatalog' className='text-[18px] font-[400] text-black hover:text-blue navLinkItem'>Home</NavLink>
              <NavLink to='/' className='text-[18px] font-[400] text-black hover:text-blue navLinkItem'>Catalog</NavLink>
              <NavLink to='/about' className='text-[18px] font-[400] text-black hover:text-blue navLinkItem'>About</NavLink>
              <NavLink to='/contactus' className='text-[18px] font-[400] text-black hover:text-blue navLinkItem'>Contact</NavLink>
            </ul>
          </nav>
        </div>

        <div className="md:flex hidden">
          <div className="flex lg:gap-10 md:gap-[8px]">
            <img src={VectorSearch} alt="" className="w-[21px] h-[21px] cursor-pointer hover-scale " />
            <img src={Profile} alt="" className="w-[20px] h-[21px] cursor-pointer hover-scale" />
            <Link to='/shoppingCart'>  
                  <img src={VectorBag} alt="" className="w-[18px] h-[21px] cursor-pointer hover-scale" />
            </Link>
          </div>
        </div>
      </div>

    

      {/* Mobile view */}
      <div className={`md:hidden flex items-center justify-around px-[20px] `}>
        {/* Menu bar */}
        <div className='md:hidden flex' onClick={toggleSidebar}>
          <img src={Menu} alt="Menu" className="w-[24px] h-[24px] cursor-pointer" />
        </div>

        {/* Search container */}
        {/* <div className="">
          <form className="form">
            <label htmlFor="search">
              <input className="input" type="text" required="" placeholder="what are you looking for?" id="search" />
              <div className="fancy-bg"></div>
              <div className="search">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </div>
            </label>
          </form>
        </div> */}

        <div className="logo block md:hidden">
          <Link to='/' className='flex items-center justify-center'>
            <img src={heroImage} alt="" className='sm:w-[80px] sm:h-[80px] w-[40px]' />
            <p className='sm:text-[28px] text-[24px] font-bold'>timbu<span className="text-blue">cloud</span></p>
          </Link>
        </div>

        <div className="md:hidden flex items-center justify-center gap-[20px]">
          <Link to='/cart1'>
            <img src={VectorBag} alt="" className="w-[16px] h-[18px] cursor-pointer" />
          </Link>
          {/* <img src={Profile} alt="" className="w-[18px] h-[17.5px] cursor-pointer" /> */}
        </div>
      </div>

      {/* Sidebar overlay */}
      <div className={`fixed top-0 left-0 h-full w-full transition-all duration-300 ease-in-out ${open ? 'bg-black bg-opacity-50 ' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full overflow-y-scroll w-[70%] bg-white z-[10000000000000] transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'} ${openMenu ? '-translate-x-full' : ''}`}>
      <div className='flex justify-end pt-[15px] pr-[20px]' onClick={toggleSidebar}>
          <svg className='w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5.71983 5.72006C5.86045 5.57961 6.05108 5.50072 6.24983 5.50072C6.44858 5.50072 6.6392 5.57961 6.77983 5.72006L11.9998 10.9401L17.2198 5.72006C17.3115 5.62133 17.4281 5.54916 17.5574 5.51115C17.6866 5.47313 17.8237 5.47068 17.9542 5.50406C18.0848 5.53743 18.2039 5.60539 18.299 5.70078C18.3941 5.79617 18.4618 5.91545 18.4948 6.04606C18.5281 6.17644 18.5258 6.31338 18.4879 6.44252C18.4501 6.57167 18.3782 6.68825 18.2798 6.78006L13.0598 12.0001L18.2798 17.2201C18.3786 17.3117 18.4507 17.4283 18.4887 17.5576C18.5268 17.6868 18.5292 17.8239 18.4958 17.9545C18.4625 18.085 18.3945 18.2041 18.2991 18.2992C18.2037 18.3944 18.0844 18.462 17.9538 18.4951C17.8234 18.5284 17.6865 18.526 17.5574 18.4882C17.4282 18.4503 17.3116 18.3784 17.2198 18.2801L11.9998 13.0601L6.77983 18.2801C6.63768 18.4127 6.44958 18.485 6.25519 18.4816C6.0608 18.4782 5.87531 18.3995 5.73783 18.2621C5.60036 18.1246 5.52164 17.9391 5.51828 17.7447C5.51493 17.5503 5.58719 17.3622 5.71983 17.2201L10.9398 12.0001L5.71983 6.78006C5.57938 6.63943 5.50049 6.44881 5.50049 6.25006C5.50049 6.05131 5.57938 5.86068 5.71983 5.72006Z" fill="black" />
          </svg>
        </div>
        <div className="px-[30px] h-full pt-[20px] pb-[100px]">
          <nav className="flex flex-col gap-[20px]">
          {/* <ul className='flex xl:gap-[48px] md:gap-[20px] items-center justify-center'> */}
              <NavLink onClick={handleLinkClick} to='/productCatalog' className='text-[18px] font-[400] text-black hover:text-blue w-[65px]  navLinkItem'>Home</NavLink>
              <NavLink onClick={handleLinkClick} to='/' className='text-[18px] font-[400] text-black hover:text-blue w-[65px] navLinkItem'>Catalog</NavLink>
              <NavLink onClick={handleLinkClick} to='/about' className='text-[18px] font-[400] text-black hover:text-blue w-[65px]  navLinkItem'>About</NavLink>
              <NavLink onClick={handleLinkClick} to='/contactus' className='text-[18px] font-[400] text-black hover:text-blue  w-[65px]  navLinkItem'>Contact</NavLink>
            {/* </ul> */}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
