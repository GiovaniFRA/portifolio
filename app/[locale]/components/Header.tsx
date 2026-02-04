'use client';
import { CSSProperties } from 'react';
import {useTranslations} from 'next-intl';
import { House } from 'lucide-react';
export default function Header() {
  const t = useTranslations('header');
  return (
    <header style={styles.header}>
        <h2><House size={24} /></h2>
        <div style={styles.navLinks}>
            <h2>{t('education')}</h2>
            <h2>{t('experience')}</h2>
            <h2>{t('projects')}</h2>
        </div>
        <button style={styles.contactbtn}>{t('contact')}</button>
    </header>
  );
}

const styles: { [key: string]: CSSProperties } = {
    header:{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        padding:'2vh 2vw',
        width:"100%",
        height:"25%"
    },
    navLinks:{
        display:'flex',
        flexDirection:'row',
        gap:'5vw'
    },
    contactbtn:{
        borderRadius:'5px',

    }
}