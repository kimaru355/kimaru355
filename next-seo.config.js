const canonicalUrl = 'https://kimaru355.vercel.app';
const metaImage = 'https://kimaru355.vercel.app/public/images/kimaru355.png';
const metaDescription =
  'Software Engineer with a specialization in Full Stack Web Development, with a passion for creating pixel-perfect web experiences';

const defaultSEOConfig = {
  defaultTitle: 'Emmanuel Kimaru - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Emmanuel Kimaru - Personal Website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'kimaru355.vercel.app og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'kimaru355.vercel.app og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'kimaru355.vercel.app og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'kimaru355.vercel.app',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
