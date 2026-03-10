'use client';
import { Menu, Languages, ChevronDown} from "lucide-react"
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import { DropdownMenu, Button, Theme, Flex } from '@radix-ui/themes';

export default function Hamburger() {
    const router = useRouter();
    const t = useTranslations('header');
    const [open, setOpen] = useState(false);

    function handleLanguageChange(lang: string) {
        router.push(`/${lang}`);
    }

    const display = open ? 'flex' : 'hidden';

    return (
        <>
            {open && (
                <div 
                    className="fixed inset-0 z-[2] bg-black/0" 
                    onClick={() => setOpen(false)} 
                />
            )}
            <nav className="flex flex-col gap-4 left-0 top-[40px] min-w-[200px] px-[10px] bg-[#f5f5f5] absolute z-3 md:hidden md:gap-70">
                <Button size="2" className="cursor-pointer" onClick={()=>{setOpen(!open)}}>
                    <Menu size={24} />
                </Button>

                <div className={`flex flex-row gap-4 ${display}`} onClick={()=>{setOpen(!open)}}>
                    <div className="flex flex-col gap-1">
                            <a href="#home" className="w-full py-1 px-2 text-sm font-medium">{t('home')}</a>
                            <a href="#about" className="w-full py-1 px-2 text-sm font-medium">{t('about')}</a>
                            <a href="#education" className="w-full py-1 px-2 text-sm font-medium">{t('education')}</a>
                            <a href="#experience" className="w-full py-1 px-2 text-sm font-medium">{t('experience')}</a>
                            <a href="#contact" className="w-full py-1 px-2 text-sm font-medium">{t('contact')}</a>
                    </div>

                    <Flex align="center" gap="1" className='z-3'>
                        {/* <Languages size={18} /> */}
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
            </nav>
        </>
        
    )
}
            