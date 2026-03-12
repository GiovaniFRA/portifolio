'use client';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Importando as setas
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

  // Função para controlar o scroll via botões
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group w-full max-w-[1100px] flex items-center justify-center mx-auto px-4">
      
      {/* Seta Esquerda (Oculta no mobile, aparece no hover no desktop) */}
      <button 
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-0 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={32} className="text-black" />
      </button>

      {/* Container com Scroll */}
      <div 
        ref={scrollRef}
        className="flex flex-row overflow-x-auto snap-x snap-mandatory w-full justify-start items-center gap-6 py-12 scrollbar-hide scroll-smooth"
      >
        {projects.map((project, index) => {
          const delay = index * 0.9; 

          return (
            <div key={project.id} className="flex-shrink-0 snap-center">
              <Flipcard
                style={{ animationDelay: `${delay}s` }}
                title={t(`${project.id}.title`)}
                text={t(`${project.id}.description`)}
                className='min-h-[350px] w-[280px] md:w-[220px] md:max-h-[275px] md:min-h-[275px]'
                URL={project.url}
              >
                <Image src={project.img} alt={project.id} className="no-invert" />
              </Flipcard>
            </div>
          );
        })}
      </div>

      {/* Seta Direita */}
      <button 
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-0 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={32} className="text-black" />
      </button>

    </div>
  );
}