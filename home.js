import React,{useEffect} from "react";
import logo from "./Assets/logo.png";
import background from './Assets/background1.png';
import mark3 from './Assets/mark3.png';
import mark7 from './Assets/mark7.png';
import newCar from './Assets/newCar.png';
import blueCar from './Assets/blueCar.png';
import blueEye from './Assets/blueEye.png';
import "./home.css"; 
import { Link } from "react-router-dom";
export default function Home() {
 
    useEffect(() => {
      const eyes = document.querySelectorAll(".eye");
      
      document.onmousemove = (event) => {
         const mouseX = event.clientX;
         const mouseY = event.clientY;
         
         eyes.forEach((eye) => {
            const eyeRect = eye.getBoundingClientRect();
            const eyeX = eyeRect.left + eyeRect.width/2;
            const eyeY = eyeRect.top + eyeRect.height/2;
            const deltaX = mouseX - eyeX;
            const deltaY = mouseY - eyeY;
            const angle = Math.atan2(deltaY, deltaX);
            const distance = Math.min(25, Math.hypot(deltaX, deltaY));
            const offsetX = distance * Math.cos(angle);
            const offsetY = distance * Math.sin(angle);

            eye.querySelector(".ball").style.transform = `translate(${offsetX}px, ${offsetY}px)`;
         });
      };
   }, []);
   


    return (
        <>
            <div className="nav" style={{ position:"relative",zIndex: 1 }}>
                <img src={logo} alt="logo" className="logo" />
                <button className="signIn">Sign In</button>
                <button>Sign Up</button>
            </div>
            <div className="home">
                <div className="homeContent">
                    <h1>Welcome to JAGUAR Website <br />Book cars in Easy Steps</h1>
                    <h5>Take your time to pick the perfect car for you, and enjoy the flexibility<br /> of paying in installments that suit your budget and lifestyle</h5>
                    <Link to="/Cars"><button>Book your perfect car</button></Link>
                    <img src={background} alt="background" className="background" />
                </div>
                <div className="marks">
                    <div><img src={mark3} alt="mark3" /></div>
                    <div><img src={mark7} alt="mark7" /></div>
                    <div><img src={mark3} alt="mark3" /></div>
                    <div><img src={mark7} alt="mark7" /></div>
                    <div><img src={mark3} alt="mark3" /></div>
                    <div><img src={mark7} alt="mark7" /></div>
                    <div><img src={mark3} alt="mark3" /></div>
                    <div><img src={mark7} alt="mark7" /></div>
                </div>
                <div className="latest">
                    <h1>Latest Model</h1>
                    <img src={newCar} alt="newCar" className="newCar" />
                    <div className="information">
                        <h4>Power</h4>
                        <div className="first"><div className="second"> <div className="power"><h2>300HP</h2></div></div></div>
                        <h4>Engine</h4>
                        <div className="first"><div className="second"> <div className="engine"><h2>500V8</h2></div></div></div>
                        <h4>Price</h4>
                        <div className="first"> <div className="second"><div className="price"><h2>500$</h2></div></div></div>
                    </div>
                </div>
                <div className="siteOverview">
                    <ul>
                        <li>
                           
                           <h1>2000</h1><br></br>
                           <p> Happy customers</p>
                        </li>
                        <li>
                            <h1>3000</h1><br></br>
                            <p> Rents</p>
                        </li>
                        <li>
                            <h1>10</h1><br></br>
                            <p> Years of experience</p>
                        </li>
                    </ul>

                </div>
                <div className="animation" >
                    <h1>Learn more about JAGUAR</h1>
                    <ul>
                    <li><div className="service" ><h2>Services</h2></div></li>
                    <li><div className="about"><h2>About Us</h2></div></li>
                    <li> <div className="contact"><h2>Contact Us</h2></div></li>
                    <li> <div className="review"><h2>JAGUAR's Review</h2></div></li>
                </ul>
                     <img src={blueCar} alt="blueCar" className="blueCar"/>
                     <div className="twoEyes">
                     <div className="eye" style={{height:"63px",width:"63px"}}>
                            <img src={blueEye} alt="blueEye" className="ball"/>
                        </div>
                     <div className="eye" style={{height:"63px",width:"63px"}} >
                            <img src={blueEye} alt="blueEye" className="ball"/>
                        </div>
                        </div> 
                </div>
               
            </div>
            <footer>
                <p>© 2023 JAGUAR. All rights reserved</p>
            </footer>
        </>
    );
}

