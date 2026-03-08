'use client';
import {useTranslations} from 'next-intl';
import { House } from 'lucide-react';
import { Menu } from 'lucide-react';
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
                                <Button variant="ghost" size="2" className="cursor-pointer">
                                    {t('language.language')}
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

            {/* Mobile: Menu Hamburger */}
            <nav className="flex z-3 md:hidden gap-70">
                <Theme>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="ghost" size="2" className="cursor-pointer">
                                <Menu size={24} />
                            </Button>
                        </DropdownMenu.Trigger>
                        
                        <DropdownMenu.Content 
                            className='z-3 bg-[#f5f5f5] p-0 overflow-hidden min-w-[200px]' 
                            variant="soft" 
                            color="gray"
                        >
                            {/* Usando Grid para separar as áreas de forma rígida */}
                            <div className="grid grid-cols-[1fr_auto] divide-x divide-gray-300">
                                
                                {/* LADO ESQUERDO: Navegação em Coluna */}
                                <div className="flex flex-col p-4 gap-1">
                                    <DropdownMenu.Item className="focus:bg-blue-50 cursor-pointer rounded-md">
                                        <a href="#home" className="w-full py-1 px-2 text-sm font-medium">{t('home')}</a>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className="focus:bg-blue-50 cursor-pointer rounded-md">
                                        <a href="#about" className="w-full py-1 px-2 text-sm font-medium">{t('about')}</a>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className="focus:bg-blue-50 cursor-pointer rounded-md">
                                        <a href="#education" className="w-full py-1 px-2 text-sm font-medium">{t('education')}</a>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className="focus:bg-blue-50 cursor-pointer rounded-md">
                                        <a href="#experience" className="w-full py-1 px-2 text-sm font-medium">{t('experience')}</a>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className="focus:bg-blue-50 cursor-pointer rounded-md">
                                        <a href="#contact" className="w-full py-1 px-2 text-sm font-medium">{t('contact')}</a>
                                    </DropdownMenu.Item>
                                </div>

                                {/* LADO DIREITO: Idiomas */}
                                <div className="bg-[#f5f5f5] flex flex-col items-center p-4 gap-4 justify-center">
                                    <Languages size={20} color='black' />
                                    <div className="flex flex-col gap-2">
                                        <button 
                                            onClick={() => handleLanguageChange('pt-br')}
                                            className={`px-3 py-1 text-[10px] font-bold rounded border transition-all ${
                                                t('language.language') === 'pt-br' 
                                                ? 'bg-blue-600 text-white border-blue-600' 
                                                : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                                            }`}
                                        >
                                            PT
                                        </button>
                                        <button 
                                            onClick={() => handleLanguageChange('en')}
                                            className={`px-3 py-1 text-[10px] font-bold rounded border transition-all ${
                                                t('language.language') === 'en' 
                                                ? 'bg-blue-600 text-white border-blue-600' 
                                                : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                                            }`}
                                        >
                                            EN
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Theme>
            </nav>
        </header>
    </div>
  );
}
