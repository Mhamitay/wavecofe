import React from "react";
import Content from "../components/content";
function Home() {
  return (
    <>
      <Content />
      <div class="tm-video-wrapper">
        <i id="tm-video-control-button" class="fas fa-pause"></i>
        <video
          autoPlay
          muted
          loop
          id="tm-video"
          style={{ backgroundColor: "black" }}
        >
          <source src="video/bgvideo.mp4" color="black" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Home;
