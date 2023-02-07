import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import nude1 from '../images/nude1.png';
import nude2 from '../images/nude2.png';
import nude3 from '../images/nude3.png';
import nude4 from '../images/nude4.png';
import nude5 from '../images/nude5.png';
import nude6 from '../images/nude6.png';
import nude7 from '../images/nude7.png';
import nude8 from '../images/nude8.png';
import nude9 from '../images/nude9.png';
import nude10 from '../images/nude10.png';
import nude11 from '../images/nude11.png';
import nude12 from '../images/nude12.png';
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: nude1,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: nude2,
    title: 'Burger',
  },
  {
    img: nude3,
    title: 'Camera',
  },
  {
    img: nude4,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: nude5,
    title: 'Hats',
    cols: 2,
  },
  {
    img: nude6,
    title: 'Honey',
    rows: 2,
    cols: 2,
  },
  {
    img: nude7,
    title: 'Basketball',
  },
  {
    img: nude8,
    title: 'Fern',
  },
  {
    img: nude9,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: nude10,
    title: 'Tomato basil',
  },
  {
    img: nude11,
    title: 'Sea star',
  },
  {
    img: nude12,
    title: 'Bike',
    cols: 2,
  },
];
