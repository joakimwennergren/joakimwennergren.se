import { Box, Container, Typography } from "@mui/material";
import ResponsiveAppBar from './components/appbar';
import Header from './components/header';
import Cr from "./static/projects/chordruler.png"
import Entropy from "./static/projects/entropy.png";
import './App.css';

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
          <Typography variant="h4" sx={{ marginBottom: 5 }}>Projects</Typography>
          <Typography variant="h5" sx={{ marginBottom: 2, color: "steelblue" }}>
            <a href="https://github.com/joakimwennergren/ChordRuler" style={{ textDecoration: "none", color: "steelblue" }}>ChordRuler</a>
          </Typography>
          <p>
            Unlock the harmony in your music with ChordRuler!
          </p>
          <p>
            Designed for musicians of all levels, ChordRuler simplifies the process of finding chords that fit perfectly together. Whether you're composing, improvising, or learning.
          </p>
          <img src={Cr} style={{ width: "100%", marginBottom: 10 }} />
        </Container>
      </Box>
      <Box sx={{ background: "#fff", padding: 10, }}>
        <Container>
          <Typography variant="h5" sx={{ marginBottom: 2, color: "steelblue" }}>
            <a href="https://github.com/joakimwennergren/Entropy" style={{ textDecoration: "none", color: "steelblue" }}>Entropy</a>
          </Typography>
          <p>
            Game engine made with Vulkan and C++. Scripting capabilities with Lua.
            Can display GLTF/OBJ models and some basic 2D shapes.
          </p>
          <p>Works on Linux, Windows, MacOS, iOS and Android</p>
          <img src={Entropy} style={{ width: "100%", marginBottom: 10 }} />
        </Container>
      </Box>
    </>
  );
}

export default App;
