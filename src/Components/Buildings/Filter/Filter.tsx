import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PriceSlider from './Slider/PriceSlider';
import DistrictSelect from './Selects/DistrictSelect'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Search from './Search';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        top: '-40px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: 10
    },
    panel:{
        display: 'flex',
        alignItems: 'center'
    },
    panelDetails: {
        display: 'flex',
        flexDirection: 'column'
    },
    btnBlock: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
        flexWrap:'wrap'
    },
    btn: {
        width: 200,
        margin: 5
    }
}));

export default function SimpleExpansionPanel() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className={classes.panel}>
                        <Typography className={classes.heading}>Фильтр</Typography>
                        <Chip
                            label={`Применено ${4}`}
                            onDelete={()=>{console.log('clean filter')}} 
                            color="primary" />
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className={classes.panelDetails}>
                        <Grid container spacing={4} alignItems="flex-start">
                            <Grid item xs={12} sm={6} md={4}>
                                <Search />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <DistrictSelect />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <DistrictSelect />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <DistrictSelect />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <DistrictSelect />
                            </Grid>



                            <Grid item xs={12} sm={6} md={4}>
                                <PriceSlider />
                            </Grid>
                        </Grid>

                        <div className={classes.btnBlock}>
                            <Button className={classes.btn}>очистить</Button>
                            <Button variant="contained" className={classes.btn}>Применить</Button>
                        </div>

                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>


        </div>
    );
}
