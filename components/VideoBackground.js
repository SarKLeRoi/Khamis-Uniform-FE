import React from "react";
import Navbar from "../components/Navbar";
import TitleRow from "../components/TitleRow";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/marble-white22.webp"
        className="background-video"
      >
        {/* MP4 - Best compatibility for Safari */}
        <source src="../videos/1207.mp4" type="video/mp4" />
        {/* WebM - Better compression, good for modern browsers */}
        <source src="../videos/1207.webm" type="video/webm" />
        {/* Fallback for older browsers */}
        <source src="../videos/1207.ogv" type="video/ogg" />

        {/* Fallback content for browsers that don't support video */}
        <div className="video-fallback">
          <img
            src="/images/marble-white22.webp"
            alt="Background texture"
            className="fallback-image"
          />
        </div>
      </video>

      <div className="video-overlay">{/* Content overlay */}</div>

      {/* Fallback for iOS Safari when video doesn't load */}
      <div className="ios-fallback" style={{ display: "none" }}>
        <img
          src="/images/marble-white22.webp"
          alt="Background texture"
          className="ios-fallback-image"
        />
      </div>
    </div>
  );
};

export default VideoBackground;
