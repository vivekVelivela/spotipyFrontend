import React from 'react';
import '../App.css';
import { useState } from 'react';
import BarChart from './BarChart';
import { playlist_followers } from './Data'
import { shadows } from '@mui/system';
import { track_popularity } from "./Data";
import { artist_popularity } from "./Data";
import Grid from '@mui/material/Grid'; // Grid version 1
import LineChart from './LineChart'
import PieChart from './PieChart';
import HorizontalBarChart from './HorizontalBarChart'




function Dashboard(){
  const [UserData] = useState({
    labels:playlist_followers.map((data)=> data.name),
    datasets: [{
      label: "Followers",
      data: playlist_followers.map((data) => data.followers),
      backgroundColor: [
        "rgba(75,192,192,0.5)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      fill: false,
      borderColor: "white",
      borderWidth: 1,
    },
  ],
  });


  const [UserData1] = useState({
    labels:track_popularity.map((data)=> data.track),
    datasets: [{
      label: "popularity",
      data: track_popularity.map((data) => data.popularity),
      backgroundColor: ['rgba(255, 99, 132, 0.2)','rgba(255, 159, 64, 0.2)','rgba(255, 205, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(54, 162, 235, 0.2)','rgba(153, 102, 255, 0.2)','rgba(201, 203, 207, 0.2)','rgba(200, 92, 92, 0.2)','rgba(30, 162, 35, 0.2)','rgba(13, 202, 255, 0.2)','rgba(201, 3, 207, 0.2)','rgba(31, 203, 202, 0.2)'],
      fill: true,
      borderColor: ['rgb(255, 99, 132)','rgb(255, 159, 64)','rgb(255, 205, 86)','rgb(75, 192, 192)','rgb(54, 162, 235)','rgb(153, 102, 255)','rgb(101, 3, 107)','rgb(255, 99, 132)','rgb(30, 162, 35)','rgb(21, 203, 207)','rgb(231, 103, 202)','rgb(13, 202, 255)'],
      borderWidth: 1,
    },
  ],
  });

  const [UserData2] = useState({
    labels:artist_popularity.map((data)=> data.name),
    datasets: [{
      label: "popularity",
      data: artist_popularity.map((data) => data.popularity),
      backgroundColor: ['rgba(255, 99, 132, 0.2)','rgba(255, 159, 64, 0.2)','rgba(255, 205, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(54, 162, 235, 0.2)','rgba(153, 102, 255, 0.2)','rgba(201, 203, 207, 0.2)','rgba(200, 92, 92, 0.2)','rgba(30, 162, 35, 0.2)','rgba(13, 202, 255, 0.2)','rgba(201, 3, 207, 0.2)','rgba(31, 203, 202, 0.2)'],
      fill: true,
      borderColor: ['rgb(255, 99, 132)','rgb(255, 159, 64)','rgb(255, 205, 86)','rgb(75, 192, 192)','rgb(54, 162, 235)','rgb(153, 102, 255)','rgb(101, 3, 107)','rgb(255, 99, 132)','rgb(30, 162, 35)','rgb(21, 203, 207)','rgb(231, 103, 202)','rgb(13, 202, 255)'],
      borderWidth: 1,
    },
  ],
  });
  return(
    
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2}} alignItems="stretch" id = "place-to-visit">
          <Grid item xs={12} m = {3} style={{  backgroundColor: '#ecf0f1' }} className = 'box-shadow-md'>
          <p style={{ color: "black", margin:10 , fontFamily: 'Nunito', textAlign: 'center'}}>The below graphs represents
           TOP 10 US spotify featured playlists with highest number of followers along with TOP 10 popular artists and popular tracks from those respective playlists.</p>
            </Grid>
          <Grid item xs={6} m = {0} style={{  backgroundColor: '#ecf0f1' }} className = 'box-shadow-md'>
            <BarChart chartData={UserData} />
            </Grid>
            <Grid item xs={6} m = {0} style={{  backgroundColor: '#ecf0f1' }} className = 'box-shadow-md'>
            <HorizontalBarChart chartData={UserData1} />
            </Grid> 
            <Grid item xs={6} m = {0} style={{  backgroundColor: '#ecf0f1' }} className = 'box-shadow-md'>
            <LineChart chartData={UserData2} />
            </Grid>  
        </Grid>
        
        


   
    
  )
}

export default Dashboard;