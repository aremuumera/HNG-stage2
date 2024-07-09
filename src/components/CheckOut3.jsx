
import React from 'react'

const CheckOuts3 = () => {
  return (
    <div className='flex  flex-col items-center justify-center -mt-[30px]'>
      <section className="step-wizard pb-[40px] xl:mr-[125px] w-full max-w-[600px] ">
            <ul className="step-wizard-list">
                <li className="step-wizard-item wizardone">
                    <span className="progress-count">1</span>
                    <span className="progress-label">Shipping</span>
                </li>
                     
                <li className="step-wizard-item current-item item2">
                    <span className="progress-count">
                    <svg className='w-[30px] h-[30px]' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M21 7.49984L9 19.4998L3.5 13.9998L4.91 12.5898L9 16.6698L19.59 6.08984L21 7.49984Z" fill="#FCFCFC"/>
                        </svg>
                    </span>
                    <span className="progress-label">Payment</span>
                </li>
                     
                <li className="step-wizard-item current-item item3">
                    <span className="progress-count border-blue ">
                        <svg className='w-[30px] h-[30px]' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M21 7.49984L9 19.4998L3.5 13.9998L4.91 12.5898L9 16.6698L19.59 6.08984L21 7.49984Z" fill="#FCFCFC"/>
                        </svg>
                    </span>
                    <span className=" text-[#000]">Confirm Order</span>
                </li>
            </ul>
        </section>

        <div className="pb-[70px] px-[20px]">
            <div className="flex flex-col w-full max-w-[600px] p-[30px] mx-auto items-center justify-center border-2 border-[#75717123] rounded-[20px]">
                <div className=" bg-[green] flex justify-center items-center w-[80px] h-[80px] rounded-full">
                    <svg className='w-[50px] h-[50px]' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M52.5 17.4996L22.5 47.4996L8.75 33.7496L12.275 30.2246L22.5 40.4246L48.975 13.9746L52.5 17.4996Z" fill="#FCFCFC"/>
                    </svg>
                </div>
                <h3 className='font-bold pt-[20px] text-[14px] md:text-[24px]'>Your items have been successfully ordered</h3>
                <p className='text-[24px] md:font-[700] py-[7px]'>Order ID: 234 455 kj</p>
                <p>To track order, <a className='underline text-blue'>click here</a></p>
            </div>
        </div>
       
    </div>
  )
}

export default CheckOuts3
