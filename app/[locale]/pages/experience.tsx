
import Image from "next/image";
import {useTranslations} from 'next-intl';
import { CSSProperties } from 'react';
import REVISAO from "../../img/revisaoonline.png";
import CURADOR from "../../img/curador-virtual.png";
import ARCRIT from "../../img/arcrit.svg";
import MDI from "../../img/mdi.png";
import Flipcard from "../components/FlipCard";

export default function About() {
  const t = useTranslations('experience');

  function handleCardClick(URL: string) {
    window.open(URL, '_blank');
  }
  return (
    <main id="experience" className="flex h-[1000px] flex-row
    md: items-center justify-center gap-8 px-8 md:h-screen md:py-[370px]
    2xl: w-full 2xl:max-h-[900px]
    ">
        <div className="flex flex-col items-center justify-center w-full max-w-[1440px] 
        md:w-7/12 text-center gap-10">
            <div className="flex flex-col w-full justify-center items-center gap-5">
                <p className="text-2xl font-bold self-center">{t('myexp')}</p>
                <p className="max-w-[850px] text-left text-[0.9rem]">{t('description1')}</p>
                <p className="max-w-[850px] text-left text-[0.9rem]">{t('description2')}</p>
            </div>
            <div className="flex flex-row w-full justify-center items-center gap-8 sticky">
               <Flipcard 
                  width="100%" 
                  className="min-w-[150px] max-w-[150px] md:max-w-[250px] md:min-w-[200px] md:max-h-[250px] text-left" 
                  title={t('mdi.title')} 
                  text={t('mdi.description')}
                  URL="https://moodledataimport1.websiteseguro.com/"
                >
                  <Image src={MDI} alt="Logo" />
                </Flipcard>

                <Flipcard 
                  width="100%" 
                  className="min-w-[150px] max-w-[150px] md:max-w-[250px] md:min-w-[200px] md:max-h-[250px] text-left" 
                  title={t('revisaoonline.title')} 
                  text={t('revisaoonline.description')}
                  URL="https://revisaoonline.com.br/"
                >
                  <Image src={REVISAO} alt="Logo" />
                </Flipcard>

                <Flipcard 
                  width="100%" 
                  className="min-w-[150px] max-w-[150px] md:max-w-[250px] md:min-w-[200px] md:max-h-[250px] text-left" 
                  title={t('arcrit.title')} 
                  text={t('arcrit.description')}
                  URL="https://daleo.tech/cases/arcrit-app/"
                >
                  <Image src={ARCRIT} alt="Logo" />
                </Flipcard>

                <Flipcard 
                  width="100%" 
                  className="min-w-[150px] max-w-[150px] md:max-w-[250px] md:min-w-[200px] md:max-h-[250px] text-left" 
                  title={t('curadorvirtual.title')} 
                  text={t('curadorvirtual.description')}
                  URL="http://curadorvirtual.educacao.ws/"
                >
                  <Image src={CURADOR} alt="Logo" />
                </Flipcard>
            </div>
        </div>
    </main>
  );
}