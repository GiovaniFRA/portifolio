
import Image from "next/image";
import {useTranslations} from 'next-intl';
import { CSSProperties } from 'react';
import UFRGS from "../../img/UFRGS.png";
import INF from "../../img/INF.png";
import IFRS from "../../img/IFRS.png";
import Card from "../components/Card";

export default function Education() {
  const t = useTranslations('education');

  function handleCardClick(URL: string) {
    window.open(URL, '_blank');
  }
  return (
    <main id="education" className="flex flex-col h-screen bg-[white] min-h-[600px]
    md:flex-row items-center justify-center gap-8 px-8
    2xl: w-full max-h-[900px]
    ">
    <div className="flex flex-col items-center justify-center w-full max-w-[1440px] md:w-7/12 text-center gap-10">
        <div className="flex flex-col w-full justify-center items-center gap-5">
            <p className="text-2xl font-bold self-center">{t('myedu')}</p>
            <p className="max-w-[850px] text-left">{t('text')}</p>
        </div>

        <div className="flex flex-col gap-10 justify-center items-center px-5 w-full md:flex-row">
            <Card className="h-[200px] w-[200px] min-w-[200px] min-h-[200px]" onClick={() => handleCardClick("https://www.ufrgs.br/site/a-ufrgs/apresentacao/")}>
                <Image
                className="dark:invert"
                src={UFRGS}
                alt="Icone UFRGS"
                />
            </Card>
            
            <Card className="h-[200px] w-[200px] min-w-[200px] min-h-[200px]" onClick={() => handleCardClick("https://www.inf.ufrgs.br/site/institucional/apresentacao/")}>
                <Image
                className="dark:invert"
                src={INF}
                alt="Icone INF"
                />
            </Card>

            <Card className="h-[200px] w-[200px] min-w-[200px] min-h-[200px]" onClick={() => handleCardClick("https://ifrs.edu.br/canoas/institucional/historico/")}>
                <Image
                className="dark:invert"
                src={IFRS}
                alt="Icone IFRS"
                />
            </Card>
        </div>
    </div>
    </main>
  );
}

