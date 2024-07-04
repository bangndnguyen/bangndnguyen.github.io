'use client';

import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Container, Typography, useTheme } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Grid from "@mui/material/Unstable_Grid2";

export default function Home() {
  const theme = useTheme();
  return (
    <Container maxWidth='md'>
      <Grid container minHeight={'100vh'} alignItems={'center'}
        spacing={{ sm: 8 }} rowSpacing={{ xs: 6, sm: 0 }} paddingY={6}>
        <Grid sm={6} flexDirection={'column'} alignItems={{ xs: 'start', sm: 'end' }} alignContent={'center'} container>
          <Grid container flexDirection={'column'} alignItems={'center'} gap={4}>
            <Avatar src='/avatar.jpg' sx={{ width: 256, height: 256 }} />
            <Typography variant="h3" color={theme.palette.getContrastText(theme.palette.background.paper)}>
              BANG NGUYEN
            </Typography>
          </Grid>
          <Typography
            variant="subtitle1"
            color={theme.palette.getContrastText(theme.palette.background.paper)}
            marginTop={3}
            textAlign={{ xs: 'left', sm: 'right' }}
          >
            Hallo! I&apos;m a Senior Web Developer based in Ho Chi Minh City, Vietnam. I&apos;m looking for an opportunity to work in Germany.
          </Typography>
          <Box sx={{
            display: 'flex',
            gap: 1,
            paddingTop: 2
          }}>
            <Button variant="contained" color='primary' startIcon={<DescriptionIcon />}
              href='https://docs.google.com/document/d/1GgLgZSVlOrW1InuWcokmng9qh6huMz-Jsb0wAAsbcjc/edit'
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
        </Grid>
        <Grid sm={6} alignContent={'center'} paddingTop={{ xs: 6, sm: 0 }} container>
          <Grid>
            <Typography variant="h5">
              Skill Demos
            </Typography>
          </Grid>
          <Grid paddingTop={3}>
            <Card sx={{ maxWidth: 512 }}>
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
                  A social network where pets are superstars.
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.5, paddingTop: 1, flexWrap: 'wrap' }}>
                  <Chip variant="outlined" label='React' />
                  <Chip variant="outlined" label='NextJS' />
                  <Chip variant="outlined" label='MaterialUI' />
                  <Chip variant="outlined" label='Postgres' />
                  <Chip variant="outlined" label='Prisma' />
                  <Chip variant="outlined" label='REST APIs' />
                </Box>
              </CardContent>
              <CardActions disableSpacing>
                <Button startIcon={<GitHubIcon />} href='https://github.com/basdnguyen/petbook' target='_blank'>
                  Github
                </Button>
                <Button startIcon={<LaunchIcon />} href='https://petbook.bangnguyen.me/' target='_blank'>
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
