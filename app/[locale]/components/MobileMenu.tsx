import { Button } from "@radix-ui/themes"
import { Menu, Languages} from "lucide-react"
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation'
import { useState } from "react";

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
            <nav className="flex flex-col gap-4 left-0 top-[40px] px-[10px] bg-[#f5f5f5] absolute z-3 md:hidden md:gap-70">
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
                    <div className="flex flex-col items-center gap-4 justify-center">
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
            </nav>
        </>
        
    )
}
            