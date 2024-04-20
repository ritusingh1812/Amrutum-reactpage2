import React from 'react'

export default function Header() {
  return (
    <>
      <div className="design position-relative">
    <div className='circle position-absolute'></div>
    <div className='circle2 position-absolute'></div>
    <div className='circle2 position-absolute' style={{top:"170px",left:"400px"}}> </div>
    <div className='search-box container position-absolute'>
      <h2 style={{fontStyle:"rounded"}}> Find expert Doctors for an In-clinic session here</h2>
      <div className='row my-5'>
        <div className='col-3'> 
        
        <select className="form-select" aria-label="Default select example">
  <option selected> Select Location</option>
  <option value="1">Tamil Nadu</option>
  <option value="2">Delhi</option>
  <option value="3">Mumbai</option>
  <option value="4">Kolkata</option>
</select>


        
        </div>
        <div className='col-7'>
        <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="eg. Doctor,Specialization, clinic name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn" type="button" id="button-addon2"><i className="fa-solid fa-arrow-right"></i></button>
</div>
        </div>
      </div>
    </div>
    

</div>
    </>
  )
}
