import { useState } from 'react';
import { Typography, Grid, Paper, Box, Pagination, PaginationItem } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'
import Snusdosa from "../static/projects/snusdosa.jpg";
import EntropyOld from "../static/projects/entropy_old.png";
import SmartDisplay from "../static/projects/smartdisplay.jpg";
import Phone from "../static/projects/phone.jpg";
import LedMatrix from "../static/projects/ledmatrix.jpg";
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';




export default function Index() {

    const projects = [
        {
            title: "Smart snusdosa",
            description: "En smart snusdosa som låser sig i intervall där användaren får ta en snus 1 gång varje timme. Blåtanduppkopplad till en mobilapp.",
            image: Snusdosa,
            link: "https://joakimwennergren.se/projects/smart-snusdosa",
        },
        {
            title: "Entropy spelmotor",
            description: "Spelmotorn är ett långsiktigt utvecklingsprojekt som kombinerar hög prestanda, plattformsoberoende och ett modernt komponentbaserat arkitekturtänk.",
            image: EntropyOld,
            link: "https://joakimwennergren.se/projects/entropy-gameengine",
        },
        {
            title: "Telefon",
            description: "En ombyggd telefon. med ett 2G modem och en atmel MCU. Kan ta emot och ringa samtal.",
            image: Phone,
            link: "https://joakimwennergren.se/projects/phone",
        },
        {
            title: "Smart display",
            description: "En skärm med ram som visar väder och tid",
            image: SmartDisplay,
            link: "https://joakimwennergren.se/projects/smart-display",
        },
        {
            title: "LED matris",
            description: "Enkel led matris",
            image: LedMatrix,
            link: "https://joakimwennergren.se/projects/led-matrix",
        },
    ]

    const music = [
        {
            title: "Slashdot",
            src: "https://joakimwennergren.se/slashdot.wav"
        },
        {
            title: "Ensure",
            src: "https://joakimwennergren.se/Ensure.wav"
        },
        {
            title: "Moongatan",
            src: "https://joakimwennergren.se/moongatan.wav"
        },
        {
            title: "Hiup",
            src: "https://joakimwennergren.se/hiup.wav"
        },
        {
            title: "Tourey kit",
            src: "https://joakimwennergren.se/tourey_kit.wav"
        },
        {
            title: "Bam",
            src: "https://joakimwennergren.se/bam.wav"
        },
        {
            title: "Random",
            src: "https://joakimwennergren.se/random.wav"
        },
        {
            title: "Poppy",
            src: "https://joakimwennergren.se/poppy.wav"
        },
        {
            title: "Temp",
            src: "https://joakimwennergren.se/temp.wav"
        },
        {
            title: "Wonder",
            src: "https://joakimwennergren.se/wonder.wav"
        },
        {
            title: "Wtf",
            src: "https://joakimwennergren.se/wtf.wav"
        },
        {
            title: "Technobeat",
            src: "https://joakimwennergren.se/technobeat.wav"
        },
        {
            title: "Sad tune",
            src: "https://joakimwennergren.se/sad_tune.wav"
        },
        {
            title: "Rich on water",
            src: "https://joakimwennergren.se/rich_on_water.wav"
        }
    ]


    const [currentProjectPage, setCurrentProjectPage] = useState(1);
    const totalPages = Math.ceil(projects.length / 2);
    const currentItems = projects.slice(
        (currentProjectPage - 1) * 2,
        currentProjectPage * 2
    );
    const handleChange = (event, value) => {
        setCurrentProjectPage(value);
    };

    const [currentMusicPage, setCurrentMusicPage] = useState(1);
    const totalMusicPages = Math.ceil(music.length / 6);
    const currentMusicItems = music.slice(
        (currentMusicPage - 1) * 6,
        currentMusicPage * 6
    );
    const handleMusicChange = (event, value) => {
        setCurrentMusicPage(value);
    };

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
                                    <a href="https://www.linkedin.com/in/joakim-wennergren/" style={{ color: "#444" }}><Box sx={{ borderRadius: "50%", border: "solid 1px #ccc", padding: 1, width: 42, height: 42, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 2 }}><LinkedIn size={24} /></Box></a>
                                    <a href="https://github.com/joakimwennergren" style={{ color: "#444" }}><Box sx={{ borderRadius: "50%", border: "solid 1px #ccc", padding: 1, width: 42, height: 42, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 2 }}><GitHub size={24} /></Box></a>
                                    <a href="mailto:hej@joakimwennergren.se" style={{ color: "#444" }}><Box sx={{ borderRadius: "50%", border: "solid 1px #ccc", padding: 1, width: 42, height: 42, display: "flex", justifyContent: "center", alignItems: "center", }}><Email size={24} /></Box></a>
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
        if (isMobile) {
            return (
                <Box sx={{ padding: 2, }}>
                    <Box>
                        {currentItems.map((item, index) => (
                            <Paper sx={{ padding: 2, marginBottom: 2 }}>
                                <a href={item.link}><Typography component={'p'} sx={{ fontWeight: "bold" }}>{item.title}</Typography></a>
                                <img src={item.image} style={{ width: "100%", marginBottom: 10 }}></img>
                                <Typography component={'p'}>{item.description}</Typography>
                            </Paper>
                        ))}
                        <Pagination count={totalPages} page={currentProjectPage} onChange={handleChange} />
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
                            {currentItems.map((item, index) => (
                                <Box sx={{ marginBottom: 2 }}>
                                    <a href={item.link} style={{ color: "steelblue", textDecoration: "none" }}><Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>{item.title}</Typography></a>
                                    <img src={item.image} style={{ width: "100%", marginBottom: 10 }}></img>
                                    <Typography component={'p'}>{item.description}</Typography>
                                </Box>
                            ))}
                            <Pagination count={totalPages} page={currentProjectPage} onChange={handleChange} />
                        </Box>
                    </Grid>
                    <Grid size={4} sx={{ padding: 6, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
                        <Box>
                            <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 2, color: "#444", marginTop: -1 }}>Musik</Typography>
                            {currentMusicItems.map((item, index) => (
                                <Box sx={{ marginBottom: 2 }}>
                                    <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>{item.title}</Typography>
                                    <AudioPlayer src={item.src}
                                    />
                                </Box>
                            ))}
                            <Pagination count={totalMusicPages} page={currentMusicPage} onChange={handleMusicChange} />
                        </Box>
                    </Grid>
                    <Grid size={'grow'} spacing={10} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
                    </Grid>
                </Grid>
            )
        }
    }

    const Projects = () => {
        if (isMobile) {
            return (
                <Box sx={{ padding: 2, backgroundColor: "#f0f0f0" }}>
                    <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 2, color: "#444" }}>Musik</Typography>
                    {currentMusicItems.map((item, index) => (
                        <Box sx={{ marginBottom: 2 }}>
                            <Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 1 }}>{item.title}</Typography>
                            <AudioPlayer src={item.src}
                            />
                        </Box>
                    ))}
                    <Pagination count={totalMusicPages} page={currentMusicPage} onChange={handleMusicChange} />
                </Box>

            )
        }
    }

    return (
        <>
            {AboutMe()}
            {Companies()}
            {Projects()}
        </>
    );
}