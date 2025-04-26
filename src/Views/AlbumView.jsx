import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AlbumView.css";

const albumImages = {
  "friends-2023": Array.from({ length: 15 }, (_, i) => `/photos/PROJECTS/FRIENDS (2023)/Grisson_Victor-${i + 1}.jpg`),
  "ice-cream-man-2022": Array.from({ length: 16 }, (_, i) => `/photos/PROJECTS/ICE CREAM MAN (2022)/${i + 1}.jpg`),
  "just-don-ncaa-2024": [
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8054.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8056.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8057.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8058.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8059.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8060.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8124.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8150.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8163.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8189.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8194.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8201-2.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8201.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8216.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8258.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8268.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8341-2.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8341.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8362.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8497.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8505.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8506.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8537.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8705.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8708.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8729.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8750.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8823.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8873.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8880.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8902.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/Just Don Yeabook 1.jpg",
    "/photos/PROJECTS/JUST DON NCAA (2024)/Just Don Yearbook 2 (4-25-24).jpg",
  ],
  "night-walks-2023": [
    "/photos/PROJECTS/NIGHT WALKS (2023)/NW_1.jpeg",
    "/photos/PROJECTS/NIGHT WALKS (2023)/NW_2.jpeg",
    "/photos/PROJECTS/NIGHT WALKS (2023)/NW_3.jpeg",
    "/photos/PROJECTS/NIGHT WALKS (2023)/NW_4.jpeg",
    "/photos/PROJECTS/NIGHT WALKS (2023)/NW_5.jpeg",
  ],
  "personal-space-2023": [
    "/photos/PROJECTS/PERSONAL SPACE (2023)/PS_1.jpg",
    "/photos/PROJECTS/PERSONAL SPACE (2023)/PS_2.jpg",
    "/photos/PROJECTS/PERSONAL SPACE (2023)/PS_3.jpg",
    "/photos/PROJECTS/PERSONAL SPACE (2023)/PS_4.jpg",
    "/photos/PROJECTS/PERSONAL SPACE (2023)/PS_5.jpg",
  ],
  "set-you-free-2022": Array.from({ length: 20 }, (_, i) => `/photos/PROJECTS/SET YOU FREE (2022)/${i + 1}.jpg`),
  "stranger-than-fiction-2022": Array.from({ length: 18 }, (_, i) => `/photos/PROJECTS/STRANGER THAN FICTION (2022)/${i + 1}.jpg`),
};

export default function AlbumView() {
  const { albumId } = useParams();
  const images = albumImages[albumId] || [];

  const [enlargedIndex, setEnlargedIndex] = useState(null);

  const handleKeyDown = (e) => {
    if (enlargedIndex === null) return;

    if (e.key === "ArrowRight") {
      setEnlargedIndex((prev) => (prev + 1) % images.length);
    } else if (e.key === "ArrowLeft") {
      setEnlargedIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (e.key === "Escape") {
      setEnlargedIndex(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="album-view-container">
      <h1 className="album-title">{albumId.replace(/-/g, " ").toUpperCase()}</h1>

      <div className="photo-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`photo-${index + 1}`}
            className="photo-grid-item"
            onClick={() => setEnlargedIndex(index)}
          />
        ))}
      </div>

      {enlargedIndex !== null && (
        <div className="enlarged-overlay" onClick={() => setEnlargedIndex(null)}>
          <img
            src={images[enlargedIndex]}
            className="enlarged-photo"
            alt={`enlarged-${enlargedIndex + 1}`}
          />
        </div>
      )}
    </div>
  );
}
