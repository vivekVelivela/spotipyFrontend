import React from 'react';
// import './App.css';
import { useState } from 'react';
import {Navbar} from ".//Navbar/Navbar"
import BarChart from './/BarChart';
import {UserData} from './/Data'
function Main(){
  const [userData] = useState({
    labels:UserData.map((data)=> data.name),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.followers)
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