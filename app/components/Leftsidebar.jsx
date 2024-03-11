'use client'
import { MdDashboard,MdIntegrationInstructions } from "react-icons/md";
import { FaStar,FaUser,FaDollarSign,FaChevronRight } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import Image from 'next/image';
import { useState } from "react";
export default function Leftsidebar() {
    const [showDashboardMenu, setShowDashboardMenu] = useState(false);

    const toggleDashboardMenu = () => {
      setShowDashboardMenu(!showDashboardMenu);
    };
  return (
    <div className="hidden md:block">
    <div className='p-4 border-b border-gray-300'>
      <h1 className='font-bold text-center text-white mt-4 mb-10'>DOCCURE</h1> 
      <ul>
        <li className='leftsidebarli' onClick={toggleDashboardMenu}>
            <div className='flex items-center'>
            <MdDashboard className='mr-1'/>
            Dashboard
            </div>
            {showDashboardMenu ? <FaChevronDown/> :<FaChevronRight/>}
            
        </li>
        {showDashboardMenu && (
            <div className='pl-4'>
              <li className='leftsidebarli'>
                <div className='flex items-center'>
                  Reports
                </div>
              </li>
              <li className='leftsidebarli'>
                <div className='flex items-center'>
                  Overview
                </div>
              </li>
            </div>
          )}
        <li className='leftsidebarli'>
        <div className='flex items-center'>
            <FaStar className='mr-1'/>
            Features
            </div>
            <FaChevronRight/>
        </li>
        <li className='leftsidebarli'>
        <div className='flex items-center'>
            <FaUser className='mr-1'/>
            Users
         </div>
            <FaChevronRight/>
        </li>
        <li className='leftsidebarli'>
        <div className='flex items-center'>
            <FaDollarSign className='mr-1'/>
            Pricing
         </div>
            <FaChevronRight/>
        </li>
        <li className='leftsidebarli'>
        <div className='flex items-center'>
            <MdIntegrationInstructions className='mr-1'/>
            Integrations
        </div>
            <FaChevronRight/>
        </li>
      </ul>
    </div>
        <ul className='p-4'>
            <li className='leftsidebarli'>
        <div className='flex items-center'>
                <IoIosSettings  className='mr-1'/>
                Settings
                </div>
            <FaChevronRight/>
            </li>
            <div className='flex items-center my-1 cursor-pointer justify-between'>
                <div className='flex items-center'>
                <Image  src='/leftsidephoto.avif'  alt='img' height={30} width={30} className='rounded-full mr-2' />
                <div>
                    <p className='text-white'>John Carter</p>
                    <p>Doctor</p>
                </div>
                </div>
            <FaChevronRight/>

            </div>
        </ul>
   
    </div>
  )
}
