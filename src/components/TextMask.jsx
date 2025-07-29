import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextMask = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const video = videoRef.current;

    if (!container || !text || !video) return;

    // Configurar o vídeo
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.loop = true;

    // Animação de entrada do texto
    gsap.fromTo(text, 
      { 
        scale: 0.5, 
        opacity: 0 
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 20%",
          scrub: 1
        }
      }
    );

    // Controlar vídeo com scroll
    const handleLoadedMetadata = () => {
      const duration = video.duration;
      
      ScrollTrigger.create({
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          video.currentTime = progress * duration;
        },
        onEnter: () => {
          video.play().catch(console.error);
        },
        onLeave: () => {
          video.pause();
        },
        onEnterBack: () => {
          video.play().catch(console.error);
        },
        onLeaveBack: () => {
          video.pause();
        }
      });
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.load();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Vídeo de fundo */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        muted
        playsInline
        preload="auto"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Texto com máscara de vídeo */}
      <div 
        ref={textRef}
        className="relative z-10 text-center"
        style={{
          background: 'url(/video.mp4)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'contrast(1.2) brightness(1.1)'
        }}
      >
        <h2 className="text-8xl md:text-9xl font-black tracking-wider leading-none">
          ATLANTIS
        </h2>
        <p className="text-2xl md:text-3xl font-bold tracking-wide mt-4 text-white">
          EXPLORE O IMPOSSÍVEL
        </p>
      </div>

      {/* Overlay para melhor contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50 pointer-events-none"></div>
    </section>
  );
};

export default TextMask;

