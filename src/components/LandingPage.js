import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

// Assets
import PlanetGif from "../assets/images/gifs/planet.gif";
import VistaImage from "../assets/images/gifs/DOCTYPE VISTA.png";
import Song from "../assets/images/gifs/The Smashing Pumpkins - 1979 (Instrumental) [hcRLp8KmluI].mp3";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    audioRef.current = new Audio(Song);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.75;

    // Cleanup when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isAudioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  const handleEnter = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/direction");
    }, 600);
  };

  return (
    <div className={`landing-container ${isTransitioning ? "fade-out" : ""}`}>
      <video
        className="video-background"
        src="/videos/WEBSITE FRONT PAGE.mp4"
        autoPlay
        muted
        loop
      />

      <a href="https://www.vist4.net/" className="logo-top-left">
        <img src={VistaImage} alt="Vista Logo" />
      </a>

      {isLoading && (
        <div className="loader-overlay">
          <img src={PlanetGif} alt="Loading" className="loader-image" />
        </div>
      )}

      {!isLoading && (
        <>
          <button onClick={handleEnter} className="enter-button">
            Enter Site
          </button>
          <button onClick={toggleAudio} className="audio-button">
            {isAudioPlaying ? "Mute" : "Unmute"}
          </button>
        </>
      )}
    </div>
  );
}
