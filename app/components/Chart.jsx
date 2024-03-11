'use client'
import { Line } from "react-chartjs-2";
import { FaChevronDown } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import {Chart as ChartJs,LineElement,CategoryScale,LinearScale,PointElement} from 'chart.js'
ChartJs.register(LineElement,CategoryScale,LinearScale,PointElement)
export default function Chart() {
    const Data={
        labels:["50","100","200"],
        datasets:[{
          data:[8,6,5],
          borderColor: '#C73AFF',
          pointBorderColor: '#fff',
        }]
      }
      const options={
        
      }
  return <>
    <div className="flex items-center justify-between mb-2">
        <p>Patient Visit</p>
        <div className="content flex items-center bg-gray-600 p-1">
         <SlCalender size={10} className="mr-1"/>
         <small>This Month</small>
         <FaChevronDown className="ml-1" size={10}/>
        </div>
      </div>
      <Line data={Data} options={options}></Line>
  </>
}
