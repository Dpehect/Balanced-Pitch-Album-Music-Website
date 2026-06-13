import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

const MusicPlayerContext = createContext();

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");
  }
  return context;
};

export const MusicPlayerProvider = ({ children }) => {
  const songs = [
    {
      id: 1,
      title: "Dreamland",
      artist: "By Balanced Pitch",
      diskArt: "/songs/dreamland.png",
      mp3: "/songs/dreamland.mp3",
    },
    {
      id: 2,
      title: "Gameplay",
      artist: "By Balanced Pitch",
      diskArt: "/songs/gameplay.png",
      mp3: "/songs/gameplay.mp3",
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const audioRef = useRef(null);

  // Inicializar o áudio
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.preload = "metadata";

      // Event listeners
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });

      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(audioRef.current.currentTime);
      });

      audioRef.current.addEventListener("ended", handleNext);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("loadedmetadata", () => {});
        audioRef.current.removeEventListener("timeupdate", () => {});
        audioRef.current.removeEventListener("ended", handleNext);
      }
    };
  }, []);

  // Carregar nova música quando o índice muda
  useEffect(() => {
    if (audioRef.current && songs[currentSongIndex]) {
      const wasPlaying = isPlaying;
      audioRef.current.src = songs[currentSongIndex].mp3;
      audioRef.current.load();

      if (wasPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentSongIndex]);

  // Controlar play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleNext = () => {
    if (isFlipping) return;
    setIsFlipping(true);

    const nextIndex =
      currentSongIndex === songs.length - 1 ? 0 : currentSongIndex + 1;
    setCurrentSongIndex(nextIndex);

    setTimeout(() => {
      setIsFlipping(false);
    }, 1000);
  };

  const handlePrevious = () => {
    if (isFlipping) return;
    setIsFlipping(true);

    const prevIndex =
      currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);

    setTimeout(() => {
      setIsFlipping(false);
    }, 1000);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Marcar que o usuário já iniciou a reprodução pelo menos uma vez
    if (!hasStartedPlaying) {
      setHasStartedPlaying(true);
    }
  };

  const seekTo = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const value = {
    songs,
    currentSongIndex,
    isPlaying,
    isFlipping,
    currentTime,
    duration,
    hasStartedPlaying,
    handleNext,
    handlePrevious,
    togglePlay,
    seekTo,
    currentSong: songs[currentSongIndex],
  };

  return (
    <MusicPlayerContext.Provider value={value}>
      {children}
    </MusicPlayerContext.Provider>
  );
};
