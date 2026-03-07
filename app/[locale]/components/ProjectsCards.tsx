import { useTranslations } from 'next-intl';
import Image from "next/image";
import Flipcard from "./FlipCard"; // Certifique-se do caminho correto
import REVISAO from "../../img/revisaoonline.png";
import CURADOR from "../../img/curador-virtual.png";
import ARCRIT from "../../img/arcrit.svg";
import MDI from "../../img/mdi.png";

export default function ProjectSection() {
  const t = useTranslations('experience');

  // Organizando os dados para facilitar a manutenção
  const projects = [
    { id: 'mdi', img: MDI, url: "https://moodledataimport1.websiteseguro.com/" },
    { id: 'revisaoonline', img: REVISAO, url: "https://revisaoonline.com.br/" },
    { id: 'arcrit', img: ARCRIT, url: "https://daleo.tech/cases/arcrit-app/" },
    { id: 'curadorvirtual', img: CURADOR, url: "http://curadorvirtual.educacao.ws/" }
  ];

  return (
    <div className="animate-on-scroll animate-wave-left flex flex-row w-[980px] justify-center items-center gap-8 overflow-x-auto py-12 scrollbar-hide">
      {projects.map((project, index) => {
        return (
          <Flipcard
            key={project.id}
            width="200px"
            className="min-w-[150px] max-w-[150px] md:max-w-[250px] md:min-w-[200px] md:max-h-[250px] text-left"
            title={t(`${project.id}.title`)}
            text={t(`${project.id}.description`)}
            URL={project.url}
          >
            <Image 
              src={project.img} 
              alt={`Logo ${project.id}`} 
              className="w-20 h-auto object-contain"
            />
          </Flipcard>
        );
      })}
    </div>
  );
}