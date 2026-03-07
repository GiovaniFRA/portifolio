'use client';
import { useState } from "react";

interface FlipcardProps {
  children: React.ReactNode;
  title: string;
  text: string;
  width?: string;
  height?: string;
  URL?: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number; // Novo prop para controlar o atraso da animação
}

export default function Flipcard({ children, title, text, width = '300px', height = '300px', URL, className, style, delay }: FlipcardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    if (URL) window.open(URL, '_blank');
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className={`relative cursor-pointer [perspective:1000px] group ${className}`}
      style={{...style, width, height }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-600 [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
        }`}
      >
        
        {/* Lado da FRENTE com Reflexo */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-[15px] bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.5)] p-5 overflow-hidden">
          {children}
        </div>

        {/* Lado de TRÁS */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] flex flex-col items-start justify-center rounded-[15px] bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.5)] p-5 [transform:rotateY(180deg)] gap-2">
          <h3 className="font-bold text-sm">{title}</h3>
          <p className="text-[0.8rem] leading-relaxed">{text}</p>
        </div>

      </div>
    </div>
  );
}