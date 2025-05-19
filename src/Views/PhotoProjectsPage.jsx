import React from "react";
import { Link } from "react-router-dom";
import "./PhotoProjectsPage.css";

// List of albums and a sample thumbnail from each
const albums = [
  {
    name: "FRIENDS (2023)",
    thumbnail: "/photos/PROJECTS/FRIENDS (2023)/Grisson_Victor-7.jpg",
    path: "friends-2023",
  },
  {
    name: "PERSONAL SPACE (2023)",
    thumbnail: "/photos/PROJECTS/PERSONAL SPACE (2023)/PS_1.jpg",
    path: "personal-space-2023",
  },
  {
    name: "NIGHT WALKS (2023)",
    thumbnail: "/photos/PROJECTS/NIGHT WALKS (2023)/NW_1.jpeg",
    path: "night-walks-2023",
  },
  {
    name: "JUST DON NCAA (2024)",
    thumbnail: "/photos/PROJECTS/JUST DON NCAA (2024)/4-7-25website-8054.jpg",
    path: "just-don-ncaa-2024",
  },
  {
    name: "ICE CREAM MAN (2022)",
    thumbnail: "/photos/PROJECTS/ICE CREAM MAN (2022)/2.jpg",
    path: "ice-cream-man-2022",
  },
  {
    name: "SET YOU FREE (2022)",
    thumbnail: "/photos/PROJECTS/SET YOU FREE (2022)/2.jpg",
    path: "set-you-free-2022",
  },
  {
    name: "STRANGER THAN FICTION (2022)",
    thumbnail: "/photos/PROJECTS/STRANGER THAN FICTION (2022)/5.jpg",
    path: "stranger-than-fiction-2022",
  },
];

export default function PhotoProjectsPage() {
  const handleAlbumClick = (albumName) => {
    if (window.gtag) {
      window.gtag("event", "click", {
        event_category: "Photo Album",
        event_label: `Photo Album Click – ${albumName}`,
      });
    }
  };

  return (
    <div className="albums-container">
      {albums.map((album) => (
        <Link
          key={album.name}
          to={`/photo-projects/${album.path}`}
          className="album-card"
          onClick={() => handleAlbumClick(album.name)}
        >
          <img src={album.thumbnail} alt={album.name} />
          <div className="overlay">{album.name}</div>
        </Link>
      ))}
    </div>
  );
}
