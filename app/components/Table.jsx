'use client'
import { CiEdit } from "react-icons/ci";
import {MdDelete,MdDataSaverOff } from "react-icons/md";
import DataTable from 'react-data-table-component'
export default function Table() {
    const columns = [
        {
          name: 'Patient Name',
          cell: row => (
            <div className="flex items-center">
              <img src={'/leftsidephoto.avif'} alt="Patient" className="w-8 h-8 rounded-full mr-2" />
              <span>{row.PatientName}</span>
            </div>
          ),
          selector: row => row.PatientName,
        },
        {
          name: 'Date In',
          selector: row => row.DateIn,
        },
        {
          name: 'Symptoms',
          selector: row => row.Symptoms,
        },
        {
          name: 'Status',
          selector: row => row.Status,
          cell: row => <span className={row.Status === 'Confirmed' ? 'text-green-500' : row.Status === 'Cancelled' ? 'text-red-500' : ''}>{row.Status}</span>,
        },
        {
          name: '', 
          cell: row => (
            <div className="flex items-center">
              <span className="mr-2">
                <CiEdit />
              </span>
              <span>
                <MdDelete className="text-red-500" />
              </span>
            </div>
          ),
        },
      ];
    const data=[{
      id:1,
      PatientName: 'Lukas Rolan',
      DateIn: 'Dec 18,2023',
      Symptoms:'internist',
      Status:'Confirmed',
    },
    {
      id:1,
      PatientName: 'Lukas Rolan',
      DateIn: 'Dec 18,2023',
      Symptoms:'internist',
      Status:'Confirmed',
    },
    {
      id:1,
      PatientName: 'Lukas Rolan',
      DateIn: 'Dec 18,2023',
      Symptoms:'internist',
      Status:'Confirmed',
    },
    {
      id:1,
      PatientName: 'Lukas Rolan',
      DateIn: 'Dec 18,2023',
      Symptoms:'internist',
      Status:'Cancelled',
    }
    
    ]
    const customstyles={
      rows:{
        style:{
          backgroundColor:'#0B1739',
          color:'#ffff',
        }
      },
      headCells:{
        style:{
          backgroundColor:'#0B1739',
          color:'#ffff',
        }
      }
    }
  return <>
   <div className="flex items-center justify-between mb-2">
        <p>Patient Visit</p>
        <MdDataSaverOff/>
      </div>
      <div>
      <DataTable columns={columns} data={data} customStyles={customstyles} />
      </div>
  </>
}
