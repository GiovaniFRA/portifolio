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
    <div className="flex flex-col max-w-[900px] md:flex-row justify-center items-center gap-8 py-12 scrollbar-hide">
      {projects.map((project, index) => {
        // 0s, 7s, 14s, 21s
        const delay = index * 0.9; 

        return (
            <Flipcard
            key={project.id}
            style={{ animationDelay: `${delay}s` }}
            title={t(`${project.id}.title`)}
            text={t(`${project.id}.description`)}
            className='min-h-[350px] max-w-[220px] md:max-h-[275px] md:min-h-[275px]'
            URL={project.url}
            >
            <Image src={project.img} alt={project.id} />
            </Flipcard>
        );
        })}
    </div>
  );
}