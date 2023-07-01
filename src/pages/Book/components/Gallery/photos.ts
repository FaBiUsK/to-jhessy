import photo_1 from "assets/photo_1.jpg";
import photo_2 from "assets/photo_2.jpg";
import photo_3 from "assets/photo_3.jpg";
// import photo_4 from "assets/photo_4.jpg";
// import photo_5 from "assets/photo_5.jpg";
// import photo_6 from "assets/photo_6.jpg";
import photo_7 from "assets/photo_7.jpg";
import photo_8 from "assets/photo_8.jpg";
import photo_9 from "assets/photo_9.jpg";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const allPhotos = [
  { src: photo_1, width: 1080, height: 1280 },
  { src: photo_2, width: 1080, height: 1280 },
  { src: photo_3, width: 1080, height: 1280 },
  { src: photo_7, width: 1080, height: 1280 },
  { src: photo_8, width: 1080, height: 1280 },
  { src: photo_9, width: 1080, height: 1280 },
];

const photos = allPhotos.map((photo) => ({
  src: photo.src,
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: photo.src,
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
