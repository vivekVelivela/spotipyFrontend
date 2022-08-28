import React from 'react';
import '../App.css';
import { useState } from 'react';
import {Navbar} from ".//Navbar/Navbar";
import BarChart from './/BarChart';
import { playlist_followers } from './/Data'
import { track_popularity } from ".//Data";
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

function Main(){
  const [UserData] = useState({
    labels:playlist_followers.map((data)=> data.name),
    datasets: [{
      label: "Followers",
      data: playlist_followers.map((data) => data.followers),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "white",
      borderWidth: 1,
    },
  ],
  });
  

  return(
    
    <div className='background-red'>
      <Navbar></Navbar>
      <Grid >
        <Grid className = 'container'>
        {/* <div className='BarChart'> */}
          <BarChart chartData={UserData} />
        {/* </div> */}
        </Grid>
        <Grid>
          <BarChart chartData={UserData}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Main;