import React, { useEffect, useRef, useState } from "react";
import "./video.css"; // Import the CSS file for styling

interface Props {
  stream: MediaStream;
  muted?: boolean;
}

const Video = ({ stream, muted }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) ref.current.srcObject = stream;
    if (muted) setIsMuted(muted);
  }, [stream, muted]);

  return React.createElement('div', { className: 'container' },
  React.createElement('video', { ref, className: 'video-container', muted: isMuted, autoPlay: true })
);

};

export default Video;
