
import Image from "next/image";
import {useTranslations} from 'next-intl';
import { CSSProperties } from 'react';
import UFRGS from "../../img/UFRGS.png";
import INF from "../../img/INF.png";
import IFRS from "../../img/IFRS.png";
import Card from "../components/Card";

export default function Home() {
  const t = useTranslations('education');
  return (
    <div style={styles.container}>
      <main style={styles.display}>
        <div style={styles.textBlock}>
            <h2>{t('sumary')}</h2>
            <p style={styles.text}>{t('text')}</p>
        </div>

        <div style={styles.schools}>
            <Card width="30%" height="50vh">
                <Image
                className="dark:invert"
                src={UFRGS}
                alt="Fotografia de um homem sorridente"
                style={styles.photo}
                />
            </Card>
            
            <Card width="30%" height="50vh" >
                <Image
                className="dark:invert"
                src={INF}
                alt="Fotografia de um homem sorridente"
                style={styles.photo}
                />
            </Card>

            <Card width="30%" height="50vh">
                <Image
                className="dark:invert"
                src={IFRS}
                alt="Fotografia de um homem sorridente"
                style={styles.photo}
                />
            </Card>
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
    alignSelf:'flex-start',
    width:"45%",
    height:"25vh",
    alignItems:'flex-end',
    justifyContent:'flex-end',
    gap:'1vh',
  },
  text:{
    fontFamily:'Arial',
    fontSize:'0.9em'
  },
  schools:{
    display:'flex',
    flexDirection:'row',
    gap:'10vw',
    justifyContent:"center",
    alignItems:'center',
    height:"70vh",
  },
  photo:{
    width:"70%"
  }
}

