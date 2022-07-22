import React from 'react';
import classes from './ProjectsStyles.module.css';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

// Projects Item
const projectMenuItems = [
    { id: '1', category: 'Brand Design', projectTitle: 'Asian Gallery Restaurant', url: '' },
    { id: '2', category: 'Brand Design', projectTitle: 'Granite Bay Brewing Co', url: '' },
    { id: '3', category: 'Packaging Design', projectTitle: 'The Ozi Tea & Coffee', url: '' },
    { id: '4', category: 'UI and UX', projectTitle: 'Jinsei Japanese Ramen', url: '' },
    { id: '5', category: 'UI and UX', projectTitle: 'Royal Shoreline Hotel', url: '' },
    { id: '6', category: 'Major Creative Media', projectTitle: 'Neotion', url: '' },
    { id: '7', category: 'Brand Design', projectTitle: 'Granite Bay Brewing Co', url: '' },
    { id: '8', category: 'Brand Design', projectTitle: 'Late Tax Ltd Pty', url: '' },
];

const projectTheme = createTheme({
    typography: {
        h4: {
            color: 'white'
        },
        subtitle2: {
            backgroundImage: 'linear-gradient(-45deg, #F68E1F, #FCB51D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        },
        button: {
            '&.MuiButton-outlined': {
                color: 'white',
            }
        }
    }
});

function Projects() {
    return (  
        <div className={classes.projectsSection}>
        <ThemeProvider theme={projectTheme}>
        <div className={classes.projectsContainer}>
            <div className={classes.projectHeadingContainer}>
                <div className={classes.overlayProjectHeading}>Projects</div>
                <div className={classes.projectHeadingText}>
                    <Typography variant="h4" className={classes.projectUnderline}><span></span>Recent Work</Typography>
                </div>
            </div>
            <div className={classes.cardContainer}>
                {projectMenuItems.map((item) => (
                    <div className={classes.card} key={item.id}>
                        <div className={classes.cardContent}>
                            <Typography variant="subtitle2">{item.category}</Typography>
                            <Button variant="outlined">View in Behance</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </ThemeProvider>
        </div>
    );
}

export default Projects;