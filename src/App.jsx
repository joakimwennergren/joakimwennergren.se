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
import EntropyOld from "./static/projects/entropy_old.png";
import SmartDisplay from "./static/projects/smartdisplay.jpg";
import Phone from "./static/projects/phone.jpg";
import LedMatrix from "./static/projects/ledmatrix.jpg";
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
          <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 1, color: "#444", }}>Om mig</Typography>
          <Typography component={'p'} sx={{ marginBottom: 2 }}>Jag är en passionerad systemutvecklare från Sverige med ett stort intresse för både mjukvara, hårdvara och musik. På dagarna jobbar jag med systemutveckling, men på fritiden bygger jag gärna egna projekt – allt från inbyggda system och kretskort till appar, spelmotorer och ljudexperiment.</Typography>
          <Typography component={'p'} sx={{ marginBottom: 2 }}>Teknik har alltid varit en kreativ drivkraft för mig. Jag gillar att förstå hur saker fungerar på djupet - att skriva effektiv kod, lösa problem nära hårdvaran, och samtidigt skapa verktyg som verkligen gör nytta.</Typography>
          <Typography component={'p'}>För mig är systemutveckling mer än ett yrke – det är ett sätt att tänka, lära och uttrycka sig.</Typography>
        </Box>
      )
    } else {
      return (
        <Grid container >
          <Grid size={2} sx={{ textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
          </Grid>
          <Grid size={8} sx={{
            padding: 6, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc'
          }}>
            <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 1, color: "#444", }}>Om mig</Typography>
            <Typography component={'p'} sx={{ marginBottom: 2 }}>Jag är en passionerad systemutvecklare från Sverige med ett stort intresse för både mjukvara, hårdvara och musik. På dagarna jobbar jag med systemutveckling, men på fritiden bygger jag gärna egna projekt – allt från inbyggda system och kretskort till appar, spelmotorer och ljudexperiment.</Typography>
            <Typography component={'p'} sx={{ marginBottom: 2 }}>Teknik har alltid varit en kreativ drivkraft för mig. Jag gillar att förstå hur saker fungerar på djupet - att skriva effektiv kod, lösa problem nära hårdvaran, och samtidigt skapa verktyg som verkligen gör nytta.</Typography>
            <Typography component={'p'}>För mig är systemutveckling mer än ett yrke – det är ett sätt att tänka, lära och uttrycka sig.</Typography>
            <Box sx={{ display: "flex", justifyContent: "end", marginTop: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box><Typography variant='h6' sx={{ fontWeight: "bold", marginBottom: 1, color: "#444" }}>Kontakta mig via</Typography></Box>
                <Box sx={{ flexDirection: "row", display: "flex", justifyContent: "end" }}>
                  <a href="https://www.linkedin.com/in/joakim-wennergren/"><Box sx={{ borderRadius: "50%", border: "solid 1px #ccc", padding: 1, width: 16, height: 16, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 2 }}><Linkedin size={24} /></Box></a>
                  <a href="https://github.com/joakimwennergren"><Box sx={{ borderRadius: "50%", border: "solid 1px #ccc", padding: 1, width: 16, height: 16, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 2 }}><GitHub size={24} /></Box></a>
                  <a href="mailto:hej@joakimwennergren.se"><Box sx={{ borderRadius: "50%", border: "solid 1px #ccc", padding: 1, width: 16, height: 16, display: "flex", justifyContent: "center", alignItems: "center", }}><Mail size={24} /></Box></a>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={'grow'} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', }}>
            <Box></Box>
          </Grid>
        </Grid >
      )
    }
  }


  const Companies = () => {

    console.log(isMobile)
    if (isMobile) {
      return (
        <Box sx={{ padding: 2, }}>
          <Box>
            <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 1, color: "#444", }}>Projekt</Typography>
            <Paper sx={{ padding: 2, marginBottom: 2 }}>
              <Typography component={'p'} sx={{ fontWeight: "bold" }}>Smart snusdosa</Typography>
              <img src={Snusdosa} style={{ width: "100%", marginBottom: 10 }}></img>
              <Typography component={'p'}>En smart snusdosa som låser sig i intervall där användaren får ta en snus 1 gång varje timme. Blåtanduppkopplad till en mobilapp.</Typography>
            </Paper>
            <Paper sx={{ padding: 2, marginBottom: 2 }}>
              <Typography component={'p'} sx={{ fontWeight: "bold" }}>Entropy spelmotor</Typography>
              <img src={EntropyOld} style={{ width: "100%", marginBottom: 10 }}></img>
              <Typography component={'p'}>En spelmotor skriven från grunden i C++. Scriptbar i C# och med vulkan API</Typography>
            </Paper>
            <Paper sx={{ padding: 2, marginBottom: 2 }}>
              <Typography component={'p'} sx={{ fontWeight: "bold" }}>Telefon</Typography>
              <img src={Phone} style={{ width: "100%", marginBottom: 10 }}></img>
              <Typography component={'p'}>En ombyggd telefon. 2G.</Typography>
            </Paper>
            <Paper sx={{ padding: 2, marginBottom: 2 }}>
              <Typography component={'p'} sx={{ fontWeight: "bold" }}>Smart display</Typography>
              <img src={SmartDisplay} style={{ width: "100%", marginBottom: 10 }}></img>
              <Typography component={'p'}>En skärm med ram som visar väder och tid</Typography>
            </Paper>
            <Paper sx={{ padding: 2, marginBottom: 2 }}>
              <Typography component={'p'} sx={{ fontWeight: "bold" }}>LED Matris</Typography>
              <img src={LedMatrix} style={{ width: "100%", marginBottom: 10 }}></img>
              <Typography component={'p'}>Enkel led matris</Typography>
            </Paper>
            {/*}
              <Stack spacing={2}>
                <Pagination count={2} />
              </Stack>
              {*/}
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
              <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 2, color: "#444", marginTop: -1 }}>Projekt</Typography>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold" }}>Smart snusdosa</Typography>
                <img src={Snusdosa} style={{ width: "100%", marginBottom: 10 }}></img>
                <Typography component={'p'}>En smart snusdosa som låser sig i intervall där användaren får ta en snus 1 gång varje timme. Blåtanduppkopplad till en mobilapp.</Typography>
              </Paper>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold" }}>Entropy spelmotor</Typography>
                <img src={EntropyOld} style={{ width: "100%", marginBottom: 10 }}></img>
                <Typography component={'p'}>En spelmotor skriven från grunden i C++. Scriptbar i C# och med vulkan API</Typography>
              </Paper>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold" }}>Telefon</Typography>
                <img src={Phone} style={{ width: "100%", marginBottom: 10 }}></img>
                <Typography component={'p'}>En ombyggd telefon. 2G.</Typography>
              </Paper>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold" }}>Smart display</Typography>
                <img src={SmartDisplay} style={{ width: "100%", marginBottom: 10 }}></img>
                <Typography component={'p'}>En skärm med ram som visar väder och tid</Typography>
              </Paper>
              <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold" }}>LED Matris</Typography>
                <img src={LedMatrix} style={{ width: "100%", marginBottom: 10 }}></img>
                <Typography component={'p'}>Enkel led matris</Typography>
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
              <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 2, color: "#444", marginTop: -1 }}>Musik</Typography>
              <Box sx={{ marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>Slashdot</Typography>
                <AudioPlayer src={'https://joakimwennergren.se/slashdot.wav'}
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>Ensure</Typography>
                <AudioPlayer src={'https://joakimwennergren.se/Ensure.wav'}
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>Moongatan</Typography>
                <AudioPlayer src={'https://joakimwennergren.se/moongatan.wav'}
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>Poppy</Typography>
                <AudioPlayer src={'https://joakimwennergren.se/poppy.wav'}
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>Technobeat</Typography>
                <AudioPlayer src={'https://joakimwennergren.se/technobeat.wav'}
                />
              </Box>
              <Box sx={{}}>
                <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>Rich on water</Typography>
                <AudioPlayer src={'https://joakimwennergren.se/rich_on_water.wav'}
                />
              </Box>
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
        <Grid container>
          <Grid size={6} sx={{ padding: 2, borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
            <Typography variant='h1' sx={{ fontWeight: "bold", color: "#444", fontSize: 22, whiteSpace: "nowrap" }}>Joakim Wennergren</Typography>
          </Grid>
          <Grid size={6} sx={{ textAlign: 'center', adding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
          </Grid>
        </Grid>

      )
    } else {
      return (
        <Grid container>
          <Grid size={2} sx={{ textAlign: 'center', padding: 4, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center' }}>
          </Grid>
          <Grid size={{ xs: 3, md: 3.5 }} sx={{ padding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
            <Typography variant='h1' sx={{ marginLeft: 2, fontWeight: "bold", color: "#444", fontSize: 32, whiteSpace: "nowrap" }}>Joakim Wennergren</Typography>
          </Grid>
          <Grid size={{ xs: 4.2, md: 4.5 }} sx={{ padding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
          </Grid>
          <Grid size={'grow'} sx={{ textAlign: 'center', adding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', }}>

          </Grid>
        </Grid>
      )
    }
  }


  const Projects = () => {

    console.log(isMobile)
    if (isMobile) {
      return (
        <Box sx={{ padding: 2 }}>
          <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 2, color: "#444" }}>Musik</Typography>
          <Box sx={{ marginBottom: 2 }}>
            <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>Slashdot</Typography>
            <AudioPlayer src={'https://joakimwennergren.se/slashdot.wav'}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>Ensure</Typography>
            <AudioPlayer src={'https://joakimwennergren.se/Ensure.wav'}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>Moongatan</Typography>
            <AudioPlayer src={'https://joakimwennergren.se/moongatan.wav'}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>Poppy</Typography>
            <AudioPlayer src={'https://joakimwennergren.se/poppy.wav'}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>Technobeat</Typography>
            <AudioPlayer src={'https://joakimwennergren.se/technobeat.wav'}
            />
          </Box>
          <Box sx={{}}>
            <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>Rich on water</Typography>
            <AudioPlayer src={'https://joakimwennergren.se/rich_on_water.wav'}
            />
          </Box>
          {/*}
              <Stack spacing={2}>
                <Pagination count={2} />
              </Stack>
              {*/}
        </Box>

      )
    }
  }



  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} sx={{ borderTop: { xs: "1px solid #ccc" } }} >
          <Grid size={2} sx={{ textAlign: 'center', padding: { xs: 2, md: 3 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
          </Grid>
          <Grid size={4} sx={{
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



        <Box sx={{ fontSize: 14, textAlign: 'center', padding: 4, }}>
          Copyright &copy; 2025 Joakim Wennergren
        </Box>



      </Box >
    </>
  );
}