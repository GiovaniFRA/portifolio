'use client';
import { CSSProperties } from 'react';
import {useTranslations} from 'next-intl';
import { House } from 'lucide-react';
import { Languages } from 'lucide-react';
import { DropdownMenu, Button, Theme, Flex } from '@radix-ui/themes';
import { useRouter } from 'next/navigation'

export default function Header() {
  const t = useTranslations('header');
  const router = useRouter();
  function handleLanguageChange(lang: string) {
    router.push(`/${lang}`);
  }
  return (
    <header style={styles.header}>
        <div style={styles.block1}>
            <a><House size={24} /></a>
            <div style={{display:"flex", flexDirection:"row", gap:'1vw'}}>
                <Languages size={18} />
                <Theme>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="ghost" size="2">
                                {t('language.language')}
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content variant="soft">
                            <DropdownMenu.Item onClick={() => handleLanguageChange('pt-br')}>{t('language.portuguese')}</DropdownMenu.Item>
                            <DropdownMenu.Item onClick={() => handleLanguageChange('en')}>{t('language.english')}</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Theme>
            </div>
        </div>
        <div style={styles.block2}>
            <div style={styles.navLinks}>
                <a>{t('education')}</a>
                <a>{t('experience')}</a>
                <a>{t('projects')}</a>
            </div>
            <button className="button" style={styles.contactbtn}>{t('contact')}</button>
        </div>
    </header>
  );
}

const styles: { [key: string]: CSSProperties } = {
    header:{
        backgroundColor:'#f5f5f5',
        display:'flex',
        alignItems:'center',
        padding:'2vh 5vw',
        width:"100%",
        height:"25%",
    },
    navLinks:{
        display:'flex',
        flexDirection:'row',
        width:"70%",
        gap:'5vw',
        justifyContent:'flex-start',
    },
    contactbtn:{
        borderRadius:'5px',
    },
    block1:{
        display:'flex',
        flexDirection:'row',
        gap:'3vw',
        justifySelf:'flex-start',
        alignItems:'center',
        width:"40%"
    },
    block2:{
        display:'flex',
        flexDirection:'row',
        gap:'3vw',
        justifySelf:'flex-end',
        alignItems:'center',
        justifyContent:'flex-end',
        width:"60%"
    }
}