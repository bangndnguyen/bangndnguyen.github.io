'use client';

import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Collapse, Container, IconButton, Paper, Typography, useTheme } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export default function Home() {
  const theme = useTheme();
  return (
    <Paper>
      <Container maxWidth='md' sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'end',
          flex: '2',
        }}>
          <Typography variant="h3" color={theme.palette.getContrastText(theme.palette.background.paper)}>
            Bang Nguyen
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.getContrastText(theme.palette.background.paper)}
            marginTop={3}
            textAlign={'right'}
          >
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
        </Box>
        <Box sx={{ flex: 1 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              title="Petbook"
            />
            <CardMedia
              component="img"
              height="194"
              image="/petbook-demo.png"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                A simple CRUD app that lets users post content.
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, paddingTop: 1 }}>
              <Chip variant="outlined" label='React' />
              <Chip variant="outlined" label='NextJS' />
              <Chip variant="outlined" label='Postgres' />
              <Chip variant="outlined" label='REST APIs' />
              </Box>
            </CardContent>
            <CardActions disableSpacing>
              <Button startIcon={<GitHubIcon />} href='https://github.com/basdnguyen/petbook'>
                Github
              </Button>
              <Button startIcon={<LaunchIcon />} href='https://petbook-ten.vercel.app/'>
                Demo
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </Paper>
  );
}
