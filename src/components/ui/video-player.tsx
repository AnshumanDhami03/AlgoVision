
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl: string;
  altText?: string; // Optional alt text for the image
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, posterUrl, altText = "Algorithm animation placeholder" }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log("Video play failed:", error));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to start
    }
  };

  return (
    <div
      className="relative w-full h-40 rounded-t-md overflow-hidden group cursor-pointer bg-muted"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        src={videoUrl}
        loop
        muted
        playsInline
        preload="none"
        poster={posterUrl}
      />
      <Image
        src={posterUrl}
        alt={altText}
        layout="fill"
        objectFit="cover"
        className="transition-opacity duration-300 group-hover:opacity-0"
        data-ai-hint="algorithm animation"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ChevronRight className="h-12 w-12 text-white opacity-70 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
      </div>
    </div>
  );
};

export default VideoPlayer;
