import React from 'react';
import GoodsCard from './GoodsCard';

const Gallery = () => {
  const goodsList = [
    { id: 1, photo: 'https://www.freeiconspng.com/uploads/apple-fruit-cartoon-transparent-28.png', name: 'Apple', price: 100 },
    { id: 2, photo: 'https://static.vecteezy.com/system/resources/previews/009/597/281/original/pear-fruit-illustration-cartoon-png.png', name: 'Pear', price: 150 },
    { id: 3, photo: 'https://pngimg.com/d/pomegranate_PNG83945.png', name: 'Punica', price: 200 },
    { id: 4, photo: 'https://static.vecteezy.com/system/resources/previews/027/214/960/original/red-carrot-red-carrot-transparent-background-ai-generated-free-png.png', name: 'Carrot', price: 120 },
    { id: 5, photo: 'https://clipart-library.com/image_gallery/501031.png', name: 'Potato', price: 180 },
    { id: 6, photo: 'https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fruit-PNG/Large_Painted_Grapes_PNG_Clipart.png?m=1434276917', name: 'Grape', price: 250 },
  ];

  return (
    <div className="gallery">
      {goodsList.map((goods) => (
        <GoodsCard
          key={goods.id}
          photo={goods.photo}
          name={goods.name}
          price={goods.price}
        />
      ))}
    </div>
  );
};

export default Gallery;
