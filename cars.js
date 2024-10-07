import React from "react";
import logo from "./Assets/logo.png";

import data from "./data";
import wallpaper from "./Assets/wallpaper.jpg";
import { Link } from "react-router-dom";
export default function Cars(){
    return(
        <>
        <div className="nav">
        <img src={logo} alt="logo" className="logo"></img>
        <button className="signIn">Sign In</button>
        <button>Sign Up</button>
       </div>
       <div className="cars">
       
        <div className="mainContent" >
            <div className="wallpaper">
          <img src={wallpaper} alt ="wallpaper"></img>
          
            
             <input type="search" placeholder="Search For Your Dream Car..." className="search"></input>
           
        
          </div>
        <div className="carsContent" >
            <div className="information">
                <div className="informationContent">
                <h2>Summary</h2>
                <h4>Service Type</h4>
                <p>Hourly</p>
                <p>------------------------</p>
                <h4>Location</h4>
                <p>Maghagha,Minia</p>
                <p>------------------------</p>
                <h4>Opening Time</h4>
                <p>from 10am to 6pm</p>
                <p>------------------------</p>
                <h4>Total Distance</h4>
                <p>100km</p>
                
                </div>

               
            </div>
        <div>
    {
        data.map((item) => (
            <div key={item.id}>
                <div className="carContent">
                <img src={item.image} alt="car" />
                <span >
                <p >{item.name}</p>
                <h1>{item.price} $</h1>
                <p style={{marginLeft:"-110px",fontSize:"15px"}}>view details <span className="viewDetails">⬇</span></p>
                </span>
              <Link to="./CarProfile"><button>Book Now</button></Link>  
                </div>
                <p className="line">-------------------------------------------------------------------------------</p>
            </div>
        ))

    }
    </div>
</div>
</div>
       
      </div>
      
       </> 
    )
}