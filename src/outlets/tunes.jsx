import { useParams } from "react-router";
import { Grid, Typography } from '@mui/material';
import tunes from '../data/tunes';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Tunes() {

    let { tuneId } = useParams();

    const RenderPlayer = () => {
        const cleanTuneId = tuneId.replace(/\s+/g, '');

        return tunes.map((tune, index) => {
            console.log("https://joakimwennergren.se/" + tune.title.replace(/\s+/g, '').toLowerCase() + ".wav")
            if (tune.title.replace(/\s+/g, '').toUpperCase() === cleanTuneId.toUpperCase()) {
                return (
                    <AudioPlayer key={"tune" + index} showJumpControls={false} src={"https://joakimwennergren.se/" + tune.title.replace(/\s+/g, '').toLowerCase() + ".wav"} />
                )
            }
        });
    }

    return (
        <>
            <Grid container>
                <Grid size={2} sx={{ textAlign: 'center', borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
                </Grid>
                <Grid size={8} sx={{
                    padding: 6, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc'
                }}>
                    <a href="https://joakimwennergren.se" style={{ color: "#c951a7", textDecorationStyle: "dashed" }}><Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 2, }}>Gå tillbaka till startsidan</Typography></a>
                    <Typography variant='h4' sx={{ fontWeight: "bold", marginBottom: 2, color: "#444" }}>{tuneId}</Typography>
                    {RenderPlayer()}
                </Grid>
                <Grid size={2} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', }}>
                </Grid>
            </Grid>
        </>
    );
}
