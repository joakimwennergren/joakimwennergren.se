import { Box, Container, Typography } from "@mui/material";
import logo from "../static/logo.png"

function Header() {
    return (
        <Box className="header" sx={{ height: "60vh", backgroundColor: "#ccc", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
            <Container sx={{ display: "flex", justifyContent: "row", alignItems: "center" }}>
                <img src={logo} style={{ width: 256 }} />
                <Typography variant="h1" sx={{ paddingLeft: 10, color: "#666" }}>Databeams</Typography>
            </Container>
        </Box>
    );
}

export default Header;
