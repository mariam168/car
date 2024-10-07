import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import home from './images/homeIcon.png';
import dashboard from './images/dashboardIcon.png';
import message from './images/messageIcon.png';
import logout from './images/logoutIcon.png';
import messenger from './images/messenger.png';
import notification from './images/notification.png';
import carton1 from './images/carton1.png';
import carton2 from './images/carton2.png';
import carton3 from './images/carton3.png';
import carton4 from './images/carton4.png';
import carton5 from './images/carton5.png';

const salesData = [25000, 30000, 35000];
const incomeData = [ 35000, 34000, 34000, 34000, 34000,34200,34250,34300,34350,34400,34450,34500 ];
const outcomeData = [ 34000, 35000, 35000, 35000, 33000,33050,33100,33150,33200,33250,33300,33350 ];
const activityData = [600, 300];

export default function Carton() {
    const chartContainer1 = useRef(null);
    const chartInstance1 = useRef(null);
    const chartContainer2 = useRef(null);
    const chartInstance2 = useRef(null);
    const chartContainer3 = useRef(null);
    const chartInstance3 = useRef(null);

    useEffect(() => {
        if (chartContainer1.current && chartContainer2.current && chartContainer3.current) {
            const ctx1 = chartContainer1.current.getContext("2d");
            chartInstance1.current = new Chart(ctx1, {
                type: "line",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    datasets: [
                        {
                            label: "Income",
                            data: incomeData,
                            backgroundColor: "rgb(0, 255, 255)",
                            borderColor: "rgb(0, 255, 255)",
                            borderWidth: 1,
                        
                            
                        },
                        {
                            label: "Outcome",
                            data: outcomeData,
                            backgroundColor: "blue",
                            borderColor: "blue",
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false, 
                    responsive: true,
                    height: 100 
                }
                
              
            });

            const ctx2 = chartContainer2.current.getContext("2d");
            chartInstance2.current = new Chart(ctx2, {
                type: "doughnut",
                data: {
                    labels: ["romance", "fun", "adventure"],
                    datasets: [
                        {
                            label: "Total Sales",
                            data: salesData,
                            backgroundColor: ["rgb(40, 40, 214)", "rgb(0, 255, 255)", "rgb(140, 0, 255)"]
                        }
                    ]
                },
                options: {
                    cutout: "70%",
                    plugins: {
                        legend: {
                            position: "right"
                        }
                    }
                }
            });

            const ctx3 = chartContainer3.current.getContext("2d");
            chartInstance3.current = new Chart(ctx3, {
                type:"pie",
                data: {
                    
                    datasets: [
                        {
                            label: "Recent Activity",
                            data: activityData,
                            backgroundColor: ["rgb(0, 255, 255)", "rgb(140, 0, 255)"]
                        }
                    ]
                }
            });
        }
        return () => {
            if (chartInstance1.current !== null) {
                chartInstance1.current.destroy();
            }
            if (chartInstance2.current !== null) {
                chartInstance2.current.destroy();
            }
            if (chartInstance3.current !== null) {
                chartInstance3.current.destroy();
            }
        };
    }, []);

    return (
        <div className="car">
            <aside>
                <ul>
                    <li><img src={home} alt="home" /></li>
                    <li><img src={dashboard} alt="dashboard" /></li>
                    <li><img src={message} alt="message" /></li>
                    <li><img src={logout} alt="logout" /></li>
                </ul>
            </aside>
            <div className="carContent">
                <nav>
                    <h1>Dashboard</h1>
                    <input type="search" placeholder="Search...." />
                    <img src={notification} alt="notification" style={{ marginLeft: "290px",width:"50px",height:"50px",marginTop:"25px" }} />
                    <img src={messenger} alt="messenger" style={{marginTop:"28px"}} />
                    <button style={{marginTop:"28px"}}>SIGN In</button>
                    <button style={{marginTop:"28px"}} >SIGN up</button>
                </nav>
                <div className="carton">
                    <div style={{backgroundColor:"rgba(62, 9, 112, 0.849)"}}>
                        <h3 style={{textAlign:"center",color:"white"}}>seller categories</h3>
                    <div className="canvas1">
                        <canvas ref={chartContainer2}  />
                    </div>
                    </div>
                    <div style={{marginTop:"-20px"}}>
                        <h3 style={{marginLeft:"20px",color:"white"}}>Best Selling Stories</h3>
                    <div className="cartons">
                        <div><img src={carton1} alt="carton1" /><h5>ANGEL Queen</h5></div>
                        <div><img src={carton2} alt="carton2" /><h5>Tweet's stories</h5></div>
                        <div><img src={carton3} alt="carton3" /><h5>Sonic's Adventure</h5></div>
                        <div><img src={carton4} alt="carton4" /><h5>Mr Beans</h5></div>
                        <div><img src={carton5} alt="carton5" /><h5>Dor's diary</h5></div>
                    </div>
                    </div>
                </div>
                <div className="down" style={{overflow:"hidden"}}>
                    <div style={{backgroundColor:"rgba(62, 9, 112, 0.849)",height:"250px"}}>
                        <h3 style={{marginLeft:"50px",color:"white"}}>Analytics</h3>
                    <div className="analytics">
                    
                        <canvas ref={chartContainer1}  />
                    </div>
                    </div>
                    <div className="sales">
                        <h3 style={{textAlign:"center",color:"white"}}>Recent Activity</h3>
                        <div className="activity">
                            <span className="likes" style={{ background: "rgb(0, 255, 255)" }}><h5 style={{textAlign:"center",marginTop:"10px"}}>600 <br />Likes</h5></span>
                            <span className="subscribe" style={{ background: "rgb(140, 0, 255)" }}><h5 style={{textAlign:"center",marginTop:"10px"}}>300 <br />Subscribe</h5></span>
                        </div>
                        < div className="canvas3">
                        <canvas ref={chartContainer3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
