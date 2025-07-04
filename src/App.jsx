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
import { Linkedin, GitHub, Mail, Music } from 'react-feather';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './App.css';

export default function BasicGrid() {

  const isMobile = useMediaQuery('(max-width: 600px)');

  const AboutMe = () => {
    if (isMobile) {
      return (
        <Box sx={{ padding: 2, borderBottom: '1px solid #ccc' }}>
          <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 1, color: "#444" }}>Om mig</Typography>
          <Typography component={'p'}>Jag är en passionerad systemutvecklare från Sverige med ett stort intresse för både mjukvara, hårdvara och musik. På dagarna jobbar jag med systemutveckling, men på fritiden bygger jag gärna egna projekt – allt från inbyggda system och kretskort till appar, spelmotorer och ljudexperiment.</Typography>
          <Typography component={'p'}>Teknik har alltid varit en kreativ drivkraft för mig. Jag gillar att förstå hur saker fungerar på djupet - att skriva effektiv kod, lösa problem nära hårdvaran, och samtidigt skapa verktyg som verkligen gör nytta. Ofta kombinerar jag teknik och musik i mina projekt, till exempel genom att utveckla egna musikverktyg eller experimentera med ljudprogrammering.</Typography>
          <Typography component={'p'}>För mig är systemutveckling mer än ett yrke – det är ett sätt att tänka, lära och uttrycka sig.</Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}><img src={Joakim} style={{ width: "100%", borderRadius: 10, marginBottom: 10, marginTop: 10 }}></img></Box>
        </Box>
      )
    } else {
      return (
        <Grid container spacing={0}>
          <Grid size={2} sx={{ textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
          </Grid>
          <Grid size={8} sx={{
            padding: 6, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', position: "relative"
          }}>
            <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 1, color: "#444", marginTop: -4, }}>Om mig</Typography>
            <Typography component={'p'} sx={{ marginBottom: 2 }}>Jag är en passionerad systemutvecklare från Sverige med ett stort intresse för både mjukvara, hårdvara och musik. På dagarna jobbar jag med systemutveckling, men på fritiden bygger jag gärna egna projekt – allt från inbyggda system och kretskort till appar, spelmotorer och ljudexperiment.</Typography>
            <Typography component={'p'} sx={{ marginBottom: 2 }}>Teknik har alltid varit en kreativ drivkraft för mig. Jag gillar att förstå hur saker fungerar på djupet - att skriva effektiv kod, lösa problem nära hårdvaran, och samtidigt skapa verktyg som verkligen gör nytta. Ofta kombinerar jag teknik och musik i mina projekt, till exempel genom att utveckla egna musikverktyg eller experimentera med ljudprogrammering.</Typography>
            <Typography component={'p'}>För mig är systemutveckling mer än ett yrke – det är ett sätt att tänka, lära och uttrycka sig.</Typography>
            <Box sx={{ display: "flex", justifyContent: "end", marginTop: 2 }}>
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
          <Grid size={2} sx={{ textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
          </Grid>
          <Grid size={4} sx={{ padding: 6, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
            <Box>
              <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 2, color: "#444", marginTop: -1 }}>Mina projekt</Typography>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold" }}>Smart snusdosa</Typography>
                <img src={Snusdosa} style={{ width: "100%", marginBottom: 10 }}></img>
                <Typography component={'p'}>En smart snusdosa som låser sig i intervall där användaren får ta en snus 1 gång varje timme. Blåtanduppkopplad till en mobilapp.</Typography>
              </Paper>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold" }}>Entropy spelmotor</Typography>
                <img src={Svampjakt} style={{ width: "100%", marginBottom: 10 }}></img>
                <Typography component={'p'}>En spelmotor skriven från grunden i C++. Scriptbar i C# och med vulkan API</Typography>
              </Paper>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold" }}>Textklocka</Typography>
                <img src={Textwatch} style={{ width: "100%", marginBottom: 10 }}></img>
                <Typography component={'p'}>En handledsklocka som visar tid med text.</Typography>
              </Paper>
              {/*}
              <Stack spacing={2}>
                <Pagination count={2} />
              </Stack>
              {*/}
            </Box>
          </Grid>
          <Grid size={4} sx={{ padding: 6, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
            <Box>
              <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 2, color: "#444", marginTop: -1 }}>Min musik</Typography>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>Poppy</Typography>
                <AudioPlayer
                  src={'https://joakimwennergren.se/poppy.wav'}
                // other props here
                />
              </Paper>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>Technobeat</Typography>
                <AudioPlayer
                  src={'https://joakimwennergren.se/technobeat.wav'}
                // other props here
                />
              </Paper>
              {/*}
              <Stack spacing={2}>
                <Pagination count={2} />
              </Stack>
              {*/}
            </Box>
          </Grid>
          <Grid size={'grow'} spacing={10} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
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
            <Typography variant='h1' sx={{ marginLeft: 1.5, fontWeight: "bold", color: "#444", fontSize: 22, whiteSpace: "nowrap" }}>Joakim Wennergren</Typography>
          </Grid>
          <Grid size={{ xs: 4.5, md: 4 }} sx={{ padding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
            <Typography variant='h1' sx={{ fontWeight: "bold", color: "#444", }}></Typography>
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
          <Grid size={{ xs: 3, md: 3.5 }} sx={{ padding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
            <Typography variant='h1' sx={{ marginLeft: 2, fontWeight: "bold", color: "#444", fontSize: 32, whiteSpace: "nowrap" }}>Joakim Wennergren</Typography>
          </Grid>
          <Grid size={{ xs: 4.2, md: 4.5 }} sx={{ padding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid size={2} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
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
    </>
  );
}