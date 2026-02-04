'use client';
import Image from "next/image";
import {useTranslations} from 'next-intl';
import { CSSProperties } from 'react';
import photo from "../img/empty.jpg";
export default function Home() {
  const t = useTranslations('index');
  return (
    <div style={styles.container}>
      <main style={styles.display}>
        <div style={styles.content}>
          <div style={styles.textBlock}>
            <p style={styles.name}>Giovani Alencoi</p>
            <h1 style={styles.introducion}>{t('introducion')}</h1>
            <p>{t('description')}</p>
          </div>
          <button style={styles.button}>{t('contact')}</button>  
        </div>
        
        <Image
          className="dark:invert"
          src={photo}
          alt="Fotografia de um homem sorridente"
          style={styles.photo}
          priority
        />
      </main>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container:{
    padding:'0 5vw',
  },
  display: {
    display: 'flex',
    justifyContent: "flex-start",
  },
  photo:{
    width:"45%"
  },
  content:{
    paddingTop:'20vh',
    flexDirection:'column',
    width:"55%",
    display:'flex',
    alignItems:'left',
    justifyContent:'left',
  },
  textBlock:{
    display:'flex',
    flexDirection:"column"
  },
  name:{
    marginBottom:'7vh',
    fontSize:'1.5em',
  },
  introducion:{
    width:"70%",
    lineBreak:"auto"
  },
  button:{
    width:"30%",
    marginTop:'6vh',
  }
}
