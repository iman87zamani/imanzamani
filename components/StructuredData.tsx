import { SITE_CONFIG } from "@/lib/constants";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_CONFIG.url}/#person`,
        name: "Iman Zamani",
        jobTitle: "Technology Operations & Transformation Executive",
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        email: SITE_CONFIG.email,
        sameAs: [SITE_CONFIG.linkedin],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dallas",
          addressRegion: "TX",
          addressCountry: "US",
        },
        knowsAbout: [
          "Operating Model Design",
          "M&A Integration",
          "Enterprise Transformation",
          "AI Readiness",
          "Governance",
          "ITSM",
          "ServiceNow",
          "Digital Transformation",
          "Private Equity",
        ],
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "University of North Texas",
          },
        ],
        hasCredential: [
          { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "ITIL Foundation" },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Six Sigma" },
        ],
        worksFor: {
          "@type": "Organization",
          name: "Ryan Specialty Group",
          url: "https://www.ryanspecialty.com",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: "Iman Zamani",
        description: SITE_CONFIG.description,
        publisher: { "@id": `${SITE_CONFIG.url}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
