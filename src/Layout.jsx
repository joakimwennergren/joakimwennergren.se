import {
  Typography,
  CssBaseline,
  Grid,
  Box
} from '@mui/material';
import { Outlet } from "react-router";
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Layout() {

  const isMobile = useMediaQuery('(max-width: 800px)');

  const Header = () => {
    return (
      <Grid container sx={{ borderTop: { xs: "1px solid #ccc" } }} >
        <Grid size={1} sx={{ textAlign: 'center', padding: { xs: 2, md: 3 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
        </Grid>
        <Grid size={5} sx={{
          padding: 1, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center',
        }}>
        </Grid>
        <Grid size={5} sx={{
          padding: 1, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center',
        }}>
        </Grid>
        <Grid size={'grow'} sx={{ textAlign: 'center', padding: 1, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
          <Box></Box>
        </Grid>
      </Grid>
    )
  }

  const Jumbotron = () => {
    if (isMobile) {
      return (
        <Grid container>
          <Grid size={5} sx={{ padding: 2, borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
            <Typography variant='h1' sx={{ fontWeight: "bold", color: "#444", fontSize: 22, whiteSpace: "nowrap", zIndex: 999 }}>Joakim Wennergren</Typography>
          </Grid>
          <Grid size={"grow"} sx={{ textAlign: 'center', adding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', backgroundColor: '#f5f5f5' }}>
          </Grid>
        </Grid>

      )
    } else {
      return (
        <Grid container>
          <Grid size={1} sx={{ textAlign: 'center', padding: 4, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
          </Grid>
          <Grid size={5} sx={{ zIndex: 999, padding: 2, borderBottom: '1px solid #ccc', borderRight: "1px solid #ccc", display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
            <Typography variant='h1' sx={{ marginLeft: 2, fontWeight: "bold", color: "#444", fontSize: 32, whiteSpace: "nowrap" }}>Joakim Wennergren</Typography>
          </Grid>
          <Grid size={5} sx={{ padding: 2, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
          </Grid>
          <Grid size={1} sx={{ textAlign: 'center', adding: 2, borderBottom: '1px solid #ccc', backgroundColor: '#f5f5f5' }}>
          </Grid>
        </Grid>
      )
    }
  }

  const Footer = () => {

    const CurrentYear = () => {
      return new Date().getFullYear();
    }

    return (
      <Box sx={{ fontSize: 14, textAlign: 'center', padding: 2, borderTop: isMobile ? '1px solid #ccc' : "none", backgroundColor: '#f5f5f5' }}>
        Copyright &copy; {CurrentYear()} Joakim Wennergren
      </Box>
    )
  }

  return (
    <>
      <CssBaseline />
      {Header()}
      {Jumbotron()}
      <Outlet />
      {Footer()}
    </>
  );
}