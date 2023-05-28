import { createContext, useEffect, useState } from "react";

export const VideoDataContext = createContext();

export function VideoDataProvider({ children }) {
  const [videoData, setVideoData] = useState(null);

  async function fetchVideos() {
    const json = await fetch(
      "https://internship-service.onrender.com/videos?page=2"
    );
    const data = await json.json();
    setVideoData(data.data);
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <VideoDataContext.Provider value={videoData}>
      {children}
    </VideoDataContext.Provider>
  );
}
