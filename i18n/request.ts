import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import en from '../messages/en.json';
import ptBr from '../messages/pt-br.json';

const messages = {
  en,
  'pt-br': ptBr
};

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = (requested && routing.locales.includes(requested as any))
    ? (requested as string)
    : routing.defaultLocale;

  return {
    locale,
    messages: messages[locale as keyof typeof messages]
  };
});