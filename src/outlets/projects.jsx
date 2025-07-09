import { useParams } from "react-router";
import { Typography, Grid, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Snusdosa from './projects/snusdosa';
import Entropy from './projects/entropy';


export default function Projects() {

    let { projectId } = useParams();
    const isMobile = useMediaQuery('(max-width: 600px)');

    if (isMobile) {
        return (
            <Box sx={{ padding: 2 }}>
                <a href="https://joakimwennergren.se" style={{ color: "#c951a7", textDecorationStyle: "dashed" }}><Typography component={'p'} sx={{ fontWeight: "bold", marginBottom: 2, }}>Gå tillbaka till startsidan</Typography></a>
                {projectId === "smart-snusdosa" && <Snusdosa />}
                {projectId === "entropy-gameengine" && <Entropy />}
            </Box>
        );
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
                    {projectId === "smart-snusdosa" && <Snusdosa />}
                    {projectId === "entropy-gameengine" && <Entropy />}
                </Grid>
                <Grid size={2} sx={{ textAlign: 'center', padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', }}>
                </Grid>
            </Grid>

        </>
    );
}