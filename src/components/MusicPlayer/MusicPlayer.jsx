import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useMusicPlayer } from "../../contexts/MusicPlayerContext";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const {
    songs,
    currentSongIndex,
    isPlaying,
    isFlipping,
    handleNext,
    handlePrevious,
    togglePlay,
  } = useMusicPlayer();

  const diskRef = useRef(null);

  const handleFlip = (direction) => {
    if (isFlipping) return;

    const currentRotation = gsap.getProperty(diskRef.current, "rotateY");
    gsap.to(diskRef.current, {
      duration: 1,
      rotateY: currentRotation + 180,
      ease: "power1.inOut",
    });

    if (direction === "next") {
      handleNext();
    } else {
      handlePrevious();
    }
  };

  const handlePreviousClick = () => handleFlip("prev");
  const handleNextClick = () => handleFlip("next");

  return (
    <div className="player-container">
      <div className="vinyl-container">
        <div className="disk-wrapper" ref={diskRef}>
          <div className="disk-side front">
            <img
              src={songs[0].diskArt}
              alt={`Vinyl for ${songs[0].title}`}
              className={isPlaying ? "spinning" : ""}
            />
          </div>
          <div className="disk-side back">
            <img
              src={songs[1].diskArt}
              alt={`Vinyl for ${songs[1].title}`}
              className={isPlaying ? "spinning" : ""}
            />
          </div>
        </div>
      </div>

      <div className="song-info">
        <h2>{songs[currentSongIndex].title}</h2>
        <p>{songs[currentSongIndex].artist}</p>
      </div>

      <div className="controls">
        <button
          onClick={handlePreviousClick}
          className="control-button"
          aria-label="Previous track"
          disabled={isFlipping}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 20L9 12l10-8v16z" />
            <line x1="5" y1="19" x2="5" y2="5" />
          </svg>
        </button>

        <button
          onClick={togglePlay}
          className="play-button"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>

        <button
          onClick={handleNextClick}
          className="control-button"
          aria-label="Next track"
          disabled={isFlipping}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 4l10 8-10 8V4z" />
            <line x1="19" y1="5" x2="19" y2="19" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
