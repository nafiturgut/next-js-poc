import React, { useEffect } from 'react';
import dynamic from 'next/dynamic'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SelectList from '../components/SelectList'

 const FilterTab = ( {selectData} ) =>  {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
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
     
        <Grid item xs={10}>
            <Paper >
  
            </Paper>
          </Grid>

          <Grid item xs={2}>
            <Paper className={classes.paper}>
            <SelectList data={selectData} />
  
            </Paper>
          </Grid>
         
        </Grid>
    )
  
}

export default dynamic(() => Promise.resolve(FilterTab), {
  ssr: false
})