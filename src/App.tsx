import { Box, Container, Typography } from "@mui/material";
import ResponsiveAppBar from './components/appbar';
import Header from './components/header';
import Cr from "./static/projects/chordruler.png"
import Svampjakt from "./static/projects/svampjakt2.jpg";
import './App.css';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Header />
      <Box sx={{ background: "#fff", padding: { xs: 2, md: 10 } }}>
        <Container id="about" sx={{ display: "flex", flexDirection: "row" }}>
          <Box>
            <Typography variant="h4">About</Typography>
            <p>I’m a passionate developer with 7 years of experience in system development, dedicated to crafting efficient and reliable solutions.</p><p> When I’m not tackling professional challenges, you’ll often find me immersed in personal projects at home, where I explore new technologies, sharpen my skills, and bring creative ideas to life. Whether it’s refining processes or building tools from the ground up, I thrive on solving complex problems and delivering results that make a difference.</p>
          </Box>
        </Container>
      </Box>
      <Box sx={{ background: "#f0f0f0", padding: { xs: 2, md: 10 } }}>
        <Container>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>Projects</Typography>
          <Typography variant="h5" sx={{ marginBottom: 2, color: "steelblue" }}>
            <a href="https://github.com/joakimwennergren/ChordRuler" style={{ textDecoration: "none", color: "steelblue" }}>ChordRuler</a>
          </Typography>
          <p>
            Unlock the harmony in your music with ChordRuler!
          </p>
          <p>
            Designed for musicians of all levels, ChordRuler simplifies the process of finding chords that fit perfectly together. Whether you're composing, improvising, or learning.
          </p>
          <Box sx={{ marginLeft: { xs: 0, md: -6 } }}>
            <img src={Cr} style={{ width: "100%", marginBottom: 10 }} />
          </Box>
        </Container>
      </Box>
      <Box sx={{ background: "#fff", padding: { xs: 2, md: 10 } }} id="svampjakt2">
        <Container>
          <Typography variant="h5" sx={{ marginBottom: 2, color: "steelblue" }}>
            <a href="https://databeams.se#svampjakt2" style={{ textDecoration: "none", color: "steelblue" }}>Svampjakt 2</a>
          </Typography>
          <Box >
            <img src={Svampjakt} style={{ width: "90%", marginBottom: 10 }} />
          </Box>
          <Typography variant="h4">Privacy Policy for Svampjakt 2</Typography>
          <p>Effective Date: 2025</p>
          <Typography variant="h5">1. Introduction</Typography>
          <p>Welcome to Svampjakt 2! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our game.</p>
          <Typography variant="h5">2. Information We Collect</Typography>
          <p>Personal Data: We do not collect any personal data unless explicitly provided by you.</p>
          <Typography variant="h5">3. Data Sharing and Third Parties</Typography>
          <p>We do not sell or rent your personal information.</p>
          <Typography variant="h5">4. Children's Privacy</Typography>
          <p>Svampjakt 2 is intended for general audiences. We do not knowingly collect personal data from children under 13. If we become aware of such data, we will delete it promptly.</p>
          <Typography variant="h5">5. Data Security</Typography>
          <p>We implement appropriate measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
          <Typography variant="h5">6. Your Rights</Typography>
          <p>You have the right to request access to, correction of, or deletion of your data where applicable by law.</p>
          <Typography variant="h5">7. Changes to This Privacy Policy</Typography>
          <p>We may update this Privacy Policy from time to time. The latest version will always be available within the game or on our website.</p>
          <Typography variant="h5">8. Contact Us</Typography>
          <p>If you have any questions about this Privacy Policy, please contact us at: joakim.wennergren@databeams.se</p>
        </Container>
      </Box>
    </>
  );
}

export default App;
