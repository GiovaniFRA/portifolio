import {useTranslations} from 'next-intl';
import { CSSProperties } from 'react';
import Flipcard from '../components/FlipCard';
import RVO from "../../img/revisaoonline.png";
import CV from "../../img/curador-virtual.png";
import MDI from "../../img/moodle.png";
import ARC from "../../img/arcrit.svg";
import Image from "next/image";

export default function Experience() {
  const t = useTranslations('experience');
  return (
    <div style={styles.container}>
      <main style={styles.display}>
        <div style={styles.textBlock}>
            <h2>{t('sumary')}</h2>
            <p style={styles.text}>{t('text')}</p>
        </div>
        <div style={styles.experiences}>
            <Flipcard width="25%" height="50vh" title={t('revisaoonline.title')} text={t('revisaoonline.description')} URL="https://revisaoonline.com.br/">
                <Image
                className="dark:invert"
                src={RVO}
                alt="Fotografia de um homem sorridente"
                style={styles.photo}
                />
            </Flipcard>
            <Flipcard width="25%" height="50vh" title={t('arcrit.title')} text={t('arcrit.description')} URL="https://daleo.tech/cases/arcrit-app/">
                <Image
                className="dark:invert"
                src={ARC}
                alt="Fotografia de um homem sorridente"
                style={styles.photo}
                />
            </Flipcard>
            <Flipcard width="25%" height="50vh" title={t('curadorvirtual.title')} text={t('curadorvirtual.description')} URL="http://curadorvirtual.educacao.ws/">
                <Image
                className="dark:invert"
                src={CV}
                alt="Fotografia de um homem sorridente"
                style={styles.photo}
                />
            </Flipcard>
            <Flipcard width="25%" height="50vh" title={t('mdi.title')} text={t('mdi.description')} URL="https://integra.ifrs.edu.br/ecossistema/projeto-institucional/54696">
                <Image
                className="dark:invert"
                src={MDI}
                alt="Fotografia de um homem sorridente"
                style={styles.photo}
                />
            </Flipcard>
        </div>
      </main>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container:{
    padding:'0 5vw',
    height:'100vh',
  },
  display: {
    display: 'flex',
    flexDirection:'column',
  },
  textBlock:{
    display:'flex',
    flexDirection:"column",
    height:"30vh",
  },
  text:{
    width:"70%",
    lineBreak:"auto"
  },
  photo:{
    width:"70%"
  },
  experiences:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"70vh",
    gap:"5vw",
  }
}