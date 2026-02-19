
import Image from "next/image";
import {useTranslations} from 'next-intl';
import { CSSProperties } from 'react';
import UFRGS from "../../img/UFRGS.png";
import INF from "../../img/INF.png";
import IFRS from "../../img/IFRS.png";
import Card from "../components/Card";

export default function About() {
  const t = useTranslations('about');

  function handleCardClick(URL: string) {
    window.open(URL, '_blank');
  }
  return (
    <div style={styles.container}>
      <main style={styles.display}>
        <div style={styles.topBlock}>
            <div style={styles.textBlock}>
                <p style={styles.text}>{t('title')}</p>
            </div>
        </div>

        <div style={styles.bottomBlock}>
          <div style={styles.leftBlock}>
            <p style={styles.text}>{t('description')}</p>
          </div>

          <div style={styles.rightBlock}>
              <div style={styles.internalBlock}>
                <Card width="60vh" height="35vh" onClick={() => handleCardClick("https://www.ufrgs.br/site/a-ufrgs/apresentacao/")}>
                    <Image
                    className="dark:invert"
                    src={UFRGS}
                    alt="Fotografia de um homem sorridente"
                    style={styles.photo}
                    />
                </Card>
                
                <Card width="60vh" height="35vh" onClick={() => handleCardClick("https://www.inf.ufrgs.br/site/institucional/apresentacao/")}>
                    <Image
                    className="dark:invert"
                    src={INF}
                    alt="Fotografia de um homem sorridente"
                    style={styles.photo}
                    />
                </Card>
              </div>
              
              <div style={styles.internalBlock}>
                <Card width="60vh" height="35vh" onClick={() => handleCardClick("https://ifrs.edu.br/canoas/institucional/historico/")}>
                    <Image
                    className="dark:invert"
                    src={IFRS}
                    alt="Fotografia de um homem sorridente"
                    style={styles.photo}
                    />
                </Card>

                <Card width="60vh" height="35vh" onClick={() => handleCardClick("https://ifrs.edu.br/canoas/institucional/historico/")}>
                    <Image
                    className="dark:invert"
                    src={IFRS}
                    alt="Fotografia de um homem sorridente"
                    style={styles.photo}
                    />
                </Card>
              </div>
          </div>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBlock:{
    display:'flex',
    flexDirection:"column",
    alignSelf:'center',
    height:"25vh",
    alignItems:'center',
    justifyContent:'center',
    gap:'1vh',
    backgroundColor:'red',
    width:"100%",
  },
  bottomBlock:{
    display:'flex',
    flexDirection:"row",
    height:"75vh",
    width:"100%",
  },
  leftBlock:{
    display:'flex',
    flexDirection:"column",
    width:"30%",
    backgroundColor:'yellow',
    height:"100%",
  },
  rightBlock:{
    display:'flex',
    flexDirection:"column",
    alignSelf:'center',
    width:"70%",
    backgroundColor:'blue',
    height:"100%",
    alignItems:'center',
    justifyContent:'center',
    gap:'1vw',
  },
  internalBlock:{
    display:'flex',
    flexDirection:"row",
    gap:'1vw',
  },
  textBlock:{
    display:'flex',
    flexDirection:"column",
    alignSelf:'center',
    width:"45%",
    height:"25vh",
    alignItems:'center',
    justifyContent:'center',
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
    width:"70%",
  }
}

