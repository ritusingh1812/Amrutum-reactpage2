import React from 'react'

export default function Card() {
  return (
    <>
      <div className='my-card position-relative'>
        
          <img className="position-absolute"style={{width:"160px",height:"150px",borderRadius:"50%", left:"100px",top:"20px"}}src='https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRkxIUxyvW2RatMzBt~P6NZo1YRjHdFXOzZmnEF0Sfzp0JQrIokQJJBqtA~FMDouN0H2v4y42oqp--x1XueS4SOeBCZ4eAMq9-bU9fyhAmZ83lbN0nCzMasn5rqC40xuBIPcd8EoguUSlVNhqAx-27Lix9d4bbx4cf28MeD0zD~INTfEgcQNEn5ZeTyq-c8z0seXwA1rHimsyeUQDOr60~iUsmNLQxJS1zeH1LHnY5~5jZiFpYzAmapv6y5jhPERcbVkbQ3qXlsVpePFBDRoYgXUsvJXGXcbVTJsakGF-ZUuArOus6RBJXahlKmpyOmjm-htXMpmFTl1xHEXGLC1Ig__' alt="dp"></img><span className="badge rounded-pill bg-dark position-absolute" style={{top:"160px",left:"165px"}}>4.5 <span class="fa fa-star checked" style={{color:"#FFC72C"}}></span></span>
          <h3 className='position-absolute' style={{top:"190px",left:"70px"}}> Dr. Prerna Narang </h3>
          <div className='container position-absolute' style={{top:"240px",left:"70px"}}>
            <div className='row'>
              <p className='fs-7' style={{color:"gray"}}>🩹 Male-Female Infertility<br></br>

              🎓 7 years of Experience <br></br>

              💬Speaks: English, Hindi, Marathi</p>
            </div>
            <div className='row'>
              <div className='d-flex flex-row'>
              <div className='fee-slot text-center'>Video Consultation <p className='text-success fw-bold'> ₹ 800</p></div> 
              <div className='fee-slot text-center'>Chat Consultation <p className='text-success fw-bold'>Free</p></div> 
                           </div>
              
              
            </div>
            <div class="d-grid gap-2 row" style={{marginTop:"8px"}}>
            <button className="btn btn-md btn-outline-success" style={{width:"260px",backgroundColor:"white"}} type="button">View Profile</button>
  <button className="btn btn-md" style={{width:"260px",backgroundColor:"rgba(58, 100, 59, 1)",color:"white"}}type="button">Make an Appointment</button>

  </div>
          </div>

      </div>
    </>
  )
}
