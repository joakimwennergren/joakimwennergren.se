import { Box, Button, Container, Typography } from "@mui/material";
import ResponsiveAppBar from './components/appbar';
import Header from './components/header';
import './App.css';
import SmartScreen from "./static/projects/smartscreen.jpg"
import BitsAndDivs from "./static/projects/bitsanddivs.jpg"
import CraftToday from "./static/projects/crafttoday.png"
import Tilio from "./static/projects/tilio.png"
import Svampjakt from "./static/projects/svampjakt.png"

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Header />
      <Container id="Vad%20vi%20erbjuder" sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ paddingTop: 20 }}>
          <Typography variant="h4">Vad vi erbjuder</Typography>
          <p>Vi erbjuder utvecklingstjänster och grafisk design som loggor, layout och foton.</p>
          <p>Drifttagning och support</p>

        </Box>
      </Container>
      <Container id="Om%20oss" sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ paddingBottom: 10, paddingTop: 10 }}>
          <Typography variant="h4">Om oss</Typography>
          <p>Vi erbjuder utvecklingstjänster och grafisk design som loggor, layout och foton</p>
        </Box>
      </Container>
      <Container id="%20Tidigare%20projekt" sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ paddingBottom: 10 }}>
          <Typography variant="h4">Tidigare projekt</Typography>
        </Box>
      </Container>
      <Box sx={{ background: "#f0f0f0", padding: 10, }}>
        <Container>
          <Typography variant="h4">
            Choord ruler
          </Typography>
        </Container>
      </Box>
      <Box sx={{ background: "white", paddingTop: 10 }}>
        <Container>
          <Typography variant="h4" sx={{ marginBottom: 5 }}>
            Logotyper
          </Typography>
          <img src={BitsAndDivs} />
        </Container>
      </Box>
      <Box sx={{ background: "white", }}>
        <Container>
          <img src={CraftToday} style={{ width: 256 }} />
        </Container>
      </Box>
      <Box sx={{ background: "white", }}>
        <Container>
          <img src={Tilio} style={{ width: 256 }} />
        </Container>
      </Box>
      <Box sx={{ background: "white", paddingTop: 10, }}>
        <Container>
          <Typography variant="h4" sx={{ marginBottom: 5 }}>
            Spel
          </Typography>
          <img src={Svampjakt} style={{ width: "100%" }} />
        </Container>
      </Box>
      <Container id="Kontakt" sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ paddingBottom: 10, paddingTop: 10 }}>
          <Typography variant="h4">Kontakta oss</Typography>
          <p>Joakim.wennergren@databeams.se</p>
          <p>noemi.nygard@databeams.se</p>
        </Box>
      </Container>
    </>
  );
}

export default App;
