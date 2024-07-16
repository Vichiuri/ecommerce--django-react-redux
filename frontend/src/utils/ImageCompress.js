import RandomString from "./RandomString";
import Resizer from "react-image-file-resizer";
import Compressor from "compressorjs";

export default function ImageCompress(imageFile) {
  // return new Promise((resolve, reject) => {
  //   Resizer.imageFileResizer(
  //     imageFile,
  //     300,
  //     300,
  //     "PNG",
  //     100,
  //     0,
  //     (uri) => {
  //       let filename = RandomString(10);
  //       var file = new File([uri], `${filename}.png`, {
  //         type: "image/png",
  //         lastModified: new Date().getTime(),
  //       });
  //       resolve(file);
  //     },
  //     "blob"
  //   );
  // });
  return new Promise((resolve, reject) => {
    new Compressor(imageFile, {
        quality: 1,
        // height: 300,
        // width: 300,
        success(result) {
          let filename = RandomString(10);
        var file = new File([result], `${filename}.png`, {
          type: "image/png",
          lastModified: new Date().getTime(),
        });
        resolve(file);
        },
        error(err) {
            reject(err);
        }
    });
});
}
