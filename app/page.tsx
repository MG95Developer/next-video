import Video from "next-video";
import videoSample from "/videos/video-sample.mp4";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center">
        <Video
          src={videoSample}
          autoPlay
          muted
          loop
          playsInline
          controls={false} // false if it's a bg video inside hero section
          className=""
        ></Video>
      </div>
    </>
  );
}
