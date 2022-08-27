import React from 'react';
// import './App.css';
import { useState } from 'react';
import {Navbar} from ".//Navbar/Navbar"
import BarChart from './/BarChart';
import { playlist_followers } from './/Data'
function Main(){
  const [playlist_followers] = useState({
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
      <BarChart chartData={playlist_followers}/>
      </div>
    </div>
  )
}

export default Main;