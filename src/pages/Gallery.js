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

const captions = [
  "The band at Dingwalls2",
  "James and his Lemsip",
  "Sick crowd",
  // ... one for each image
];

console.log(images_list.map((img) => img));

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-grid">
        {images_list.map((image, index) => (
          <div className="gallery-photo" key={index}>
            <img
              src={image}
              alt={`Gallery ${index}`}
              onClick={() => setSelectedIndex(index)}
            />
          </div>
        ))}
      </div>
      {selectedIndex !== null && (
        <div className="lightbox" onClick={() => setSelectedIndex(null)}>
          <div className="lightbox-content">
            <img
              src={images_list[selectedIndex]}
              className="lightbox-image"
              alt="Expanded view"
            />
            {captions[selectedIndex] && (
              <p className="lightbox-caption">{captions[selectedIndex]}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
