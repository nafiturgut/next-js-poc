import React, { useEffect } from 'react';
import dynamic from 'next/dynamic'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from './summary/ProgressBar'
import ConversionBox from './summary/ConversionBox'

 const SummaryTab = (  ) =>  {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      height: 150,
      textAlign: 'center',
      color: theme.palette.text.secondary,

    },
    headPaper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      
    },
  }));
    
  const classes = useStyles()
    return (
        <Grid container spacing={3}>

          <Grid item xs={3}>
            <Paper className={classes.paper}>
            <ProgressBar data={75}/>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
                <ConversionBox data= {7}/>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
    )
  
}

export default dynamic(() => Promise.resolve(SummaryTab), {
  ssr: false
})