import React, { useState } from "react";
import { useMusicPlayer } from "../../contexts/MusicPlayerContext";
import "./GlobalMusicPlayer.css";

const GlobalMusicPlayer = () => {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    handleNext,
    handlePrevious,
    currentTime,
    duration,
    seekTo,
    hasStartedPlaying,
  } = useMusicPlayer();

  const [isExpanded, setIsExpanded] = useState(false);

  // Não renderizar se o usuário nunca deu play
  if (!hasStartedPlaying || !currentSong) return null;

  // Não renderizar se o usuário nunca deu play
  if (!hasStartedPlaying || !currentSong) return null;

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickRatio = clickX / width;
    const newTime = clickRatio * duration;
    seekTo(newTime);
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={`global-music-player ${isExpanded ? "expanded" : "collapsed"}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Versão colapsada - apenas o ícone de música */}
      <div className="player-collapsed">
        <div className="music-icon">
          <div className={`vinyl-mini ${isPlaying ? "spinning" : ""}`}>
            <img src={currentSong.diskArt} alt={currentSong.title} />
          </div>
          <div className="play-indicator">
            {isPlaying ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Versão expandida - player completo */}
      <div className="player-expanded">
        <div className="expanded-content">
          <div className="song-artwork-expanded">
            <img src={currentSong.diskArt} alt={currentSong.title} />
          </div>

          <div className="song-details-expanded">
            <div className="song-title-expanded">{currentSong.title}</div>
            <div className="song-artist-expanded">{currentSong.artist}</div>
          </div>

          <div className="progress-section-expanded">
            <span className="time-current">{formatTime(currentTime)}</span>
            <div
              className="progress-bar-expanded"
              onClick={handleProgressClick}
            >
              <div
                className="progress-fill-expanded"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="time-duration">{formatTime(duration)}</span>
          </div>

          <div className="player-controls-expanded">
            <button onClick={handlePrevious} className="control-btn-expanded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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

            <button onClick={togglePlay} className="play-btn-expanded">
              {isPlaying ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>

            <button onClick={handleNext} className="control-btn-expanded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
      </div>
    </div>
  );
};

export default GlobalMusicPlayer;
