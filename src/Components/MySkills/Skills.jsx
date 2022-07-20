import React from 'react';
import classes from './SkillsStyles.module.css';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const skillTheme = createTheme ({
    typography: {
        h4: {
            fontWeight: '500',
            paddingBottom: '.5em',
            color: 'white'
        },
        h6: {
            paddingBottom: '3px',
            fontWeight: '500',
            color: 'white'
        }
       
    }
});

function Skills() {
    return (  
        <ThemeProvider theme={skillTheme}>
            <div className={classes.skillsContainer}>
                <div className={classes.skillHeadingContainer}>
                    <div className={classes.overlaySkillHeading}>Skills</div>
                    <div className={classes.skillHeadingText}>
                        <Typography variant="h4" className={classes.skillUnderline}><span></span>My Skills</Typography>
                    </div>
                </div>
                <div className={classes.skillBarContent}>
                    <div className={classes.skillBarItem}>Hello</div>
                    <div className={classes.skillBarItem}>World</div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Skills;