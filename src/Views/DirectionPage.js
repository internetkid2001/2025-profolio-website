import React from 'react';
import './DirectionPage.css';

const videoData = [
  {
    title: 'ALWAYS SEEM TO MISS HER - ROSEVILE SUCKS',
    artist: '',
    file: 'ALWAYS SEEMS TO MISS HER FINAL (2-16-25).mov',
    url: 'https://www.youtube.com/watch?v=dfb0SEQA3d8&ab_channel=rosevilesucks'
  },
  {
    title: 'VISTA HOOP MIXTAPE',
    artist: '',
    file: 'VIS5A HOOP MIXTAPE (POSTED 3.24.25) v3.mov',
    url: 'https://www.youtube.com/watch?v=WB3q_Zlh1dM&ab_channel=VolunteersInServiceToArt'
  },
  {
    title: 'JAM OUT WITH VISTA',
    artist: '',
    file: 'RED HOT CHILI PEPPERS TEE  VIDEO FINAL.mov',
    url: 'https://www.youtube.com/watch?v=v8laieFURhE&ab_channel=VolunteersInServiceToArt'
  },
  {
    title: 'VISTA IN THE MAKING',
    artist: '',
    file: 'VISTA X PDL - MAKING VRO TEE .mov',
    url: 'https://www.youtube.com/watch?v=_AuN7MFTWJU&ab_channel=VolunteersInServiceToArt'
  },
  {
    title: 'HONEY BABY LIVE STREAM',
    artist: 'CHASE USA',
    file: 'CHASE PLATO 「HONEY BABY. I LOVE IT WHEN YOU CALL ME THAT !」(OFFICIAL LIVESTREAM).mov',
    url: 'https://youtu.be/qPw1towQMMg?si=YiEDC1zNBcsoaiWE'
  },
  {
    title: 'WISH YOU WHERE A GIRL',
    artist: 'CHASE USA',
    file: 'WYWAG 9-9-24 (FINAL).mov',
    url: 'https://youtu.be/0oU-fI6ws4g?si=eqrQTsIhZHWuB4sG'
  },
  {
    title: 'KILL YOUR FRIENDS',
    artist: 'CHASE USA',
    file: 'KYF FINAL.mov',
    url: 'https://youtu.be/vBufSbB6_wI?si=x4m4ymBTpp5YwVEU'
  },
  {
    title: 'CUP KISSER',
    artist: 'CHASE USA',
    file: 'CUP KISSER FINAL (YT VERSION).mov',
    url: 'https://youtu.be/ciTbtj-onek?si=8gQfhdYXGDnPT5Yb'
  },
  {
    title: 'SWIPE STORY',
    artist: 'CHASE USA',
    file: 'SWIPE STORY UPLOAD READY 6-14-24.mov',
    url: 'https://youtu.be/QL0rK0n5D4g?si=w--9JHaH3UotJkvS'
  },
  {
    title: 'COWBOY BEPOP EPISODE 26 MINUTE 19:06',
    artist: 'CHASE USA',
    file: 'CHASE PLATO - BANG (COWBOY BEBOP EPISODE 26 MINUTE 19-06) 10-06-23.mp4',
    url: 'https://youtu.be/nbGJqNtT9Kg?si=qCYnciIkmFVj1V96'
  },
  {
    title: 'SET YOU FREE',
    artist: 'CHASE USA',
    file: 'SET YOU FREE FINAL  10-20-22.mov',
    url: 'https://youtu.be/Bhko6rRoqDU?si=741m8YyszHARnPYo'
  },
  {
    title: 'STRANGER THAN FICTION',
    artist: 'CHASE USA',
    file: 'PLEASE FOR THE LOVE OF GOD LETS BE DONE.mov',
    url: 'https://youtu.be/W-jrl3PzJw8?si=nl5voqw2hzsP66Kj'
  },
  {
    title: 'ICE CREAM MAN',
    artist: 'CHASE USA',
    file: 'ICE CREAM MAN FINAL FINAL.mov',
    url: 'https://youtu.be/XsWXgK1okwE?si=Ek7cWD5DcZV03Pny'
  },
  {
    title: 'HOLD',
    artist: 'CALEB PETERS',
    file: 'HOLD FINAL 1.mov',
    url: '' // No URL provided
  },
  {
    title: 'STRAWBERRY BLONDE',
    artist: 'JACOB SIGMAN',
    file: 'Final v2 (Color).mov',
    url: 'https://youtu.be/uGTkyQSYziQ'
  }
];

const MusicVideos = () => {
  return (
    <div className="music-videos-page">
      {videoData.map(({ title, artist, file, url }, index) => {
        const src = `/videos/${file}`;
        const displayText = artist ? `${title} - ${artist}` : title;
        return (
          <div className="video-block" key={index}>
            <a href={url || '#'} target="_blank" rel="noopener noreferrer">
              <div className="video-wrapper">
                <video
                  src={src}
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
