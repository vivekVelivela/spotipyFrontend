import React from 'react';
import '../App.css';
import { useState } from 'react';
import BarChart from './BarChart';
import { playlist_followers } from './Data'
import { track_details } from './Data'
import { track_popularity } from "./Data";
import { artist_popularity } from "./Data";
import { country } from './Data';
import Grid from '@mui/material/Grid'; // Grid version 1
import LineChart from './LineChart'
import HorizontalBarChart from './HorizontalBarChart'




function Dashboard(){
  const [PlaylistFollowers] = useState({
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


  var str = 'The below graphs represents TOP 10' + {country} + 'spotify featured playlists with highest number of followers along with TOP 10 popular artists and popular tracks from those respective playlists.'
  const [trackPopularity] = useState({
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

  const [artistPopularity] = useState({
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


  const [trackDetails] = useState({
    labels:track_details.map((data)=> data.track_name),
    datasets: [{
      label: "danceability",
      data: track_details.map((data) => data.danceability),
      backgroundColor: ['rgba(255, 99, 132, 0.2)','rgba(255, 159, 64, 0.2)','rgba(255, 205, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(54, 162, 235, 0.2)','rgba(153, 102, 255, 0.2)','rgba(201, 203, 207, 0.2)','rgba(200, 92, 92, 0.2)','rgba(30, 162, 35, 0.2)','rgba(13, 202, 255, 0.2)','rgba(201, 3, 207, 0.2)','rgba(31, 203, 202, 0.2)'],
      fill: true,
      borderColor: ['rgb(255, 99, 132)','rgb(255, 159, 64)','rgb(255, 205, 86)','rgb(75, 192, 192)','rgb(54, 162, 235)','rgb(153, 102, 255)','rgb(101, 3, 107)','rgb(255, 99, 132)','rgb(30, 162, 35)','rgb(21, 203, 207)','rgb(231, 103, 202)','rgb(13, 202, 255)'],
      borderWidth: 1,
    },
    {
      label: "Energy",
      data: track_details.map((data) => data.energy),
      backgroundColor: ['rgba(255, 99, 132, 0.2)','rgba(255, 159, 64, 0.2)','rgba(255, 205, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(54, 162, 235, 0.2)','rgba(153, 102, 255, 0.2)','rgba(201, 203, 207, 0.2)','rgba(200, 92, 92, 0.2)','rgba(30, 162, 35, 0.2)','rgba(13, 202, 255, 0.2)','rgba(201, 3, 207, 0.2)','rgba(31, 203, 202, 0.2)'],
      fill: true,
      borderColor: ['rgb(255, 99, 132)','rgb(255, 159, 64)','rgb(255, 205, 86)','rgb(75, 192, 192)','rgb(54, 162, 235)','rgb(153, 102, 255)','rgb(101, 3, 107)','rgb(255, 99, 132)','rgb(30, 162, 35)','rgb(21, 203, 207)','rgb(231, 103, 202)','rgb(13, 202, 255)'],
      borderWidth: 1,
    }
  ]
  });
  const artistPopularityStyle = 
    {
      responsive:true,
      scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {title: {
    display: true,
    align: 'centre',
    text: 'Artist Popularity',
    font: {
      size: 25
    }
}}
}
  
  const trackDetailsStyle = 
    {
      responsive:true,
      scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {title: {
    display: true,
    align: 'centre',
    text: 'Track Details',
    font: {
      size: 25
    }
}}
}
  return(
    
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2}} alignItems="stretch" id = "place-to-visit">
          <Grid item xs={12} m = {3} style={{  backgroundColor: '#ecf0f1' }} className = 'box-shadow-md'>
          <p style={{ color: "black", margin:10 , fontFamily: 'Nunito', textAlign: 'center'}}>The below graphs represents TOP 10 {country} spotify featured playlists with highest number of followers along with TOP 10 popular artists and popular tracks from those respective playlists.</p>
            </Grid>
          <Grid item xs={12} md ={6} m = {0} style={{  backgroundColor: '#ecf0f1' }} className = 'box-shadow-md'>
            <BarChart chartData={PlaylistFollowers} />
            </Grid>
            <Grid item xs={12} md ={6} m = {0} style={{  backgroundColor: '#ecf0f1' }} className = 'box-shadow-md'>
            <HorizontalBarChart chartData={trackPopularity} />
            </Grid> 
            <Grid item xs={12} md ={6} m = {0} style={{  backgroundColor: '#ecf0f1' }} className = 'box-shadow-md'>
            <LineChart chartData={artistPopularity} options ={artistPopularityStyle}/>
            </Grid> 
            <Grid item xs={12} md ={6} m = {0} style={{  backgroundColor: '#ecf0f1' }} className = 'box-shadow-md'>
            <LineChart chartData={trackDetails}  options = {trackDetailsStyle}/>
            </Grid>  
        </Grid>
        
        


   
    
  )
}

export default Dashboard;