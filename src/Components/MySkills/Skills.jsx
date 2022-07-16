import React from 'react';
import classes from './SkillsStyles.module.css';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';

const skillTheme = createTheme ({
    typography: {
        h4: {
            fontWeight: '500',
            paddingBottom: '.5em',
            color: 'white'
        },
        h6: {
            paddingBottom: '10px',
            fontWeight: '500',
            color: '#242A35'
        },
        subtitle1: {
            color: '#242A35',
            fontSize: '16pt',
            paddingTop: '.4em',
            padding: '.4em'
        }
    }
});

function Skills() {
    return (  
        <ThemeProvider theme={skillTheme}>
            <div className={classes.skillsContainer}>
                <div className={classes.skillHeadingContainer}>
                    <div className={classes.overlaySkillHeading}>Skills</div>
                    <div className={classes.skillHeadingContent}>
                    <Typography variant="h4" className={classes.skillUnderline}><span></span>What I Do?</Typography>
                    </div>
                </div>
                <div className={classes.cardContainer}>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item>
                            <div className={classes.card}>
                                <div className={classes.cardContent}>
                                    <IconButton style={{background: 'rgba(0, 0, 0, 0.2)'}}>
                                        <DesignServicesIcon style={{fontSize: '60', padding: '4px'}}/>
                                    </IconButton>
                                    <Typography variant="subtitle1">Graphic Design</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className={classes.card}>
                                <div className={classes.cardContent}>
                                    <IconButton style={{background: 'rgba(0, 0, 0, 0.2)'}}>
                                        <CodeIcon style={{fontSize: '60', padding: '4px'}}/>
                                    </IconButton>
                                    <Typography variant="subtitle1">Frontend</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className={classes.card}>
                                <div className={classes.cardContent}>
                                    <IconButton style={{background: 'rgba(0, 0, 0, 0.2)'}}>
                                        <StorageIcon style={{fontSize: '60', padding: '4px'}}/>
                                    </IconButton>
                                    <Typography variant="subtitle1">Backend</Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Skills;