import React from "react";
import Container from "./Container";

interface YouTubeVideoProps {
  url: string;
  title?: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ url, title }) => {
  const getVideoId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };
  const videoId = getVideoId(url);
  return (
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoId}?controls=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
  );
};

export default YouTubeVideo;
