import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";
import participate from "./participate";
import home from "./Assets/home.png";
import setting from "./Assets/settings.png";
import car from "./Assets/car.png";
import user from "./Assets/user.png";
import logo from "./Assets/logo.png";
import dashboard from './images/dashboardIcon.png';
import logout from './images/logoutIcon.png'; 
const incomeData = [40000, 42000, 45000, 43000, 41000, 44000, 46000, 48000, 49000, 48000, 47000, 50000];
const outcomeData = [30000, 32000, 35000, 33000, 31000, 34000, 36000, 38000, 39000, 38000, 37000, 40000];
const salesData = [25000, 30000, 35000];
const participantsData = [100, 120, 130, 110, 105];

function Dashboard() {
    const chartContainer1 = useRef(null);
    const chartInstance1 = useRef(null);
    const chartContainer2 = useRef(null);
    const chartInstance2 = useRef(null);
    const chartContainer3 = useRef(null);
    const chartInstance3 = useRef(null);

    useEffect(() => {
       const ctx1 = chartContainer1.current.getContext("2d");
       chartInstance1.current = new Chart (ctx1,{
        type:"bar",
        data:{
            labels:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets:[{
                  label: "Income",
                  data: incomeData,
                  backgroundColor: "rgb(0, 255, 255)",
                  borderColor: "rgb(0, 255, 255)",
                  borderWidth: 1
            },
            {
                label: "Outcome",
                data: outcomeData,
                backgroundColor:"blue",
                borderColor: "blue",
                borderWidth: 1

            }]
        },
        options:{
            scales:{
                y:{
                    beginAtZero: true
                }
                    
                
            }
        }
       });

        const ctx2 = chartContainer2.current.getContext("2d");
        chartInstance2.current = new Chart(ctx2, {
            type: "doughnut",
            data: {
                labels: ["Women", "Men", "Children"],
                datasets: [{
                    label: "Total Sales",
                    data: salesData,
                    backgroundColor: ["rgb(40, 40, 214)", "rgb(0, 255, 255)", "rgb(140, 0, 255)"]
                }]
            },
            options: {
                cutout: "60%",
                plugins: {
                    legend: {
                        position: "right"
                    }
                }
            }
        });

        const ctx3 = chartContainer3.current.getContext("2d");
        chartInstance3.current = new Chart(ctx3, {
            type: "bar",
            data: {
                labels: ["January", "February", "March", "April", "May"],
                datasets: [{
                    label: "Total Participants",
                    data: participantsData,
                    backgroundColor: "rgb(0, 255, 255)",
                    borderColor: "rgb(0, 255, 255)",
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

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
        <>
            <div className="nav">
                <img src={logo} alt="logo" className="logo"></img>
                <button className="signIn">Sign In</button>
                <button>Sign Up</button>
            </div>
            <div className="dashboard">
                <div className="sideNav">
                 <div className="sideNavContent">
                 <div><img src={home} alt="home"></img></div>
                 
                 <div><img src={car} alt="car"></img></div>
                 <div><img src={dashboard} alt="dashboard"></img></div>
                 <div><img src={user} alt="user"></img></div>
                 
                 <div><img src={setting} alt="setting"></img></div>
                 <div><img src={logout} alt="setting"></img></div>
                 </div>
                
                </div>
                <div className="right">
                    <div className="numberOfParticipants">
                        <h3>Total Participants</h3>
                        <div className="totalParticipantsChart">
                            <canvas ref={chartContainer3} id="totalParticipantsChart"/>
                        </div>
                    </div>
                <div className="participate">
                    <ul>
                       <li><Link to="/">See all</Link></li>
                    </ul>
                <h3>Participants</h3>
                   {participate.slice(0, 4).map((participant) => (
                    <div key={participant.id}>
                    <img src={participant.image} alt={participant.name} />
                    <h4>{participant.name}</h4>
                    <p>{participant.email}</p>
                    </div>
                    ))}
                   </div>
                </div>
<div className="middle">
<h1>Business overview</h1>
<div className="overallSales">
<h3 >Overall Sales</h3>
<div className="incomeOutcomeChart">
<canvas ref={chartContainer1} id="incomeOutcomeChart" />
</div>
</div>
</div>
<div className="left">
<div className="totalSales">
<h3>Sales Distribution</h3>
<canvas ref={chartContainer2} id="salesDistributionChart" className="salesDistributionChart"/>
</div>
<div className="years"><h1 style={{color:"var(--color4)" ,textAlign:"center",fontSize:"50px",position:"relative",top:"20px"}}>25</h1><br></br><h2 style={{color:"white",textAlign:"center",marginTop:"-35px"}}>years of experience</h2></div>
<div className="total"><h1 style={{color:"var(--color4)" ,textAlign:"center",fontSize:"50px",position:"relative",top:"20px"}}>2315</h1><br></br><h2 style={{color:"white",textAlign:"center",marginTop:"-35px"}}>Car has been rented</h2></div>
</div>
</div>
</>
);
}

export default Dashboard;

  