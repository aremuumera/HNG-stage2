import React, { useState } from 'react';
import VectorUp from '../assets/VectorUp.png';
import { DoubleScrollBar } from './slider';
import DoubleScrollBars from './DoubleScrollBar';

const Sidebar = ({ display }) => {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <div className={`lg:pl-[60px] sm:pl-[25px] sm:block ${display} w-full max-w-[280px] h-[100%]`}>
        <div className="">
          <div className="flex items-center lg:pr-[25px] sm:pr-[10px] justify-between lg:gap-[60px] sm:gap-[30px] border-b-[1px] border-b-blue pb-[10px] w-full">
            <h2 className="font-bold text-[24px]">Categories</h2>
            {/* <img src={VectorUp} alt="" className="w-[8px] h-[6px]" /> */}
          </div>
          <ul>
            {['Chairs', 'Sofas', 'Beds', 'Boards', 'Lamps', 'Textile', 'Decor'].map((category) => (
              <li
                key={category}
                className={`text-[18px] leading-10 font-[400] cursor-pointer ${
                  activeCategory === category ? 'text-blue' : ''
                } hover:text-blue transition-colors duration-200`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <div className="pt-[50px]">
            <div className="flex items-center lg:pr-[25px] sm:pr-[10px] justify-between lg:gap-[60px] sm:gap-[30px] border-b-[1px] border-b-blue pb-[10px] w-full">
              <h2 className="font-bold text-[24px]">Filter By</h2>
              {/* <img src={VectorUp} alt="" className="w-[8px] h-[6px]" /> */}
            </div>
            <p className='text-[] py-[10px]'>PRICE</p>
            <DoubleScrollBars />
            
          </div>
        </div>

        <div className="pt-[50px]">
          <div className="flex items-center lg:pr-[25px] sm:pr-[10px] justify-between lg:gap-[60px] sm:gap-[30px] border-b-[1px] border-b-blue pb-[10px] w-full">
            <h2 className="font-bold text-[24px]">Materials</h2>
            {/* <img src={VectorUp} alt="" className="w-[8px] h-[6px]" /> */}
          </div>
          <ul>
            {['Wood', 'Leather', 'Metal', 'Plastic', 'Fibre'].map((material) => (
              <li
                key={material}
                className={`text-[18px] leading-10 font-[400] cursor-pointer ${
                  activeCategory === material ? 'text-blue' : ''
                } hover:text-blue transition-colors duration-200`}
                onClick={() => handleCategoryClick(material)}
              >
                {material}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-[50px]">
          <div className="flex items-center lg:pr-[25px] sm:pr-[10px] justify-between lg:gap-[60px] sm:gap-[30px] border-b-[1px] border-b-blue pb-[10px] w-full">
            <h2 className="font-bold text-[24px]">Brands</h2>
            {/* <img src={VectorUp} alt="" className="w-[8px] h-[6px]" /> */}
          </div>
          <ul>
            {['Cosmo', 'Selletti', 'Laforma'].map((brand) => (
              <li
                key={brand}
                className={`text-[18px] leading-10 font-[400] cursor-pointer ${
                  activeCategory === brand ? 'text-blue' : ''
                } hover:text-blue transition-colors duration-200`}
                onClick={() => handleCategoryClick(brand)}
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-[30px]">
          <div className="flex items-center lg:pr-[25px] sm:pr-[10px] justify-between lg:gap-[60px] sm:gap-[30px] border-b-[1px] border-b-blue pb-[10px] w-full">
            <h2 className="font-bold text-[24px]">Color</h2>
          </div>
          <div className="pt-[10px] lg:w-[200px] sm:w-[150px]">
            <div className="flex gap-[15px] flex-wrap">
              {['#E9D30C', '#DE5252', '#40D00D', '#0AB76E', '#6B0606', '#1B1976', '#DE0C7D', '#FB2E2E', '#0BFDD1', '#016D2C', '#FCFCFC', '#000000'].map((color, index) => (
                <p
                  key={index}
                  className={`w-[18px] h-[18px] rounded-full ${color === '#FCFCFC' ? 'border-[1px] border-black' : ''} ${activeCategory === color ? 'bg-blue' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleCategoryClick(color)}
                ></p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
