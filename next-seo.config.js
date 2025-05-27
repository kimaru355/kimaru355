const canonicalUrl = 'https://kimaru355.tech';
const metaImage = 'https://cloud.kimaru355.com/public/images/kimaru355-id.png';
const metaDescription =
  'Seasoned Software Engineer especially in Frontend side, with a passion for creating pixel-perfect web experiences';

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
        alt: 'kimaru355.tech og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'kimaru355.tech og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'kimaru355.tech og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'kimaru355.tech',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
