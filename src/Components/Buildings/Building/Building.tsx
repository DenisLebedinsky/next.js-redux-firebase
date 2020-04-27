import * as React from 'react';
import ImageGridList from '../BuildComponents/ImageGridList';
import { BuildingProps } from './Bulding.type';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 1s linear',
      transform: 'scale(1)',
    },
  })
);

const images = [
  'https://source.unsplash.com/random',
  'https://source.unsplash.com/random',
];

export default function Building({ id }:BuildingProps) {
  return (
    <div>
      <ImageGridList images={images} />
      <p>{id}</p>
    </div>
  );
}
