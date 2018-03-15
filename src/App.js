import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import ImageGallery from 'react-image-gallery';

export default class ImageComponent extends React.Component {

  render() {
    const images = [
      {
        original: 'https://s3.amazonaws.com/sean.banton/chicago1.JPG',
        thumbnail: 'https://s3.amazonaws.com/sean.banton/chicago1thumb.JPG',
      },
      {
        original: 'https://s3.amazonaws.com/sean.banton/chicago2.JPG',
        thumbnail: 'https://s3.amazonaws.com/sean.banton/chicago2thumb.JPG',
      },
      {
        original: 'https://s3.amazonaws.com/sean.banton/chicago3.JPG',
        thumbnail: 'https://s3.amazonaws.com/sean.banton/chicago3thumb.JPG',
      },
      {
        original: 'https://s3.amazonaws.com/sean.banton/hostel.jpg',
        thumbnail: 'https://s3.amazonaws.com/sean.banton/hostelthumb.jpg',
      },
      {
        original: 'https://s3.amazonaws.com/sean.banton/whore.jpg',
        thumbnail: 'https://s3.amazonaws.com/sean.banton/whorethumb.jpg',
      },
      // {
      //   original: 'https://s3.amazonaws.com/sean.banton/biltmore.jpg',
      //   thumbnail: 'https://s3.amazonaws.com/sean.banton/biltmorethumb.jpeg',
      // },
      // {
      //   original: 'https://s3.amazonaws.com/sean.banton/cliff.jpg',
      //   thumbnail: 'https://s3.amazonaws.com/sean.banton/cliffthumb.jpg',
      // },
      // {
      //   original: 'https://s3.amazonaws.com/sean.banton/warehouse.jpeg',
      //   thumbnail: 'https://s3.amazonaws.com/sean.banton/warehousethumb.jpeg',
      // },
      {
        original: 'https://s3.amazonaws.com/sean.banton/pipes.JPG',
        thumbnail: 'https://s3.amazonaws.com/sean.banton/pipes.JPG',
      },
      {
        original: 'https://s3.amazonaws.com/sean.banton/lake.JPG',
        thumbnail: 'https://s3.amazonaws.com/sean.banton/lakethumb.JPG',
      }
    ]
    return (
      <ImageGallery items={images} />
    );
  }
}
