import React from 'react'
import "./info.css";

const Info = ({credit, debit}) => {
  return (
    <div className="flex space-evenly">
      <div className='credit amount-container flex'>
        <h3>Credit</h3>
        <p className='cost'> Rs {credit}</p>
      </div>
      <div className='debit amount-container flex'>
        <h3>Debit</h3>
        <p className='cost'> Rs { -1 * debit}</p>
      </div>
    </div>
  );
}

export default Info