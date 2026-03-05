
import Image from "next/image";
import {useTranslations} from 'next-intl';
import { CSSProperties } from 'react';
import HCJ from "../../img/hcj.png";
import BACK from "../../img/back.png";
import TAILWIND from "../../img/tailwind.png";
import REACT from "../../img/react.png";
import Card from "../components/Card";

export default function About() {
  const t = useTranslations('about');

  function handleCardClick(URL: string) {
    window.open(URL, '_blank');
  }
  return (
    <main id="about" className="flex h-[1000px] flex-row bg-[white]
    md: items-center justify-center gap-8 px-8 h-[900px]
    2xl: w-full
    ">
        <div className="flex flex-col items-center justify-center w-full max-w-[1440px] 
        md:w-7/12 text-center gap-10">
            <div className="flex flex-row w-full justify-center items-center gap-25 sticky">
                <Card className="h-[100px] w-[100px] min-w-[80px] min-h-[80px] flex flex-col">
                    <Image
                    className="dark:invert"
                    src={HCJ}
                    alt="Icone HTML, CSS e JavaScript"
                    />
                    <p className="text-sm absolute z-0 top-[70px] text-[0.7rem]">Frotend Standart</p>
                </Card>
                
                <Card className="h-[100px] w-[100px] min-w-[80px] min-h-[80px] flex flex-col sticky">
                    <Image
                    className="dark:invert"
                    src={BACK}
                    alt="Icone PHP e SQL"
                    />
                    <p className="text-sm absolute z-0 top-[70px] w-full text-[0.7rem]">Backend classics</p>
                </Card>
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-5">
                <p className="text-2xl font-bold self-center">{t('aboutme')}</p>
                <p className="max-w-[850px] text-left text-[0.9rem]">{t('description1')}</p>
                <p className="max-w-[850px] text-left text-[0.9rem]">{t('description2')}</p>
            </div>
            <div className="flex flex-row w-full justify-center items-center gap-25 sticky">
                <Card className="h-[100px] w-[100px] min-w-[80px] min-h-[80px] flex flex-col">
                    <Image
                    className="dark:invert h-[25px]"
                    src={TAILWIND}
                    alt="Icone Tailwind CSS"
                    />
                    <p className="text-sm absolute z-0 top-[70px] text-[0.7rem]">Tailwind CSS</p>
                </Card>
                
                <Card className="h-[100px] w-[100px] min-w-[80px] min-h-[80px] flex flex-col sticky">
                    <Image
                    className="dark:invert h-[30px]"
                    src={REACT}
                    alt="Icone React"
                    />
                    <p className="text-sm absolute z-0 top-[70px] text-[0.7rem]">React</p>
                </Card>
            </div>
        </div>
    </main>
  );
}