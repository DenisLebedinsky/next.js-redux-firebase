import React, { useState, useEffect } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Image from './Image';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      backgroundColor: '#fff',
      height: 600,
    },
    oneImageBlock: {
      height: 600,
      overflow: 'hidden',
    },
    imageBlock: {
      width: '100%',
      height: 600,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      border: '2px solid #fff',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 600,
      overflow: 'hidden',
      border: '2px solid #fff',
    },
    smallImage: {
      width: '100%',
      height: 300,
      overflow: 'hidden',
      border: '1px solid #fff',
    },
    blockHoriz: {
      display: 'flex',
      width: '100%',
      height: 600,
    },
    blockVert: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    gridList: {
      width: '100%',
      height: 'auto',
    },
  })
);

interface GridListProps {
  images: string[];
}

export default function ImageGridList({ images }: GridListProps) {
  const classes = useStyles();

  const [width, setWidth] = useState(null);

  if (process.browser) {
    useEffect(() => setWidth(document.children[0].clientWidth), [
      document.children[0].clientWidth,
    ]);
  }

  const renderOneImage = () => {
    return (
      <div className={classes.oneImageBlock}>
        <Image url={images[0]} />
      </div>
    );
  };

  const renderTwoImages = () => {
    return (
      <div className={classes.blockHoriz}>
        <div className={classes.image}>
          <Image url={images[0]} />
        </div>
        <div className={classes.image}>
          <Image url={images[1]} />
        </div>
      </div>
    );
  };

  const renderThreeImages = () => {
    return (
      <div className={width < 800 ? classes.blockVert : classes.blockHoriz}>
        <div className={classes.image}>
          <Image url={images[1]} />
        </div>
        <div className={classes.blockHoriz}>
          <div className={classes.image}>
            <Image url={images[1]} />
          </div>
          <div className={classes.image}>
            <Image url={images[1]} />
          </div>
        </div>
      </div>
    );
  };

  const renderFourImages = () => {
    return (
      <div className={classes.blockHoriz}>
        <div className={classes.imageBlock}>
          <Image url={images[0]} />
        </div>

        <div className={classes.blockVert}>
          <div className={classes.blockHoriz}>
            <div className={classes.smallImage}>
              <Image url={images[1]} />
            </div>
            <div className={classes.smallImage}>
              <Image url={images[2]} />
            </div>
          </div>

          <div className={classes.blockHoriz}>
            <div className={classes.smallImage}>
              <Image url={images[3]} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderFiveImages = () => {
    return (
      <div className={classes.blockHoriz}>
        <div className={classes.imageBlock}>
          <Image url={images[0]} />
        </div>

        <div className={classes.blockVert}>
          <div className={classes.blockHoriz}>
            <div className={classes.smallImage}>
              <Image url={images[1]} />
            </div>
            <div className={classes.smallImage}>
              <Image url={images[2]} />
            </div>
          </div>

          <div className={classes.blockHoriz}>
            <div className={classes.smallImage}>
              <Image url={images[3]} />
            </div>
            <div className={classes.smallImage}>
              <Image url={images[4]} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (width < 800) {
    return (
      <div className={classes.root}>
        {images.length === 1 && renderOneImage()}
        {images.length === 2 && renderTwoImages()}
        {images.length > 2 && renderThreeImages()}
      </div>
    );
  }

  return (
    <div className={classes.root}>
      {images.length === 1 && renderOneImage()}
      {images.length === 2 && renderTwoImages()}
      {images.length === 3 && renderTwoImages()}
      {images.length === 4 && renderFourImages()}
      {images.length > 4 && renderFiveImages()}
    </div>
  );
}
