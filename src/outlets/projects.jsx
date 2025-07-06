import { useParams } from "react-router";
import useMediaQuery from '@mui/material/useMediaQuery'
import Snusdosa from './projects/snusdosa';
import Entropy from './projects/entropy';


export default function Projects() {

    let { projectId } = useParams();
    const isMobile = useMediaQuery('(max-width: 600px)');

    return (
        <>
            {projectId === "smart-snusdosa" && <Snusdosa />}
            {projectId === "entropy-gameengine" && <Entropy />}
        </>
    );
}