import React from 'react'

export default function Filters() {
  return (
    <>
      <div className='container my-1 d-flex flex-row justify-content-center'>
      
          <div className="dropdown">
          <button className="btn my-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{margin:"5px 70px 5px 70px"}}>
            Expertise
          </button>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/">ENT</a></li>
          <li><a className="dropdown-item" href="/">Cardiology</a></li>
          <li><a className="dropdown-item" href="/">Medicine</a></li>
        </ul>
        </div>
        {/*  */}
        <div className="dropdown">
          <button className="btn my-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{margin:"5px 70px 5px 70px"}}>
            Gender
          </button>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/">Female</a></li>
          <li><a className="dropdown-item" href="/">Male</a></li>
          <li><a className="dropdown-item" href="/">Other</a></li>
        </ul>
        </div>
        {/*  */}
        <div className="dropdown">
          <button className="btn my-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{margin:"5px 70px 5px 70px"}}>
            Fees
          </button>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/">0-500</a></li>
          <li><a className="dropdown-item" href="/">500-1000</a></li>
          <li><a className="dropdown-item" href="/">1000+</a></li>
        </ul>
        </div>
        {/*  */}
        <div className="dropdown">
          <button className="btn my-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{margin:"5px 70px 5px 70px"}}>
            Languages
          </button>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/">Hindi</a></li>
          <li><a className="dropdown-item" href="/">Englih</a></li>
          <li><a className="dropdown-item" href="/">Telegu</a></li>
          <li><a className="dropdown-item" href="/">Tamil</a></li>
        </ul>
        </div>
        {/*  */}
        <div className="dropdown">
          <button className="btn my-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{margin:"5px 70px 5px 70px",backgroundColor:"rgba(220, 238, 220, 1)"}}>
            All filters
          </button>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/">..</a></li>
          <li><a className="dropdown-item" href="/">..</a></li>
          
        </ul>
        </div>


  </div>
        

    
    </>
  )
}
