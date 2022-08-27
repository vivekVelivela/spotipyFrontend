import React from 'react';
// import './App.css';
import { useState } from 'react';
import {Navbar} from ".//Navbar/Navbar"
import BarChart from './/BarChart';
import { userData } from './/Data'
function Main(){
  const [userData] = useState({
    labels:userData.map((data)=> data.name),
    datasets: [{
      label: "Users Gained",
      data: userData.map((data) => data.followers)
    }]
  })

  return(
    <div className='Main'>
      <Navbar></Navbar>
      <div style={{width: 700}}>
      <BarChart chartData={userData}/>
      </div>
    </div>
  )
}

export default Main;