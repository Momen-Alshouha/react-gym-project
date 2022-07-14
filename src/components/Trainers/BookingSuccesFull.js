import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function BookingSuccesFull() {
    const navigate=useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (!user) {
            localStorage.setItem('prevUrl',window.location.pathname)
                navigate('/login');    
          }
           
          });
    })
  return (
    
      <div
      style={{
        
         
          height:'100vh',
          width:'100vw',
          display:'flex',
          justifyContent:'center',
          alignContent:'center',
          position:'relative',
          overflowX:'hidden',
         
          
    
          
      }
          
      }>
          <div style={{
              marginTop:'30vh',
              textAlign:'center',
              backgroundColor:'rgba(250,250,250,0.4)',
              height:'30vh',
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              padding:'0rem 2rem',
              zIndex:'100'
          }}>
          <h1>Your booking is done successfully</h1>
          <Link
            style={{color:'black',
            textDecoration:'underline',
        }}
           to="/home">return the Home page</Link>
          </div>
          <img 
          src="assets/images/gallery/5.image.jpg" alt="" 
          style={{
            opacity:'0.4',
            position:'absolute',
            top:'50%',
            left:'50%',
            zIndex:'4',
            transform: 'translate(-50%,-50%)',
            width:'90vw',
            height:'100vh'

          }}
          />
        
           
        

      </div>
     
    
  )
}
