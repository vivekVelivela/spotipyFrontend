import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// import '../App.css';
export default function Footer(props) {
  
  return (
    <footer>
      <Container maxWidth="lg" style={{  backgroundColor: 'black' ,padding: '9px'}} className = 'box-shadow-md'>
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center" style={{  display: "flex", justifyContent: "space-between"}}>
          <Link underline="none" style={{ color: "white", margin:10 , fontFamily: 'Nunito', textAlign: 'center',wordSpacing: '3px', padding: '2px'}}>
            Spotify Visualisation
            <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false} style={{ color: "white", margin:10 , fontFamily: 'Nunito', textAlign: 'center'}}>
              by Vivek Velivela
              </Typography>
          </Link>
          <Link href='https://www.linkedin.com/in/vivek1999' underline="none" style={{ color: "white", margin:10 , fontFamily: 'Nunito', textAlign: 'center',wordSpacing: '3px', padding: '2px'}}>
            LinkedIn
            <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false} style={{ color: "white", margin:10 , fontFamily: 'Nunito', textAlign: 'center'}}>
              Vivek Velivela
              </Typography>
          </Link>
          <Link href= 'https://www.facebook.com/velivelavivek/' underline="none" style={{ color: "white", margin:10 , fontFamily: 'Nunito', textAlign: 'center',wordSpacing: '3px', padding: '2px'}}>
            Facebook
            <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false} style={{ color: "white", margin:10 , fontFamily: 'Nunito', textAlign: 'center'}}>
              Vivek Velivela
              </Typography>
          </Link>
          <Link href= 'https://www.instagram.com/vii_ve_ek/' underline="none" style={{ color: "white", margin:10 , fontFamily: 'Nunito', textAlign: 'center',wordSpacing: '3px', padding: '2px'}}>
            Instagram
            <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false} style={{ color: "white", margin:10 , fontFamily: 'Nunito', textAlign: 'center'}}>
              Vivek Velivela
              </Typography>
          </Link>
          <Link href= 'https://github.com/vivekVelivela' underline="none" style={{ color: "white", margin:10 , fontFamily: 'Nunito', textAlign: 'center',wordSpacing: '3px', padding: '2px'}}>
            GitHub
            <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false} style={{ color: "white", margin:10 , fontFamily: 'Nunito', textAlign: 'center'}}>
              Vivek Velivela
              </Typography>
          </Link>
        </Box>
      </Container>
    </footer>
  );
}