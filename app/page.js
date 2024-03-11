
import { CiSearch,CiTimer } from "react-icons/ci";
import { AiOutlineAudio } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa6";
import { FaUsers,FaUserSecret } from "react-icons/fa";
import { IoArrowUpSharp } from "react-icons/io5";
import Chart from "./components/Chart";
import Table from "./components/Table";

export default function Home() {

  
  return <>
  <div>
    <div className="sm:flex sm:items-center sm:justify-between p-4">
      <form className="form-control flex items-center">
      <div className="relative flex items-center">
      <CiSearch className="absolute left-2 text-gray-500" />
      <AiOutlineAudio className="absolute right-2 text-gray-500" />
      <input type="text" placeholder="Search" className="rounded p-2 pl-10 pr-10 w-full" />
    </div>
      </form>
      <div className="flex items-center">
        <p className="mr-1">English(US)</p>
        <FaChevronDown/>
      </div>
    </div>
    <div className="p-4">
    <h2 className="text-left">Overview</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      <div className="box p-4 rounded-md shadow-md my-3">
        <div className="flex items-center justify-between">
          <div>
          <small >Total Patiants</small>
          <p className="text-left my-2 font-bold">401</p>
          </div>
          <FaUsers className="iconcolor rounded-md p-1" size={30} />
        </div>
         <div className="flex items-center my-2">
           <IoArrowUpSharp   className="mr-1"/>
           <small>8.5% Up From Last Month</small>
          </div>     
      </div>
      <div className="box p-4 rounded-md shadow-md my-3">
        <div className="flex items-center justify-between">
          <div>
          <small >Total Stuff</small>
          <p className="text-left my-2 font-bold">20</p>
          </div>
          <FaUserSecret className="iconcolor rounded-md p-1" size={30}  />
        </div>
         <div className="flex items-center my-2">
           <IoArrowUpSharp className="mr-1"/>
           <small>8.5% Up From Last Month</small>
          </div>     
      </div>
      <div className="box p-4 rounded-md shadow-md my-3">
        <div className="flex items-center justify-between">
          <div>
          <small >Appointments</small>
          <p className="text-left my-2 font-bold">2040</p>
          </div>
          <CiTimer className="iconcolor rounded-md p-1" size={30} />
        </div>
         <div className="flex items-center my-2">
           <IoArrowUpSharp   className="mr-1"/>
           <small>8.5% Up From Last Month</small>
          </div>     
      </div>
    </div>
    <div className="datacard box p-4 my-3" style={{width:'100%',height:'400px',marginBlock:'1rem'}}>
      <Chart/>
    </div>
    <div className="m-auto p-4 box ">
     <Table/>
    </div>
    </div>
    </div>
  </>
}
