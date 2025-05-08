import React, { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

// Grid hareketlendirme animasyonu
const gridAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(20px) translateX(10px);
  }
`;

// Neon parlama animasyonu
const glowAnimation = keyframes`
  0% {
    opacity: 0.5;
    filter: blur(20px);
  }
  50% {
    opacity: 0.8;
    filter: blur(25px);
  }
  100% {
    opacity: 0.5;
    filter: blur(20px);
  }
`;

const FuturisticBackground = () => {
  const canvasRef = useRef(null);

  // Retro-futuristik grid çizimi için canvas kullanıyoruz
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    
    // Pencere boyutu değişince canvas'ı yeniden boyutlandır
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      drawGrid();
    };
    
    window.addEventListener('resize', handleResize);
    
    function drawGrid() {
      ctx.clearRect(0, 0, width, height);
      
      // Grid arka planı
      ctx.beginPath();
      
      // Dikey çizgiler
      const verticalLines = 40;
      const verticalSpacing = width / verticalLines;
      
      for (let i = 0; i <= verticalLines; i++) {
        const x = i * verticalSpacing;
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        
        // Uzaklığa göre çizgi kalınlığını ve opaklığını ayarla
        const distanceRatio = Math.abs(x - width / 2) / (width / 2);
        const lineOpacity = 0.1 + (1 - distanceRatio) * 0.3;
        
        ctx.strokeStyle = `rgba(123, 44, 191, ${lineOpacity})`;
        ctx.lineWidth = distanceRatio < 0.5 ? 1 : 0.5;
        ctx.stroke();
      }
      
      // Yatay çizgiler - perspektif efekti
      const horizontalLines = 30;
      const horizonY = height * 0.7; // Ufuk çizgisi
      
      for (let i = 0; i <= horizontalLines; i++) {
        // Perspektif için eşit olmayan aralıklar
        const yProgress = i / horizontalLines;
        const y = horizonY * Math.pow(yProgress, 1.5);
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        
        const lineOpacity = 0.05 + yProgress * 0.3;
        ctx.strokeStyle = `rgba(76, 201, 240, ${lineOpacity})`;
        ctx.lineWidth = yProgress * 1.5;
        ctx.stroke();
      }
    }
    
    // İlk çizim
    drawGrid();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <Box position="fixed" top="0" left="0" right="0" bottom="0" zIndex="-1" overflow="hidden">
      {/* 1. Katman: Animasyonlu Grid */}
      <canvas 
        ref={canvasRef} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.4,
          animation: `${gridAnimation} 10s ease-in-out infinite alternate`,
        }}
      />
      
      {/* 2. Katman: Neon Efektler */}
      <Box
        position="absolute"
        top="10%"
        left="20%"
        width="300px"
        height="300px"
        borderRadius="100%"
        bg="retro.neonPurple"
        filter="blur(120px)"
        opacity="0.15"
        animation={`${glowAnimation} 7s ease-in-out infinite`}
      />
      
      <Box
        position="absolute"
        bottom="10%"
        right="10%"
        width="350px"
        height="350px"
        borderRadius="100%"
        bg="retro.highlight"
        filter="blur(140px)"
        opacity="0.15"
        animation={`${glowAnimation} 12s ease-in-out infinite`}
      />
      
      {/* 3. Katman: Yıldızlar */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage="radial-gradient(#ffffff 1px, transparent 1px)"
        backgroundSize="50px 50px"
        opacity="0.2"
      />
    </Box>
  );
};

export default FuturisticBackground; 