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
}

export default function Flipcard({ children, title, text, width = '300px', height = '300px', URL, className, style }: FlipcardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    if (URL) window.open(URL, '_blank');
  };

  return (
   <>
     <div
      onClick={handleCardClick}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className={` hidden md:block relative cursor-pointer [perspective:1000px] group ${className}`}
      style={{width, height }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-600 [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
        }`}
      >
        
        {/* Lado da FRENTE com Reflexo */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-[15px] bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.5)] p-5 overflow-hidden">
          
          {/* Efeito de Reflexo (Glow/Shimmer) */}
          <div style={style} className={`absolute shimmer-effect animate-shimmer-wave h-full w-full`}
          />
          {children}
        </div>

        {/* Lado de TRÁS */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] flex flex-col items-start justify-center rounded-[15px] bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.5)] p-5 [transform:rotateY(180deg)] gap-1">
          <h3 className="font-bold text-sm">{title}</h3>
          <p className="text-[0.8rem] leading-relaxed text-left">{text}</p>
          {URL && (
            <button 
              onClick={handleCardClick}
              className="mt-auto text-[0.7rem] text-blue-600 font-bold self-end uppercase hover:underline p-2 -mr-2"
            >
              Toque para abrir →
            </button>
          )}
        </div>
      </div>
    </div>

    <div
      onClick={() =>{setFlipped(!flipped)}}
      className={` block md:hidden relative cursor-pointer [perspective:1000px] group ${className}`}
      style={{width, height }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-600 [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'
        }`}
      >
        
        {/* Lado da FRENTE com Reflexo */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center rounded-[15px] bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.5)] p-5 overflow-hidden">
          
          {/* Efeito de Reflexo (Glow/Shimmer) */}
          <div style={style} className={`absolute shimmer-effect animate-shimmer-wave h-full w-full`}
          />
          
          {children}
        </div>

        {/* Lado de TRÁS */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] flex flex-col items-start justify-center rounded-[15px] bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.5)] p-5 [transform:rotateY(180deg)] gap-2">
          <h3 className="font-bold text-sm">{title}</h3>
          <p className="text-[0.8rem] leading-relaxed text-left">{text}</p>
          {URL && (
            <button 
              onClick={handleCardClick}
              className="mt-auto text-[0.7rem] text-blue-600 font-bold self-end uppercase hover:underline p-2 -mr-2"
            >
              Toque aqui para abrir →
            </button>
          )}
        </div>
      </div>
    </div>
   </>
  );
}