import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ExpandMore from '@material-ui/icons/ExpandMore';

import LegendCard from '../components/LegendCard';
import ChartCard from '../components/ChartCard';

import legend44Img from '../components/assets/img/legend_art/44.png';


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center",
    },
    box: {
        marginTop: 20,
    },
    chartBox: {
        width: "100%",
    },
    grid: {
        margin: "auto",
    }
}));

export default function LegendStats(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.box}>
                <Button variant="outlined" color="primary">
                    Legends
                    <ExpandMore />
                </Button>
            </Box>
            <Grid container className={classes.box}>
                <Grid lg={5} item className={classes.grid} >
                    <LegendCard legendImg={legend44Img} />
                </Grid>
                <Grid lg={7} item className={classes.grid} >
                    <ChartCard />
                </Grid>
            </Grid>
        </div>
    );
}