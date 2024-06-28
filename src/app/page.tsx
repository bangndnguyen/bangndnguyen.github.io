'use client';

import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';

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
          Hallo! I&apos;m a Senior Web Developer based in Ho Chi Minh City, Vietnam. I&apos;m looking for an opportunity to work in Germany.
        </Typography>
        <Box sx={{
          display: 'flex',
          gap: 1,
          paddingTop: 2
        }}>
          <Button variant="contained" color='primary' startIcon={<DescriptionIcon />}
            href='https://drive.google.com/file/d/1Qrm7cB4HK5CIj1wdnNMZQj3_HVjqENgn/view'
            target='_blank'
          >
            View my CV
          </Button>
          <Button variant="contained" color='primary' startIcon={<EmailIcon />}
            href='mailto:bangndnguyen@gmail.com'
          >
            Email me
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
