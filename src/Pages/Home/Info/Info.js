import React from 'react';

const Info = () => {
    return (
        <div >
            {/* flex flex-wrap justify-center gap-10 my-10  wrap korle shundor dekhai na tai scrooll korar moto rakhsi  */      }
            <div className="stats shadow flex ">
  
  <div className="stat place-items-center">
    <div className="stat-title">Contact</div>
    <div className="stat-value">01628692798</div>
    {/* <div className="stat-desc">From January 1st to February 1st</div> */}
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-secondary">4,200</div>
    {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Address </div>
    <div className="stat-value">Agrabad,Chittagong</div>
    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
  </div>
  
</div>
        </div>
    );
};

export default Info;