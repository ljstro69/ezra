import './styles.css';

export const metadata = {
  metadataBase: new URL('https://ezrarealestatesolutions.com'),
  title: {
    default: 'Ezra Real Estate Solutions, Inc.',
    template: '%s | Ezra Real Estate Solutions',
  },
  description: 'Faith-driven real estate solutions that put people before properties.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ezra Real Estate Solutions, Inc.',
    description: 'Faith-driven real estate solutions that put people before properties.',
    url: 'https://ezrarealestatesolutions.com',
    siteName: 'Ezra Real Estate Solutions, Inc.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
