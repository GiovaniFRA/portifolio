'use client';
import {useTranslations} from 'next-intl';
import { ChevronDown, House } from 'lucide-react';
import { Languages } from 'lucide-react';
import { DropdownMenu, Button, Theme, Flex } from '@radix-ui/themes';
import { useRouter } from 'next/navigation'
import MobileMenu from './MobileMenu';

export default function Header() {
  const t = useTranslations('header');
  const router = useRouter();
  
  function handleLanguageChange(lang: string) {
    router.push(`/${lang}`);
  }
  return (
    <div className="flex w-full bg-[#f5f5f5] fixed justify-center z-2 h-[100px]">
        <header className="flex items-center bg-[#f5f5f5] justify-between max-w-[1440px] w-full px-[5vw] py-6">
            {/* Lado Esquerdo: Home e Idioma */}
            <div className="hidden md:flex items-center gap-6">
                <a href="#home" className="hover:opacity-70 transition-opacity">
                    <House size={24} />
                </a>
                
                <Flex align="center" gap="1" className='z-3'>
                    <Languages size={18} />
                    <Theme>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                  <Button variant="ghost" size="2" className="cursor-pointer flex items-center gap-1">
                                        {t('language.language')} 
                                        <ChevronDown size={12} />
                                    </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content className='z-3 bg-[#f5f5f5]' variant="soft" color="gray">
                                <DropdownMenu.Item onClick={() => handleLanguageChange('pt-br')}>
                                    {t('language.portuguese')}
                                </DropdownMenu.Item>
                                <DropdownMenu.Item onClick={() => handleLanguageChange('en')}>
                                    {t('language.english')}
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </Theme>
                </Flex>
            </div>

            {/* Lado Direito: Navegação e Contato */}
            <nav className="hidden md:flex items-center gap-8">
                <div className="flex gap-6 text-sm font-medium">
                    <a href="#about" className="hover:underline">{t('about')}</a>
                    <a href="#education" className="hover:underline">{t('education')}</a>
                    <a href="#experience" className="hover:underline">{t('experience')}</a>
                </div>
                <a href="#contact" className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
                    {t('contact')}
                </a>
            </nav>

            <MobileMenu/>
        </header>
    </div>
  );
}
