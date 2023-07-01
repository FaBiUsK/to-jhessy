const photo_1 = "https://media.tenor.com/mMlztwD7tw4AAAAj/mimibubu.gif";
const photo_2 =
  "https://media.tenor.com/8trqa66_h6MAAAAj/dudu-bubu-bear-and-panda.gif";
const photo_3 =
  "https://media.tenor.com/008My4n0eLYAAAAj/tkthao219-bubududu.gif";
const photo_7 = "https://media.tenor.com/-lTZPVhCHFkAAAAj/sena-ahmet.gif";
const photo_8 = "https://media.tenor.com/yGVPGGRTdA0AAAAj/bubududu-panda.gif";
const photo_9 =
  "https://media.tenor.com/pUQGNMgYn1cAAAAj/tkthao219-bubududu.gif";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const allBears = [
  { src: photo_1, width: 1080, height: 1080 },
  { src: photo_2, width: 1080, height: 1080 },
  { src: photo_3, width: 1080, height: 1080 },
  { src: photo_7, width: 1080, height: 1080 },
  { src: photo_8, width: 1080, height: 1080 },
  { src: photo_9, width: 1080, height: 1080 },
];

const photos = allBears.map((photo) => ({
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
