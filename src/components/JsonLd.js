const BASE_URL = process.env.SITE_URL || 'https://ibad-khan.vercel.app';

export default function JsonLd() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ibad Khan',
    givenName: 'Ibad',
    familyName: 'Khan',
    url: BASE_URL,
    jobTitle: 'Frontend Developer',
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Techriv',
      },
      {
        '@type': 'Organization',
        name: 'Nanolix Digital',
      },
    ],
    sameAs: [
      'https://github.com/ibadkhan55252',
      'https://www.linkedin.com/in/ibadkhan55252',
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ibad Khan | Frontend Developer',
    url: BASE_URL,
    description:
      'Frontend developer building modern, performant web experiences with React, Next.js, and Tailwind CSS.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
