import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';
import heroVideoUrl from '@/assets/hero-video2.mov'

const HeroBanner = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const textContent = [
    {
      title: "Discover Unique Handcrafted Items",
      subtitle: "From independent creators around the world",
      cta: "Shop Now"
    },
    {
      title: "Support Small Businesses",
      subtitle: "Every purchase makes a difference",
      cta: "Browse Collections"
    },
    {
      title: "Find Your Perfect Match",
      subtitle: "Personalized recommendations just for you",
      cta: "Explore"
    }
  ];

  // Auto-change text every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [textContent.length]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const currentText = textContent[currentTextIndex];

  return (
    <section className="relative h-[500px] lg:h-[500px] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 
            key={`title-${currentTextIndex}`}
            className="text-4xl lg:text-6xl font-bold text-white leading-tight animate-fade-in"
          >
            {currentText.title}
          </h2>
          <p 
            key={`subtitle-${currentTextIndex}`}
            className="text-xl lg:text-2xl text-white/90 font-medium animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            {currentText.subtitle}
          </p>
          {/* <Button 
            size="lg" 
            className="btn-primary text-lg px-8 py-4 mt-8 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            {currentText.cta}
          </Button> */}
        </div>
      </div>

      {/* Video Controls */}
      {/* <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
        onClick={toggleVideo}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button> */}
    </section>
  );
};

export default HeroBanner;