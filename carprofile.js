import React, { useState } from "react";
import logo from "./Assets/logo.png";
import car1 from './Assets/car1.png';
import carBehind1 from './Assets/carBehind1.jpg';
import carDash1 from './Assets/carDash1.jpg';
import carSide1 from './Assets/carSide1.jpg';
import carColor1 from './Assets/carColor1.png';
import profile1 from './Assets/profile1.jpg';
import profile2 from './Assets/profile2.jpg';
import carWperson from './Assets/carWperson1.jpg';
import carWperson2 from './Assets/carWperson2.jpg';
export default function CarProfile() {
   
    
    const [mainCarImage, setMainCarImage] = useState(car1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dashColor, setDashColor] = useState("green");
    const moreImages = [carSide1, carBehind1, carDash1,carWperson,carWperson2];
    const colors = ["brown", "red", "blue", 'green'];

    const Next = () => {
        const nextIndex = (currentIndex + 1) % moreImages.length;
        setCurrentIndex(nextIndex);
    }

    const previous = () => {
        const previousIndex = (currentIndex - 1 + moreImages.length) % moreImages.length;
        setCurrentIndex(previousIndex);
    }

    const changeToRedColor = () => {
        setMainCarImage(carColor1);
    }

    const changeToBlueColor = () => {
        setMainCarImage(car1);
    }

   

    return (
        <>
            <div className="nav">
                <img src={logo} alt="logo" className="logo" />
                <button className="signIn">Sign In</button>
                <button>Sign Up</button>
            </div>
            <div className="carProfile">
                
                <div className="carProfileContent">
    
                    <div className="car1">
                       
                        <div className="carImage">
                            
                            <img
                                src={mainCarImage}
                                alt="car"
                                
                            />
                        </div>
                        <div className="car1Content">
                        <h1>Toyota Camry</h1>
                           
                            <button style={{ backgroundColor: "green" }} className="colorButton"></button>
                            <button style={{ backgroundColor: "red" }} onClick={changeToRedColor} className="colorButton" ></button>
                            <button style={{ backgroundColor: "var(color1)" }} onClick={changeToBlueColor} className="colorButton" ></button>
                            
                            <p>9500 $</p>
                            <button className="rentNowButton">Rent Now</button>
                        </div>
                    </div>
                </div>
                
                <div className="moreImages">
                    <button onClick={previous} >&lt;</button>
                    {[0, 1, 2].map((index) => (
                        <span key={index}>
                            <img src={moreImages[(currentIndex + index) % moreImages.length]} alt="car" />
                        </span>
                    ))}
                    <button onClick={Next} style={{marginLeft:"-1px"}}>&gt;</button>
                </div>
                <div className="carInfo" style={{ overflowY: "auto", height: "300px",width:"675px" }} >
                    <img src={carDash1} alt="carDash"/>
                                 
                    <div className="carDashColors" style={{ backgroundColor: dashColor }}></div>
                </div>

                <div className="customerReview">
                    <h2 style={{color:"var(--color5)" , textAlign:"center",marginBottom:"40px", marginLeft:"120px"}}>Customer Review</h2>
                    <div className="profile">
                        <span><img src={profile1} alt="profile"></img></span>
                        <span>
                            <h3>john doe</h3>
                            <p>The Toyota Camry continues to be a top choice in the midsize sedan segment,
                                <br /> thanks to its combination of reliability, comfort, and value.<br />
                                Whether you're looking for a practical family car or a comfortable commuter,
                                <br />the Camry delivers on all fronts, making it a solid choice for any buyer.</p>
                        </span>
                    </div>
                    <div className="profile">
                        <span><img src={profile2} alt="profile2"></img></span>
                        <span>
                            <h3>martina</h3>
                            <p>One of the key reasons people choose the Camry is its reputation for reliability.
                                <br /> thanks to its combination of reliability, comfort, and value.<br />
                                Whether you're looking for a practical family car or a comfortable commuter,
                                <br />the Camry delivers on all fronts, making it a solid choice for any buyer.</p>
                        </span>
                    </div>
                    <div className="profile">
                        <span><img src={profile1} alt="profile"></img></span>
                        <span>
                            <h3>Samuel Ramzy</h3>
                            <p>The Toyota Camry continues to be a top choice in the midsize sedan segment,
                                <br /> thanks to its combination of reliability, comfort, and value.<br />
                                Whether you're looking for a practical family car or a comfortable commuter,
                                <br />the Camry delivers on all fronts, making it a solid choice for any buyer.</p>
                        </span>
                    </div>
                    <div className="profile">
                        <span><img src={profile1} alt="profile"></img></span>
                        <span>
                            <h3>mariam samuel</h3>
                            <p>The Toyota Camry continues to be a top choice in the midsize sedan segment,
                                <br /> thanks to its combination of reliability, comfort, and value.<br />
                                Whether you're looking for a practical family car or a comfortable commuter,
                                <br />the Camry delivers on all fronts, making it a solid choice for any buyer.</p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
