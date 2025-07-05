import {
  Typography,
  CssBaseline,
  Grid,
  Box
} from '@mui/material';
import { Outlet } from "react-router";
import useMediaQuery from '@mui/material/useMediaQuery'
import './App.css';

export default function Layout() {

  const isMobile = useMediaQuery('(max-width: 600px)');

  const Header = () => {
    return (
      <Grid container sx={{ borderTop: { xs: "1px solid #ccc" } }} >
        <Grid size={2} sx={{ textAlign: 'center', padding: { xs: 2, md: 3 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
        </Grid>
        <Grid size={4} sx={{
          padding: 1, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center',
        }}>
        </Grid>
        <Grid size={4} sx={{
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
          <Grid size={6} sx={{ padding: 2, borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
            <Typography variant='h1' sx={{ fontWeight: "bold", color: "#444", fontSize: 22, whiteSpace: "nowrap" }}>Joakim Wennergren</Typography>
          </Grid>
          <Grid size={6} sx={{ textAlign: 'center', adding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', }}>
          </Grid>
        </Grid>

      )
    } else {
      return (
        <Grid container>
          <Grid size={2} sx={{ textAlign: 'center', padding: 4, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center' }}>
          </Grid>
          <Grid size={{ xs: 3, md: 3.5 }} sx={{ padding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
            <Typography variant='h1' sx={{ marginLeft: 2, fontWeight: "bold", color: "#444", fontSize: 32, whiteSpace: "nowrap" }}>Joakim Wennergren</Typography>
          </Grid>
          <Grid size={{ xs: 4.2, md: 4.5 }} sx={{ padding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', borderRight: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
          </Grid>
          <Grid size={'grow'} sx={{ textAlign: 'center', adding: { xs: 1, md: 4 }, borderBottom: '1px solid #ccc', }}>
          </Grid>
        </Grid>
      )
    }
  }

  const Footer = () => {
    return (
      <Box sx={{ fontSize: 14, textAlign: 'center', padding: 4, }}>
        Copyright &copy; <script>document.write(new Date().getFullYear());</script> Joakim Wennergren
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