'use client';
import {useTranslations} from 'next-intl';
import { Languages } from 'lucide-react';
import { DropdownMenu, Button, Theme, Flex } from '@radix-ui/themes';
import { useRouter } from 'next/navigation'
import { Github,Linkedin, Gitlab,Mail} from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const router = useRouter();
  
  function handleLanguageChange(lang: string) {
    router.push(`/${lang}`);
  }
  return (
    <div className="flex w-full bg-[black] justify-center z-2 h-[250px]">
        <footer className="flex items-center justify-center gap-8 max-w-[1440px] w-full px-[5vw] py-6">
            {/* Lado Esquerdo: Home e Idioma */}
            <div className="flex flex-col items-center gap-6 justify-self-start">
                <a target='blank' href="https://www.linkedin.com/in/giovani-de-alencoi-21aa1427b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <Linkedin size={24} color="white"/>
                </a>
                
                <a target='blank' href="https://github.com/giovaniFRA">
                    <Github size={24} color="white" />
                </a>

                <a target='blank' href="https://gitlab.com/giovaniFRA">
                    <Gitlab size={24} color="white" />
                </a>

                <a target='blank' href="https://mail.google.com/mail/?view=cm&fs=1&to=ferreiraalencoi1@gmail.com">
                    <Mail size={24} color="white" />
                </a>
            </div>
            <div className='flex flex-col gap-2'>
                <p className="text-sm text-gray-400">{t('about')}</p>
                <p className="text-sm text-gray-400">{t('rights')}</p>
                <p className="text-sm text-gray-400">Canoas 2026.</p>
            </div>
        </footer>
    </div>
  );
}
