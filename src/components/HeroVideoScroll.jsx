import ImageSections from "./ImageSections";
import TextMask from "./TextMask";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroVideoScroll = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    function handleScrollOrClick() {
      if (window.scrollY === 1 || window.scrollY === 0) {
        setShowSplash(true);
      } else {
        setShowSplash(false);
      }
    }
    window.addEventListener("scroll", handleScrollOrClick);
    window.addEventListener("click", handleScrollOrClick);
    return () => {
      window.removeEventListener("scroll", handleScrollOrClick);
      window.removeEventListener("click", handleScrollOrClick);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Video de fundo fixo */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        style={{ pointerEvents: "none", background: "none" }}
      >
        <source src="/video2.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>
      {/* Tela preta inicial com logo e texto centralizados */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 w-full h-full bg-black flex flex-col items-center justify-center z-20"
            initial={{ opacity: 0, scale: 1.15, filter: "blur(16px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.92, filter: "blur(16px)" }}
            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.img
              src="/images/logo.jpeg"
              alt="Atlantis Logo"
              className="w-40 h-auto mb-8 drop-shadow-xl bg-transparent"
              draggable="false"
              initial={{ opacity: 0, y: 40, scale: 1.1, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, scale: 0.95, filter: "blur(8px)" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.h1
              className="text-white text-7xl md:text-9xl font-black tracking-widest drop-shadow-2xl text-center bg-transparent mb-8"
              initial={{ opacity: 0, y: 40, scale: 1.1, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, scale: 0.95, filter: "blur(8px)" }}
              transition={{ duration: 1, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              ATLANTIS
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      /* Efeito cinematográfico para splash logo/texto */ import "../App.css";
      {/* Conteúdo do site sobre o vídeo */}
      <TextMask />
      <ImageSections />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default HeroVideoScroll;
