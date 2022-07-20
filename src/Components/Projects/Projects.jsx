import React from 'react';
import classes from './ProjectsStyles.module.css';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const projectTheme = createTheme({
    typography: {
        h4: {
            color: '#242A35'
        }
    }
});

function Projects() {
    return (  
        <ThemeProvider theme={projectTheme}>
        <div className={classes.projectsContainer}>
            <div className={classes.projectHeadingContainer}>
                <div className={classes.overlayProjectHeading}>Projects</div>
                <div className={classes.projectHeadingText}>
                    <Typography variant="h4" className={classes.projectUnderline}><span></span>Recent Work</Typography>
                </div>
            </div>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                <Grid item>
                    <Card sx={{width: '300px', height: '350px'}}>
                        <CardContent>
                            card 1
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{width: '300px', height: '350px'}}>
                        <CardContent>
                            card 2
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{width: '300px', height: '350px'}}>
                        <CardContent>
                            card 3
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
        </ThemeProvider>
    );
}

export default Projects;