'use client';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import Flipcard from "./FlipCard";
import REVISAO from "../../img/revisaoonline.png";
import CURADOR from "../../img/curador-virtual.png";
import ARCRIT from "../../img/arcrit.svg";
import MDI from "../../img/mdi.png";

export default function ProjectSection() {
  const t = useTranslations('experience');
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    { id: 'mdi', img: MDI, url: "https://moodledataimport1.websiteseguro.com/" },
    { id: 'revisaoonline', img: REVISAO, url: "https://revisaoonline.com.br/" },
    { id: 'arcrit', img: ARCRIT, url: "https://daleo.tech/cases/arcrit-app/" },
    { id: 'curadorvirtual', img: CURADOR, url: "http://curadorvirtual.educacao.ws/" }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scrolla quase a largura total visível para garantir que o próximo card apareça
      const scrollAmount = clientWidth * 0.8; 
      const scrollTo = direction === 'left' 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    /* h-full ou min-h para garantir que o container não corte a sombra dos cards */
    <div className="relative group w-full max-w-[1100px] flex items-center mx-auto overflow-visible">
      
      {/* Seta Esquerda - z-50 para ficar acima do Flipcard */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-2 z-[50] p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white active:scale-90 transition-all"
        aria-label="Anterior"
      >
        <ChevronLeft size={28} className="text-black" />
      </button>

      {/* Container com Scroll */}
      <div 
        ref={scrollRef}
        /* - px-[10%] ou px-12: Garante que o primeiro e último card não fiquem colados na borda.
           - snap-x snap-mandatory: O card "prende" no centro ao soltar o scroll.
        */
        className="flex flex-row overflow-x-auto snap-x snap-mandatory w-full justify-start items-center gap-6 py-12 px-12 scrollbar-hide scroll-smooth"
      >
        {projects.map((project, index) => {
          const delay = index * 0.2; // Delay menor para ser mais responsivo

          return (
            /* flex-shrink-0: Impede que o card seja esmagado para caber na tela */
            <div key={project.id} className="flex-shrink-0 snap-center">
              <Flipcard
                style={{ animationDelay: `${delay}s` }}
                title={t(`${project.id}.title`)}
                text={t(`${project.id}.description`)}
                /* Largura fixa no mobile (w-[260px]) para não cortar o conteúdo */
                className='min-h-[350px] w-[260px] md:w-[220px] md:max-h-[275px] md:min-h-[275px]'
                URL={project.url}
              >
                <Image src={project.img} alt={project.id} className="no-invert object-contain p-4" />
              </Flipcard>
            </div>
          );
        })}
      </div>

      {/* Seta Direita */}
      <button 
        onClick={() => scroll('right')}
        className="absolute right-2 z-[50] p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white active:scale-90 transition-all"
        aria-label="Próximo"
      >
        <ChevronRight size={28} className="text-black" />
      </button>

    </div>
  );
}