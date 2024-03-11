import Image from "next/image";
import {MdDataSaverOff } from "react-icons/md";
import { GoDot } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
export default function Rightsidebar() {
  return <>
   <div className="hidden md:block">
    <div className="p-4 border-b border-gray-300">
     <Image src='/leftsidephoto.avif' alt='img' width={100} height={100} className="my-3 m-auto" />
     <p className="text-white text-center">Dr Cole Palmer</p>
     <div className="grid grid-cols-3 my-3">
      <div className="card text-center border-r border-gray-300">
        <small>Appointment</small>
        <p className="mt-1">4250</p>
      </div>
      <div className="card text-center border-r border-gray-300">
        <small>Patiants</small>
        <p className="mt-1">32.1K</p>
      </div>
      <div className="card text-center">
        <small>Rate</small>
        <p className="mt-1">4.8</p>
      </div>
     </div>
    </div>
    <div className="p-4 flex items-center justify-between">
      <p className="text-white">Upcoming Appointment</p>
      <MdDataSaverOff/>
    </div>
     <div className="content">
     <div class="date mr-1 ">July 30, 2022</div>
     <div class="line"></div>
     </div>
     <div className="p-4 border-b border-gray-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
        <GoDot/>
      <p>8.30am - 10.30am</p>
        </div>
      <FaChevronRight/>
      </div>
      <div className="text-center my-3">
      <p className="text-white">Nurse Visit 20</p>
      <small>Dr.coral Dr.cool</small>
      </div>
     </div>
     <div className="p-4 border-b border-gray-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
        <GoDot/>
      <p>8.30am - 10.30am</p>
        </div>
      <FaChevronRight/>
      </div>
      <div className="text-center my-3">
      <p className="text-white">Nurse Visit 20</p>
      <small>Dr.coral Dr.cool</small>
      </div>
     </div>
     <div className="p-4"> 
      <p className="text-white mb-10">Patient Satisfaction</p>
      <div className="flex items-center justify-between">
      <div class="donut-chart">
      <div class="section1"></div>
      <div class="section2"></div>
      <div class="section3"></div>
      <p>total</p>
      <p>2486</p>
      </div>
      <div>
         <div className="flex items-center mb-2">
          <GoDot/>
          <p>Excellent</p>
         </div>
         <div className="flex items-center mb-2">
          <GoDot/>
          <p>Very Good</p>
         </div>
         <div className="flex items-center">
          <GoDot/>
          <p>Good</p>
         </div>
      </div>
      </div>
     </div>
   </div>
  </>
}
