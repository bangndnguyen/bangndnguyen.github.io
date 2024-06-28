'use client';

import { Box, Container, Typography, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  return (
    <Container maxWidth={false} sx={{
      minHeight: '100vh', backgroundColor: theme.palette.background.paper,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }} disableGutters>
      <Container maxWidth='sm' sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Typography variant="h3" color={theme.palette.getContrastText(theme.palette.background.paper)}>
          Bang Nguyen
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.getContrastText(theme.palette.background.paper)} marginTop={3}>
          Hello! I&apos;m a Senior Web Developer based in Ho Chi Minh City, Vietnam. I&apos;m looking for an opportunity to work in Germany. Here is a showcase of what I can do. Hit me up if you&apos;re interested.
        </Typography>
      </Container>
    </Container>
  );
}
