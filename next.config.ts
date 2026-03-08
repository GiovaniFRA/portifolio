import createNextIntlPlugin from 'next-intl/plugin';

// Se o arquivo estiver em ./i18n/request.ts, o plugin costuma achar, 
// mas você pode especificar o caminho se o erro persistir:
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
    // Atenção: Isso permite o build mesmo com erros de lint
    ignoreDuringBuilds: true,
  },
};

export default withNextIntl(nextConfig);