# 🌊 Atlantis - Site Promocional Cinematográfico

Um site promocional imersivo e cinematográfico para o lançamento do jogo Atlantis, com experiência visual inspirada em sites como o do GTA VI.

## ✨ Características Principais

### 🎬 Vídeo Controlado por Scroll
- O vídeo avança e retrocede conforme o usuário rola a página
- Sincronização precisa entre scroll e timeline do vídeo
- Reprodução automática sem controles visíveis

### 🎭 Efeito de Máscara de Texto
- Vídeo exibido dentro das letras do nome "ATLANTIS"
- Efeito visual imersivo usando CSS `background-clip: text`
- Animações de entrada suaves

### 🖼️ Seções Interativas
- 4 seções com imagens promocionais do jogo
- Layout alternado (esquerda/direita) para dinamismo
- Animações GSAP sincronizadas com scroll

### ⚡ Performance Otimizada
- Rolagem fluida com Lenis
- Animações suaves com GSAP e ScrollTrigger
- Design responsivo para desktop e mobile

## 🛠️ Tecnologias Utilizadas

- **React** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **GSAP** - Animações avançadas
- **ScrollTrigger** - Controle de animações por scroll
- **Lenis** - Rolagem fluida

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18+)
- pnpm (gerenciador de pacotes)

### Instalação e Execução
```bash
# Navegar para o diretório do projeto
cd atlantis-game-site

# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm run dev

# O site estará disponível em http://localhost:5173
```

### Build para Produção
```bash
# Gerar build otimizado
pnpm run build

# Preview do build
pnpm run preview
```

## 📁 Estrutura do Projeto

```
atlantis-game-site/
├── public/
│   ├── video.mp4              # Vídeo principal do jogo
│   └── images/                # Imagens promocionais
│       ├── RenderV_1.0_7.jpg  # Cidade futurística
│       ├── RenderV_1.0_3.jpg  # Paraíso tropical
│       ├── RenderV_1.0_2.jpg  # Metrópole moderna
│       ├── RenderV_1.0.png    # Oásis secreto
│       └── logo.jpeg          # Logo do jogo
├── src/
│   ├── components/
│   │   ├── HeroVideoScroll.jsx    # Seção hero com vídeo
│   │   ├── TextMask.jsx           # Seção de máscara de texto
│   │   └── ImageSections.jsx      # Seções com imagens
│   ├── App.jsx                # Componente principal
│   ├── App.css                # Estilos personalizados
│   └── main.jsx               # Ponto de entrada
└── README.md                  # Esta documentação
```

## 🎨 Seções do Site

### 1. Hero Section
- Vídeo em tela cheia controlado por scroll
- Logo e título sobrepostos
- Altura: 200vh para permitir controle de scroll

### 2. Text Mask Section
- Texto "ATLANTIS" com vídeo como fundo
- Animação de entrada com escala
- Efeito de máscara CSS avançado

### 3. Image Sections
- **Cidade Futurística** - Arquitetura avançada
- **Paraíso Tropical** - Praias e águas cristalinas
- **Metrópole Moderna** - Arranha-céus e vida urbana
- **Oásis Secreto** - Harmonia entre natureza e tecnologia

### 4. Call to Action
- Seção final promocional
- Botão "JOGAR AGORA"
- Informações de disponibilidade

## 🔧 Personalização

### Substituir Conteúdo
Para usar com outro jogo/projeto:

1. **Vídeo**: Substitua `public/video.mp4`
2. **Imagens**: Substitua arquivos em `public/images/`
3. **Textos**: Edite os componentes em `src/components/`
4. **Logo**: Substitua `public/images/logo.jpeg`

### Ajustar Animações
- Duração: Modifique valores em `ScrollTrigger.create()`
- Easing: Ajuste funções de easing no Lenis
- Triggers: Altere pontos de início/fim das animações

## 📱 Responsividade

O site é totalmente responsivo com:
- Breakpoints para mobile/tablet/desktop
- Imagens adaptáveis
- Textos redimensionáveis
- Layout flexível

## 🎯 Deploy Futuro

Quando estiver pronto para deploy público:
1. Execute `pnpm run build`
2. Use serviços como Vercel, Netlify ou GitHub Pages
3. Configure domínio personalizado se necessário

## 📄 Licença

Projeto desenvolvido para fins promocionais do jogo Atlantis.

---

**Desenvolvido com ❤️ para uma experiência cinematográfica única**

