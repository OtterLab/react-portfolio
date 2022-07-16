import React from 'react';
import classes from './AboutStyles.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const aboutTheme = createTheme ({
    typography: {
        h4: {
            paddingBottom: '.8em',
            position: 'relative',
            bottom: '1.9em',
            marginLeft: '1.7em',
            textTransform: 'uppercase',
            color: '#242A35',
            fontWeight: '500',
            letterSpacing: '3px'
        },
        body1: {
            textAlign: 'left',
            color: '#242A35',
            fontWeight: '300',
            position: 'relative',
            width: '60%',
            left: '30px',
            bottom: '3em'
        },
        button: {
            '&.MuiButton-contained': {
                position: 'relative',
                bottom: '40px',
                backgroundImage: 'linear-gradient(-90deg, #F68E1F, #FCB51D)'
            }
        }
    }
});

function About() {
    return (  
        <div>
            <ThemeProvider theme={aboutTheme}>
                <Container maxWidth="lg" className={classes.aboutContainer}>
                    <div className={classes.overlayAboutHeading}>About Me</div>
                    <div className={classes.aboutHeadingContent}>
                        <Typography variant="h4" className={classes.aboutUnderline}><span></span>Know Me More</Typography>
                    </div>
                    <Typography variant="body1">
                        A graduate graphic designer and frontend developer with a particular interest in UX and UI
                        web development. Willing to learn new skills and to take on new challenges to create interactive
                        components and bring them to life. Outside of graphic design and frontend development,
                        personal interests include travelling, shopping and looking at architecture.
                    </Typography>
                    <div className={classes.downloadBtn}>
                        <Button variant="contained" endIcon={<DownloadIcon/>}>Download cv</Button>
                    </div>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default About;