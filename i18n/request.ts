import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
import en from '../messages/en.json';
import ptBr from '../messages/pt-br.json';

const messages: Record<string, any> = {en, 'pt-br': ptBr};

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: messages[locale]
  };
});