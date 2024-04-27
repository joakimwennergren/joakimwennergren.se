import { Box, Button, Container, Typography } from "@mui/material";
import ResponsiveAppBar from './components/appbar';
import Header from './components/header';
import './App.css';
import SmartScreen from "./static/projects/smartscreen.jpg"
import BitsAndDivs from "./static/projects/bitsanddivs.jpg"
import CraftToday from "./static/projects/crafttoday.png"
import Tilio from "./static/projects/tilio.png"
import Svampjakt from "./static/projects/svampjakt.png"
import Cr from "./static/projects/cr.jpg"
import CrLogo from "./static/projects/cr-logo.jpg"
import Development from "./static/development.png"
import Design from "./static/design-thinking.png"
import Cloud from "./static/clouds.png"
import Mikbits from "./static/projects/mikbits.jpg";
import Tumblina from "./static/projects/tumblina.jpg"
import Shield from "./static/shield.png"

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Header />
      <Container id="Vad%20vi%20erbjuder" sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ paddingTop: 10 }}>
          <Typography variant="h4">Vad vi erbjuder</Typography>
          <p style={{ width: "70%" }}>Ett komplett paket där vi utvecklar eran produkt tillsammans med er vare sig det gäller en hemsida, mobil applikation eller ett helt datorsystem</p>
        </Box>
      </Container>
      <Container sx={{ paddingTop: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <img src={Development} style={{ width: 128, marginBottom: 10 }} />
          <Typography>Systemutveckling</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <img src={Design} style={{ width: 128, marginBottom: 10 }} />
          <Typography>Design</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <img src={Cloud} style={{ width: 128, marginBottom: 10 }} />
          <Typography>Drifttagning i molnet</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <img src={Shield} style={{ width: 128, marginBottom: 10 }} />
          <Typography>Säkerhet</Typography>
        </Box>
      </Container>
      <Container id="Om%20oss" sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ paddingBottom: 10, paddingTop: 10 }}>
          <Typography variant="h4">Om oss</Typography>
          <p>Joakim Wennergren är en systemutvecklare med flera år i branchen.</p>
        </Box>
      </Container>

      <Box sx={{ background: "#f0f0f0", padding: 10, }}>
        <Container>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Choord ruler
          </Typography>
          <p>ChoordRuler är ett hjälpmedel för musiker att hitta ackord som passar ihop. Skrivet i Swift för macOS.</p>
          <img src={Cr} style={{ width: "100%", marginBottom: 10 }} />
        </Container>
      </Box>
      <Box sx={{ background: "white", paddingTop: 10, }}>
        <Container>
          <Typography variant="h4" sx={{ marginBottom: 5 }}>
            Logotyper
          </Typography>
        </Container>

        <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <img src={BitsAndDivs} style={{ width: 280, height: 128 }} />
          <img src={CraftToday} style={{ width: 128, height: 128 }} />
          <img src={Tilio} style={{ width: 128, height: 128 }} />
          <img src={Mikbits} style={{ width: 128, height: 128 }} />
          <img src={Tumblina} style={{ width: 128, height: 148, marginTop: -20 }} />
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
