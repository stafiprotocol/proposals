import * as React from 'react';

interface StatusProps {
  status: number;
}

export const Status = (params: StatusProps) => {
  
  let statusName = 'Active'
  let bgColor = 'bg-white/10'
  let textColor = 'text-white'

  switch(params.status){
    case 2:
      statusName = 'Passed'
      bgColor = 'bg-[#4275FF]'
      textColor = 'text-white'
      break
    case 1:
      statusName = 'Review'
      bgColor = 'bg-[#8A939C]'
      textColor = 'text-white'
      break
    case 0:
      statusName = 'Draft'
      bgColor = 'bg-[#8A939C]'
      textColor = 'text-white'
      break
  }

  return (

    <div className={`${bgColor} ${textColor} px-1.5 py-0.5 text-sm rounded-[6px]`}>
      {statusName}
    </div>
)}


export default Status;