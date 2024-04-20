import React from 'react'
import Card from './Card'



export default function Result() {
  return (
    <>
    <div class="d-flex flex-row-reverse mb-3"> 
      <div className='my-3 mx-2 p-2' style={{width:"150px",height:"40px",backgroundColor:"rgba(234, 242, 234, 1)",borderRadius:"20px"}}><p> Hindi    ⨯</p> </div>
      <div className='my-3 mx-2 p-2' style={{width:"150px",height:"40px",backgroundColor:"rgba(234, 242, 234, 1)",borderRadius:"20px"}}><p>Female   ⨯</p></div>
      <div className='my-3 mx-2 p-2' style={{width:"150px",height:"40px",backgroundColor:"rgba(234, 242, 234, 1)",borderRadius:"20px"}}><p>Rs 0-Rs.500   ⨯</p></div>
      <div className='my-3 mx-2 p-2' style={{width:"150px",height:"40px",backgroundColor:"rgba(234, 242, 234, 1)",borderRadius:"20px"}}><p>Hair Care   ⨯ </p> </div>
      </div>

      <div className='Profile-card my-4 container'>
        <div className='row'>
          <div className='col'>
    <Card></Card>
          </div>
          <div className='col'>
            <Card></Card>
            
          </div>
          <div className='col'>
            <Card></Card>
          </div>

        </div>

      </div>
     
    </>
  )
}
