import { useRef, useEffect } from 'react';

const SimpleVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      
      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        video.currentTime = 10; // Ir para 10 segundos
      };

      const handleError = (e) => {
        console.error('Video error:', e);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls
        muted
        playsInline
        preload="auto"
      >
        <source src="/video2.mp4" type="video2/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>
    </div>
  );
};

export default SimpleVideo;

