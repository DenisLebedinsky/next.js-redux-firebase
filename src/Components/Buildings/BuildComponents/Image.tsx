import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 1s linear',
      transform: 'scale(1)',
      '&:hover':{
          transform: 'scale(1.2)'
      }
    },
  })
);

interface ImageProps {
  url: string;
}

const Image = ({ url }: ImageProps) => {
  const classes = useStyles();
  return (
    <div>
      <img className={classes.image} src={url} alt={'dawda'} />
    </div>
  );
};

export default Image;
