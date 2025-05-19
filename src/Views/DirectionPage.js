import React from 'react';
import './DirectionPage.css';

const videoData = [
  {
    title: 'ALWAYS SEEM TO MISS HER - ROSEVILE SUCKS',
    artist: '',
    file: 'ALWAYS SEEMS TO MISS HER FINAL (2-16-25).mp4',
    url: 'https://www.youtube.com/watch?v=dfb0SEQA3d8'
  },
  {
    title: 'VISTA HOOP MIXTAPE',
    artist: '',
    file: 'VIS5A HOOP MIXTAPE (POSTED 3.24.25) v3.mp4',
    url: 'https://www.youtube.com/watch?v=WB3q_Zlh1dM'
  },
  {
    title: 'JAM OUT WITH VISTA',
    artist: '',
    file: 'RED HOT CHILI PEPPERS TEE  VIDEO FINAL.mp4',
    url: 'https://www.youtube.com/watch?v=v8laieFURhE'
  },
  {
    title: 'VISTA IN THE MAKING',
    artist: '',
    file: 'VISTA X PDL - MAKING VRO TEE .mp4',
    url: 'https://www.youtube.com/watch?v=_AuN7MFTWJU'
  },
  {
    title: 'HONEY BABY LIVE STREAM',
    artist: 'CHASE USA',
    file: 'CHASE PLATO 「HONEY BABY. I LOVE IT WHEN YOU CALL ME THAT !」(OFFICIAL LIVESTREAM).mp4',
    url: 'https://youtu.be/qPw1towQMMg'
  },
  {
    title: 'WISH YOU WHERE A GIRL',
    artist: 'CHASE USA',
    file: 'WYWAG 9-9-24 (FINAL).mp4',
    url: 'https://youtu.be/0oU-fI6ws4g'
  },
  {
    title: 'KILL YOUR FRIENDS',
    artist: 'CHASE USA',
    file: 'KYF FINAL.mp4',
    url: 'https://youtu.be/vBufSbB6_wI'
  },
  {
    title: 'CUP KISSER',
    artist: 'CHASE USA',
    file: 'CUP KISSER FINAL (YT VERSION).mp4',
    url: 'https://youtu.be/ciTbtj-onek'
  },
  {
    title: 'SWIPE STORY',
    artist: 'CHASE USA',
    file: 'SWIPE STORY UPLOAD READY 6-14-24.mp4',
    url: 'https://youtu.be/QL0rK0n5D4g'
  },
  {
    title: 'COWBOY BEPOP EPISODE 26 MINUTE 19:06',
    artist: 'CHASE USA',
    file: 'CHASE PLATO - BANG (COWBOY BEBOP EPISODE 26 MINUTE 19-06) 10-06-23.mp4',
    url: 'https://youtu.be/nbGJqNtT9Kg'
  },
  {
    title: 'SET YOU FREE',
    artist: 'CHASE USA',
    file: 'SET YOU FREE FINAL  10-20-22.mp4',
    url: 'https://youtu.be/Bhko6rRoqDU'
  },
  {
    title: 'STRANGER THAN FICTION',
    artist: 'CHASE USA',
    file: 'PLEASE FOR THE LOVE OF GOD LETS BE DONE.mp4',
    url: 'https://youtu.be/W-jrl3PzJw8'
  },
  {
    title: 'ICE CREAM MAN',
    artist: 'CHASE USA',
    file: 'ICE CREAM MAN FINAL FINAL.mp4',
    url: 'https://youtu.be/XsWXgK1okwE'
  },
  {
    title: 'HOLD',
    artist: 'CALEB PETERS',
    file: 'HOLD FINAL 1.mp4',
    url: ''
  },
  {
    title: 'STRAWBERRY BLONDE',
    artist: 'JACOB SIGMAN',
    file: 'Final v2 (Color).mp4',
    url: 'https://youtu.be/uGTkyQSYziQ'
  }
];

const MusicVideos = () => {
  const handleVideoClick = (title, artist) => {
    const label = artist ? `${title} - ${artist}` : title;
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Video',
        event_label: `Clicked – ${label}`,
      });
    }
  };

  return (
    <div className="music-videos-page">
      {videoData.map(({ title, artist, file, url }, index) => {
        const bunnyLink = `https://victor-videos.b-cdn.net/${file}`;
        const displayText = artist ? `${title} - ${artist}` : title;
        return (
          <div className="video-block" key={index}>
            <a
              href={url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleVideoClick(title, artist)}
            >
              <div className="video-wrapper">
                <video
                  src={bunnyLink}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="video"
                />
                <h2 className="video-title">{displayText}</h2>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default MusicVideos;
