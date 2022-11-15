import React from 'react'
import mujtaba from "../component/Images/mujtaba.jpeg"
import designation from "../component/Images/designation.svg";
import address from "../component/Images/address.svg";
import email from "../component/Images/email.svg";
import phoneNo from "../component/Images/phoneNo.svg";

function ProfileCv() {
  return (
    <div >
          
          <div className="float-start card" style={{width: '18rem',height:'40rem'}}>
            <img className="card-img-top rounded-circle" src={mujtaba} alt="Cardimagecap"/>
            <h3>MUJTABA ALI</h3>
            <div className="float-start card-body">
                
                <div className='float-start d-flex'>
                <img src={designation} alt="designation" style={{width:'20px'}}></img>
                <p className='align-items-center mt-3 ms-3'><small>Software Engineer</small></p>
                </div>
                <div className='float-start d-flex'>
                <img src={address} alt="designation" style={{width:'20px'}}></img>
                <p className='align-items-center mt-3 ms-3'><small>i-10/2 ,Islamabad</small></p>
                </div>
                <div className='float-start d-flex'>
                <img src={email} alt="designation" style={{width:'20px'}}></img>
                <p className='align-items-center mt-3 ms-3'><small>mujtabaali6502gmail.com</small></p>
                </div>
                <div className='float-start d-flex'>
                <img src={phoneNo} alt="designation" style={{width:'20px'}}></img>
                <p className='align-items-center mt-3 ms-3'><small>+92-3369595769</small></p>
                </div>
                <div className='float-start'>
                <p>---------------------------------------</p>
                </div>
                
            </div>
            
            </div>
            
   
    
      

    </div>
  )
}

export default ProfileCv