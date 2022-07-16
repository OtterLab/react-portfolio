import React from 'react';
import classes from './HomeStyles.module.css';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import ProfileAvatar from '../../assets/avatar_profile.svg';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkMui from '@mui/material/Link';
import AboutSection from '../About/About';
import SkillSection from '../MySkills/Skills';

const socialMenuItems = [
    { icon: FacebookIcon, href: '', name: 'facebook' },
    { icon: InstagramIcon, href: '', name: 'instagram' },
    { icon: LinkedInIcon, href: '', name: 'linkedin' },
    { icon: GitHubIcon, href: '', name: 'github' }
];

const heroTheme = createTheme ({
    typography: {
        h2: {
            fontWeight: '500',
            color: '#242A35'
        },
        subtitle1: {
            color: '#242A35',
            fontWeight: '500',
            letterSpacing: '4px',
            textTransform: 'uppercase'
        },
        h6: {
            lineHeight: '2px',
            color: '#242A35',
            fontWeight: '300',
        },
        button: {
            '&.MuiButton-contained': {
                backgroundColor: '#242A35',
                width: '130px',
                padding: '8px',
                '&:hover': {
                    backgroundColor: '#FFCB06'
                }
            }
        },
    }
});

function Home() {
    return (  
        <ThemeProvider theme={heroTheme}>
            <Paper className={classes.section} square elevation={0}>
                <Container className={classes.container} maxWidth="lg">
                    <Grid className={classes.content} container justifyContent="space-between" alignItems="center">
                        <Grid item sm={7} sx={{position: 'relative', left: '2.5em'}}>
                            <Typography variant="subtitle1" className={classes.textLine}><span></span>Hello,</Typography>
                            <Box sx={{paddingTop: '1.7em'}}>
                                <Link to="/about" style={{textDecoration: 'none'}}>
                                    <Button variant="contained" endIcon={<ArrowCircleRightOutlinedIcon/>}>About me</Button>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item sm={4}>
                            <div>
                                <img src={ProfileAvatar} alt="profile avatar" className={classes.avatar}/>
                            </div>
                        </Grid>
                    </Grid>

                    { /* social menu */}
                    {socialMenuItems.map((item) => (
                        <LinkMui href={item.href} key={item.name}>
                            <IconButton
                            sx={{
                                color: '#242A35', 
                                padding: '.4em', 
                                marginTop: '.3em', 
                                position: 'relative', 
                                right: '11px',
                                left: '1.2em',
                                bottom: '3em'
                            }}>
                                <item.icon style={{fontSize: '25'}}/>
                            </IconButton>
                        </LinkMui>
                    ))}
                </Container>
            </Paper>

            {/* This is about page */}
            <AboutSection/>

            {/* This is skill page */}
            <SkillSection/>
        </ThemeProvider>
    );
}

export default Home;