import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('index');
  return (
    
    <main 
      id="home"
      className="
        flex flex-row bg-[white] min-h-[580px]
        md:items-center justify-center gap-8 px-8 md:h-screen
        2xl: w-full 2xl:max-h-[900px]
        ">
        <div className="flex flex-col items-center justify-center w-full md:w-7/12 text-center">
          <p className="text-xl md:text-2xl">Giovani Alencoi</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight 2xl:text-[100rem]">
            {t('introducion')}
          </h1>
          <p className="mt-4 text-gray-600 max-w-md">
            {t('description')}
          </p>
          <button className="mt-8 px-8 py-3 bg-black text-white rounded-full hover:opacity-80 transition-opacity">
            {t('contact')}
          </button>
        </div>
    </main>    
  );
}