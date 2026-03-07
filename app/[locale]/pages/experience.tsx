import {useTranslations} from 'next-intl';
import REVISAO from "../../img/revisaoonline.png";
import CURADOR from "../../img/curador-virtual.png";
import ARCRIT from "../../img/arcrit.svg";
import MDI from "../../img/mdi.png";
import ProjectSection from "../components/ProjectsCards";

export default function About() {
  const t = useTranslations('experience');

  function handleCardClick(URL: string) {
    window.open(URL, '_blank');
  }
  return (
    <main id="experience" className="flex h-[1800px] flex-row
    md: items-center justify-center gap-8 px-8 md:h-screen md:py-[390px]
    2xl: w-full 2xl:max-h-[900px]
    ">
        <div className="flex flex-col items-center justify-center w-full max-w-[1440px] 
        md:w-7/12 text-center">
            <div className="flex flex-col w-full justify-center items-center gap-3">
                <p className="text-2xl font-bold self-center">{t('myexp')}</p>
                <p className="max-w-[850px] text-left text-[0.9rem]">{t('description1')}</p>
                <p className="max-w-[850px] text-left text-[0.9rem]">{t('description2')}</p>
            </div>
            <ProjectSection/>
        </div>
    </main>
  );
}