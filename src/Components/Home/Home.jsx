import React from 'react';
import classes from './HomeStyles.module.css';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

function Home() {
    return (  
        <Paper className={classes.heroImage} square elevation={0}>
            <div className={classes.overlay}></div>
            <Container maxWidth="lg" className={classes.container}>
                <div className={classes.content}>
                    
                </div>
            </Container>
        </Paper>
    );
}

export default Home;