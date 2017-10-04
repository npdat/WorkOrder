import ImagePicker from 'react-native-image-crop-picker';

let pick = (cb) => {
  ImagePicker.openPicker({
    multiple: true,
    maxFiles: 100,
    waitAnimationEnd: false
  }).then(images => {
    cb(images);
  }).catch(e => console.log(e));
}

let capture = (cb) => {
  ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    cb(image);
  });
}

export { pick, capture };
