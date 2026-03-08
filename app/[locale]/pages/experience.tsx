import {useTranslations} from 'next-intl';
import ProjectSection from "../components/ProjectsCards";

export default function About() {
  const t = useTranslations('experience');
  return (
    <main id="experience" className="flex h-[1900px] flex-row py-[1100px]
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