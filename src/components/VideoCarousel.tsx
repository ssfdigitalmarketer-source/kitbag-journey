import { useState } from "react";

const videos = [
  {
    id: 1,
    thumbnail: "https://res.cloudinary.com/demo/video/upload/so_0/sample.jpg",
    src: "https://res.cloudinary.com/demo/video/upload/sample.mp4",
  },
  {
    id: 2,
    thumbnail: "https://res.cloudinary.com/demo/video/upload/so_0/ocean.jpg",
    src: "https://res.cloudinary.com/demo/video/upload/ocean.mp4",
  },
];

function VideoModal({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      {/* Click outside to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Video container */}
      <div className="relative z-10 w-[90vw] max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
        <video
          src={src}
          controls
          autoPlay
          className="w-full h-full object-cover"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-black/70 text-white w-10 h-10 rounded-full"
        >
          ✕
        </button>
      </div>
    </div>
  );
}


export default function VideoCarousel({}) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      {/* Carousel */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide px-4">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setActiveVideo(video.src)}
            className="relative flex-shrink-0 w-72 aspect-video rounded-lg overflow-hidden group"
          >
            <img
              src={video.thumbnail}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Play icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                ▶
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Floating Player */}
      {activeVideo && (
        <VideoModal src={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  );
}
