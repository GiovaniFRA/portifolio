import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. Aguarda o locale solicitado na URL
  const locale = await requestLocale;

  // 2. Valida se o locale existe, caso contrário usa o padrão (ex: 'pt')
  const activeLocale = (locale && routing.locales.includes(locale as any))
    ? locale
    : routing.defaultLocale;

  return {
    locale: activeLocale,
    // 3. Importação dinâmica: carrega apenas o arquivo necessário
    messages: (await import(`../messages/${activeLocale}.json`)).default
  };
});