import React from 'react';
import '../App.css';
import { useState } from 'react';
import {Navbar} from ".//Navbar/Navbar";
import BarChart from './/BarChart';
import { playlist_followers } from './/Data'
import { track_popularity } from ".//Data";
function Main(){
  const [UserData] = useState({
    labels:playlist_followers.map((data)=> data.name),
    datasets: [{
      label: "Followers",
      data: playlist_followers.map((data) => data.followers)
    }]
  })

  return(
    <div className='Main'>
      <Navbar></Navbar>
      <div style={{width: 700}}>
      <BarChart chartData={UserData}/>
      </div>
    </div>
  )
}

export default Main;