'use client';
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
    <header className="flex items-center justify-between max-w-[1440px] mx-auto w-full px-[5vw] py-6">
        
        {/* Lado Esquerdo: Home e Idioma */}
        <div className="flex items-center gap-6">
            <a href="/" className="hover:opacity-70 transition-opacity">
                <House size={24} />
            </a>
            
            <Flex align="center" gap="1">
                <Languages size={18} />
                <Theme>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="ghost" size="2" className="cursor-pointer">
                                {t('language.language')}
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content variant="soft" color="gray">
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
                <a href="#education" className="hover:underline">{t('education')}</a>
                <a href="#experience" className="hover:underline">{t('experience')}</a>
                <a href="#about" className="hover:underline">{t('about')}</a>
            </div>
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
                {t('contact')}
            </button>
        </nav>
    </header>
  );
}
