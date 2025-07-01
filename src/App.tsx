import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Stack, Pagination, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'
import Joakim from "./static/joakim.jpg";
import Snusdosa from "./static/projects/snusdosa.jpg";
import Svampjakt from "./static/projects/svampjakt.jpg";
import Textwatch from "./static/projects/Textklocka.jpg";
import Kontor from "./static/kontor.jpeg";
import { Linkedin, GitHub, Mail } from 'react-feather';
import './App.css';



const theme = createTheme({
  typography: {
    // Default fontSize (mobile-first)
    fontSize: 12,
  },
});

theme.typography.h1 = {
  fontSize: '1.3rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

theme.typography.h5 = {
  fontSize: '1.3rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};



export default function BasicGrid() {

  const isMobile = useMediaQuery('(max-width: 600px)');

  const AboutMe = () => {

    console.log(isMobile)
    if (isMobile) {
      return (
        <Box sx={{ padding: 2, borderBottom: '1px solid #ccc' }}>
          <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 1, color: "#444" }}>Om mig</Typography>
          <Typography component={'p'} sx={{ marginBottom: 2 }}>Jag är en passionerad systemutvecklare från Sverige, som sysslar mycket med embedded och andra roliga saker.</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}><img src={Joakim} style={{ width: "100%", borderRadius: 10, marginBottom: 10 }}></img></Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}><img src={Kontor} style={{ width: "100%", borderRadius: 10 }}></img></Box>
          <Typography component={'p'}>Jag gör gärna både mjukvara och hårdvara på fritiden.</Typography>
        </Box>
      )
    } else {
      return (
        <Grid container spacing={0}>
          <Grid size={2} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', backgroundColor: '#cee2eb' }}>
          </Grid>
          <Grid size={2.5} sx={{
            padding: 6, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', position: "relative"
          }}>
            <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 1, color: "#444" }}>Om mig</Typography>
            <Typography component={'p'} sx={{ marginBottom: 2 }}>Jag är en passionerad systemutvecklare från Sverige, som sysslar mycket med embedded och andra roliga saker.</Typography>
            <Typography component={'p'} >Jag gör gärna både mjukvara och hårdvara på fritiden.</Typography>
            <Box sx={{ position: "absolute", bottom: 40, right: 40, width: "80%", display: "flex", justifyContent: "start" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box><Typography variant='h6' sx={{ fontWeight: "bold", marginBottom: 1, color: "#444" }}>Kontakta mig via</Typography></Box>
                <Box sx={{ flexDirection: "row", display: "flex", justifyContent: "start" }}>
                  <Box sx={{ borderRadius: "50%", border: "solid 1px #ccc", padding: 1, width: 16, height: 16, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 2 }}><Linkedin size={24} /></Box>
                  <Box sx={{ borderRadius: "50%", border: "solid 1px #ccc", padding: 1, width: 16, height: 16, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 2 }}><GitHub size={24} /></Box>
                  <Box sx={{ borderRadius: "50%", border: "solid 1px #ccc", padding: 1, width: 16, height: 16, display: "flex", justifyContent: "center", alignItems: "center", }}><Mail size={24} /></Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={2.5} sx={{ textAlign: 'start', padding: 4, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}><img src={Joakim} style={{ width: "100%", borderRadius: 10, marginBottom: 20 }}></img></Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}><img src={Kontor} style={{ width: "100%", borderRadius: 10 }}></img></Box>
          </Grid>
          <Grid size={3} sx={{ padding: 4, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
            <Box>
              <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 2, color: "#444" }}>Ett urval av projekt</Typography>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold" }}>Smart snusdosa</Typography>
                <Typography component={'p'} sx={{ fontSize: 14, }}>En smart snusdosa som låser sig i intervall där användaren får ta en snus 1 gång varje timme. Blåtanduppkopplad till en mobilapp.</Typography>
              </Paper>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold" }}>Entropy spelmotor</Typography>
                <Typography component={'p'} sx={{ fontSize: 14, }}>En spelmotor skriven från grunden i C++. Scriptbar i C# och med vulkan API</Typography>
              </Paper>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold" }}>Textklocka</Typography>
                <Typography component={'p'} sx={{ fontSize: 14, }}>En handledsklocka som visar tid med text.</Typography>
              </Paper>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold" }}>ChordRuler</Typography>
                <Typography component={'p'} sx={{ fontSize: 14, }}>Ett program till MacOS för musikskapare. Hitta ackord som passar ihop!</Typography>
              </Paper>
              <Stack spacing={2}>
                <Pagination count={2} />
              </Stack>
            </Box>
          </Grid>
          <Grid size={'grow'} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', }}>
            <Box></Box>
          </Grid>
        </Grid>
      )
    }
  }


  const Companies = () => {

    console.log(isMobile)
    if (isMobile) {
      return (
        <Box sx={{ padding: 2, borderBottom: '1px solid #ccc' }}>
          <Typography variant='h6' sx={{ marginLeft: 0, fontWeight: "bold", color: "#444" }}>Företag som jag arbetat hos</Typography>
          <Box sx={{ flexDirection: "column", display: "flex" }}>
            <Typography variant='h6' sx={{ marginLeft: 0, fontWeight: "bold", color: "#999" }}>Afry</Typography>
            <Typography variant='h6' sx={{ marginLeft: 0, fontWeight: "bold", color: "#999" }}>Graniten</Typography>
            <Typography variant='h6' sx={{ marginLeft: 0, fontWeight: "bold", color: "#999" }}>Combitech</Typography>
            <Typography variant='h6' sx={{ marginLeft: 0, fontWeight: "bold", color: "#999" }}>ActiveQuiz</Typography>
            <Typography variant='h6' sx={{ marginLeft: 0, fontWeight: "bold", color: "#999" }}>Jobtip</Typography>
          </Box>
        </Box >

      )
    } else {
      return (
        <Grid container spacing={0}>
          <Grid size={2} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
          </Grid>
          <Grid size={3} sx={{
            padding: 4, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc',
          }}>
            <Typography variant='h6' sx={{ marginLeft: 1, fontWeight: "bold", color: "#444" }}>Företag som jag arbetat hos</Typography>
            <Box sx={{ flexDirection: "column", display: "flex" }}>
              <Typography variant='h6' sx={{ marginLeft: 1, fontWeight: "bold", color: "#999" }}>Afry</Typography>
              <Typography variant='h6' sx={{ marginLeft: 1, fontWeight: "bold", color: "#999" }}>Graniten</Typography>
              <Typography variant='h6' sx={{ marginLeft: 1, fontWeight: "bold", color: "#999" }}>Combitech</Typography>
              <Typography variant='h6' sx={{ marginLeft: 1, fontWeight: "bold", color: "#999" }}>ActiveQuiz</Typography>
              <Typography variant='h6' sx={{ marginLeft: 1, fontWeight: "bold", color: "#999" }}>Jobtip</Typography>
            </Box>
          </Grid>
          <Grid size={3} spacing={10} sx={{ textAlign: 'start', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
          </Grid>
          <Grid size={2} spacing={10} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
          </Grid>
          <Grid size={'grow'} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', backgroundColor: '#ceebcf' }}>
            <Box></Box>
          </Grid>
        </Grid>
      )
    }
  }

  const Header = () => {

    console.log(isMobile)
    if (isMobile) {
      return (
        <Grid container spacing={0}>

          <Grid size={{ xs: 3.5, md: 2.5 }} sx={{ padding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
            <Typography variant='h1' sx={{ marginLeft: 1.5, fontWeight: "bold", color: "#444" }}>Joakim</Typography>
          </Grid>
          <Grid size={{ xs: 4.5, md: 4 }} sx={{ padding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
            <Typography variant='h1' sx={{ fontWeight: "bold", color: "#444", }}>Wennergren</Typography>
          </Grid>
          <Grid size={'grow'} sx={{ textAlign: 'center', adding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', backgroundColor: '#f0f0f0' }}>

          </Grid>
        </Grid>

      )
    } else {
      return (
        <Grid container spacing={0}>
          <Grid size={2} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center' }}>
          </Grid>
          <Grid size={{ xs: 3, md: 2.5 }} sx={{ padding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
            <Typography variant='h1' sx={{ fontWeight: "bold", color: "#444" }}>Joakim</Typography>
          </Grid>
          <Grid size={{ xs: 4.2, md: 4 }} sx={{ padding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
            <Typography variant='h1' sx={{ fontWeight: "bold", color: "#444", }}>Wennergren</Typography>
          </Grid>
          <Grid size={'grow'} sx={{ textAlign: 'center', adding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', backgroundColor: '#f0f0f0' }}>

          </Grid>
        </Grid>
      )
    }
  }


  const Projects = () => {

    console.log(isMobile)
    if (isMobile) {
      return (
        <Box sx={{ padding: 2, borderBottom: '1px solid #ccc' }}>
          <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 2, color: "#444" }}>Ett urval av projekt</Typography>
          <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Typography component={'p'} sx={{ fontWeight: "bold" }}>Smart snusdosa</Typography>
            <Typography component={'p'} sx={{ fontSize: 14, }}>En smart snusdosa som låser sig i intervall där användaren får ta en snus 1 gång varje timme. Blåtanduppkopplad till en mobilapp.</Typography>
          </Paper>
          <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Typography component={'p'} sx={{ fontWeight: "bold" }}>Entropy spelmotor</Typography>
            <Typography component={'p'} sx={{ fontSize: 14, }}>En spelmotor skriven från grunden i C++. Scriptbar i C# och med vulkan API</Typography>
          </Paper>
          <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Typography component={'p'} sx={{ fontWeight: "bold" }}>Textklocka</Typography>
            <Typography component={'p'} sx={{ fontSize: 14, }}>En handledsklocka som visar tid med text.</Typography>
          </Paper>
          <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Typography component={'p'} sx={{ fontWeight: "bold" }}>ChordRuler</Typography>
            <Typography component={'p'} sx={{ fontSize: 14, }}>Ett program till MacOS för musikskapare. Hitta ackord som passar ihop!</Typography>
          </Paper>
          <Stack spacing={2}>
            <Pagination count={2} />
          </Stack>
        </Box>

      )
    }
  }



  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid size={2} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
            </Grid>
            <Grid size={2.5} sx={{
              padding: 1, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center',
            }}>
            </Grid>
            <Grid size={4} sx={{
              padding: 1, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center',
            }}>
            </Grid>
            <Grid size={'grow'} sx={{ textAlign: 'center', padding: 1, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
              <Box></Box>
            </Grid>
          </Grid>



          {Header()}
          {AboutMe()}
          {Companies()}
          {Projects()}



          <Grid container spacing={0}>
            <Grid size={3} sx={{ textAlign: 'center', padding: 1, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
            </Grid>
            <Grid size={6} sx={{ fontSize: 14, textAlign: 'center', padding: 1, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', }}>
              Copyright &copy; 2025 Joakim Wennergren
            </Grid>
            <Grid size={'grow'} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', }}>
              <Box></Box>
            </Grid>
          </Grid>



        </Box>
      </ThemeProvider >
    </>
  );
}