import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {getMessages} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import './globals.css';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};
 
export default async function LocaleLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  setRequestLocale(locale);
  const messages = await getMessages();
 
  return (
    <html lang={locale} style={{ colorScheme: 'light' }}> 
      <body className="light-theme">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}