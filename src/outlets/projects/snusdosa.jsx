import { Typography, Box, Paper, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'



export default function SnusDosa() {

    const isMobile = useMediaQuery('(max-width: 600px)');

    const Content = () => {
        if (isMobile) {
            return (
                <Box sx={{ padding: 2, borderBottom: '1px solid #ccc' }}>
                    <Typography variant='h5' sx={{ fontWeight: "bold", marginBottom: 1, color: "#444", }}>Smart Snusdosa</Typography>
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
                    </Grid>

                    <Grid size={'grow'} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', }}>
                        <Box></Box>
                    </Grid>
                </Grid >
            )
        }
    }

    return (
        <>
            <Content />
        </>
    );
}