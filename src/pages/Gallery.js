// import React from "react";

// const images = require.context("../images", true);
// const images_list = images.keys().map((image) => images(image));

// export default function Gallery() {
//   console.log(images_list[0]);

//   return (
//     <section id="gallery" className="gallery">
//       <div className="gallery-grid">
//         {images_list.map((image, index) => (
//           <div className="gallery-photo">
//             <img key={index} src={images_list[index]} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";

import "../styles/Gallery.css";

const images = require.context("../gallery", true);
const images_list = images.keys().map((image) => images(image));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-grid">
        {images_list.map((image, index) => (
          <div className="gallery-photo" key={index}>
            <img
              src={image}
              alt={`Gallery ${index}`}
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            className="lightbox-image"
            alt="Expanded view"
          />
        </div>
      )}
    </section>
  );
}
