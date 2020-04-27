import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
    root: {
        marginLeft: 10,
        width: 217,
    },
});

function valuetext(value) {
    return `${value}`;
}

function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

export default function RangeSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 5000000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Диапазон цен
      </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                // valueLabelDisplay="auto"
                ValueLabelComponent={ValueLabelComponent}
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                step={1000}
                max={20000000}
            />
        </div>
    );
}
