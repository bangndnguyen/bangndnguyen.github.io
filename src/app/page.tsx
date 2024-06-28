'use client';

import { Box, Container, Typography, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  return (
    <Container maxWidth={false} sx={{ minHeight: '100vh', backgroundColor: theme.palette.background.default }} disableGutters>
      <Box sx={{
        height: 300,
        backgroundColor: theme.palette.primary.dark,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography variant="h1" color={theme.palette.getContrastText(theme.palette.primary.dark)}>Hello! I&apos;m Bang Nguyen,</Typography>
        <Typography variant="h2" color={theme.palette.getContrastText(theme.palette.primary.dark)}>Web Developer</Typography>
      </Box>
    </Container>
  );
}
