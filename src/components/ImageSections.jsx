import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageSections = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      const image = section.querySelector('.game-image');
      const content = section.querySelector('.content');

      // Animação de entrada das imagens
      gsap.fromTo(image, 
        { 
          scale: 1.2, 
          opacity: 0 
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 1
          }
        }
      );

      // Animação de entrada do conteúdo
      gsap.fromTo(content, 
        { 
          y: 50, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 30%",
            scrub: 1
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const gameFeatures = [
    {
      image: '/images/RenderV_1.0_7.jpg',
      title: 'CIDADE FUTURÍSTICA',
      description: 'Explore uma metrópole avançada com arquitetura impressionante e tecnologia de ponta.',
      features: ['Edifícios inteligentes', 'Transporte futurístico', 'Tecnologia avançada']
    },
    {
      image: '/images/RenderV_1.0_3.jpg',
      title: 'PARAÍSO TROPICAL',
      description: 'Descubra praias paradisíacas e águas cristalinas em um mundo de beleza natural.',
      features: ['Praias exóticas', 'Águas cristalinas', 'Paisagens deslumbrantes']
    },
    {
      image: '/images/RenderV_1.0_2.jpg',
      title: 'METRÓPOLE MODERNA',
      description: 'Navegue por uma cidade vibrante com arranha-céus imponentes e vida urbana dinâmica.',
      features: ['Arranha-céus modernos', 'Vida urbana', 'Arquitetura inovadora']
    },
    {
      image: '/images/RenderV_1.0.png',
      title: 'OÁSIS SECRETO',
      description: 'Encontre refúgios escondidos onde a natureza e a tecnologia coexistem em harmonia.',
      features: ['Locais secretos', 'Natureza preservada', 'Harmonia tecnológica']
    }
  ];

  return (
    <div className="bg-black">
      {gameFeatures.map((feature, index) => (
        <section
          key={index}
          ref={el => sectionsRef.current[index] = el}
          className={`game-section relative w-full min-h-screen flex items-center ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          } overflow-hidden`}
        >
          {/* Imagem */}
          <div className="w-1/2 h-screen relative">
            <img
              src={feature.image}
              alt={feature.title}
              className="game-image absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
          </div>

          {/* Conteúdo */}
          <div className="content w-1/2 p-16 text-white">
            <h3 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">
              {feature.title}
            </h3>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-300">
              {feature.description}
            </p>
            <ul className="space-y-4">
              {feature.features.map((item, idx) => (
                <li key={idx} className="flex items-center text-lg">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Seção de Call to Action */}
      <section className="relative w-full h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-teal-800 flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-8">
          <img 
            src="/images/logo.jpeg" 
            alt="Atlantis Logo" 
            className="w-48 h-auto mx-auto mb-12 opacity-90"
          />
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-wider">
            ATLANTIS
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed">
            O futuro chegou. Você está pronto para explorá-lo?
          </p>
          <div className="space-y-6">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 px-12 text-xl rounded-lg transition-all duration-300 transform hover:scale-105">
              JOGAR AGORA
            </button>
            <p className="text-lg text-white/80">
              Disponível em breve para PC, PlayStation e Xbox
            </p>
          </div>
        </div>
        
        {/* Efeito de partículas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-500"></div>
        </div>
      </section>
    </div>
  );
};

export default ImageSections;

