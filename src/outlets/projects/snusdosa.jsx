import { Typography, Box, Paper, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'
import Snusdosan1 from '../../static/projects/snusdosan1.jpeg';
import Snusdosan2 from '../../static/projects/snusdosan2.jpeg';
import Snusdosan3 from '../../static/projects/snusdosan3.jpeg';


export default function SnusDosa() {

    const isMobile = useMediaQuery('(max-width: 600px)');

    const Description = () => {
        return (
            <>
                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold", fontSize: 32 }}>Smart Snusdosa</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>Den smarta snusdosan är en teknikdriven produkt framtagen för att hjälpa användare att kontrollera sitt snusintag över tid.Genom att kombinera mekanik och trådlös kommunikation erbjuder dosan ett enkelt men kraftfullt sätt att reglera vanor och skapa medvetenhet kring konsumtionen.</Typography >
                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold", }}>Funktionalitet</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>Snusdosan fungerar genom att automatiskt låsa sig efter att locket stängts.Den hålls låst under ett förinställt tidsintervall - till exempel 1 timme - och öppnas först när tiden har passerat. När locket åter stängs efter att en portion tagits, startar nästa nedräkning.</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>Intervalltiden kan ställas in direkt via en mobilapp tack vare inbyggd Bluetooth - kommunikation. Detta ger användaren flexibilitet att anpassa dosan efter sina egna mål och behov.</Typography>
                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold", }}>Hårdvara</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>Dosan innehåller ett specialdesignat kretskort med följande komponenter:</Typography>
                <ul>
                    <li>Dialog DA14531 – En strömsnål Bluetooth 5.1 SoC för trådlös kommunikation med mobilen.</li>
                    <li>Atmel XMEGA 16 MCU – Används för styrlogik och hantering av mekanik.</li>
                    <li>Stegmotor – Driver låsmekanismen som öppnar och stänger dosan.</li>
                    <li>Microbrytare – Detekterar om locket är öppet eller stängt.</li>
                    <li>Vibrationsmotor – Ger haptisk feedback, exempelvis när dosan låses upp eller nedräkningen börjar.</li>
                </ul>
                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold", }}>Användningsområde</Typography>
                <Typography component={'p'} sx={{ marginBottom: 2 }}>Produkten riktar sig till personer som vill trappa ned sitt snusande eller skapa mer struktur i sin konsumtion. Den smarta snusdosan kombinerar teknik med beteendeförändring för att ge användaren bättre kontroll över sina vanor.</Typography>
                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold", }}>Framtidsplaner</Typography>

                <Typography component={'p'} sx={{ marginBottom: 2 }}>För att förbättra både användarupplevelsen och produktens tillförlitlighet planeras flera uppgraderingar av den smarta snusdosan:</Typography>
                <ul>
                    <li><b>Hall-effektsensor istället för mikrobrytare</b> -
                        För att detektera om locket är öppet eller stängt planeras en övergång från mekanisk mikrobrytare till en kontaktlös hall-effektsensor. Detta minskar slitage och ökar livslängden.</li>
                    <li><b>Byte av Bluetooth SoC</b> - En mer kraftfull och integrerad Bluetooth-lösning utvärderas för att ge förbättrad räckvidd, stabilare uppkoppling och bättre energieffektivitet.</li>
                    <li><b>Integrerad lösning utan separat MCU</b> - Genom att ersätta den separata Atmel XMEGA 16 med ett mer kapabelt SoC planeras en förenklad elektronikdesign. Detta minskar komponentkostnad, komplexitet och strömförbrukning.</li>
                    <li><b>Förbättrad mekanisk konstruktion</b> - Den fysiska utformningen av dosan ses över för att skapa en mer robust och tillverkningsvänlig konstruktion med förbättrad känsla i låsmekanismen.</li>
                </ul>
                <Typography component={'h1'} sx={{ marginBottom: 2, fontWeight: "bold" }}>Bilder</Typography>
                <img src={Snusdosan1} style={{ width: "33%" }}></img>
                <img src={Snusdosan2} style={{ width: "33%" }}></img>
                <img src={Snusdosan3} style={{ width: "33%" }}></img>
            </>
        )
    }

    return (
        <>
            {Description()}
        </>
    );
}