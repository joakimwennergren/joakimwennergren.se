import { Box, Container, Typography } from "@mui/material";
import ResponsiveAppBar from './components/appbar';
import Header from './components/header';
import './App.css';
import Cr from "./static/projects/cr.jpg"
import Tumblina from "./static/projects/tumblina.png"

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Header />
      <Box sx={{ background: "#fff", padding: 10, }}>
        <Container id="about" sx={{ display: "flex", flexDirection: "row" }}>
          <Box>
            <Typography variant="h4">About</Typography>
            <p>I’m a passionate developer with 7 years of experience in system development, dedicated to crafting efficient and reliable solutions.</p><p> When I’m not tackling professional challenges, you’ll often find me immersed in personal projects at home, where I explore new technologies, sharpen my skills, and bring creative ideas to life. Whether it’s refining processes or building tools from the ground up, I thrive on solving complex problems and delivering results that make a difference.</p>
          </Box>
        </Container>
      </Box>
      <Box sx={{ background: "#f0f0f0", padding: 10, }}>
        <Container>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            ChordRuler
          </Typography>
          <p></p>
          <img src={Cr} style={{ width: "100%", marginBottom: 10 }} />
        </Container>
      </Box>
      <Box sx={{ background: "#fff", padding: 10, }}>
        <Container>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Tumblina
          </Typography>
          <p></p>
          <img src={Tumblina} style={{ width: "30%", }} />
        </Container>
      </Box>
    </>
  );
}

export default App;
