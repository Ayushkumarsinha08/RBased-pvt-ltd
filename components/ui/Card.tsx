"use client";
import React from "react";

export default function Card({
  title, 
  src, 
  description, 
  videoSrc
}: {
  readonly title: string, 
  readonly src: string, 
  readonly description: string,
  readonly videoSrc?: string
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  
  return (
    <div 
      className="cursor-pointer" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
       <div className="flex flex-col gap-4">
              {videoSrc ? (
                <video 
                  ref={videoRef}
                  className="rounded-md aspect-video mb-2" 
                  src={videoSrc} 
                  controls
                  muted
                  playsInline
                  preload="metadata"
                >
                  <track kind="captions" src="./captions.vtt" label="English captions" />
                </video>
              ) : (
                <div 
                  className="rounded-md aspect-video mb-2 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${src})` }}
                ></div>
              )}
              <h3 className="text-2xl tracking-tight">{title}</h3>
              <p className="text-muted-foreground text-lg">
                {description}
              </p>
            </div>
    </div>
  );
}