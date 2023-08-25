const homeJsonLd = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  name: "Law Offices of Lorenzo W. Tijerina, ESQ",
  description:
    "We are a San Antonio/New York-based federal law firm with over 30 years of experience. Our legal professionals are dedicated to providing the highest quality legal services to our clients. We specialize in federal law, including tax, immigration, and employment, and are committed to delivering results for our clients. Contact us today to learn more about how we can assist you with your legal needs.",
  telephone: "+18852468012",
  email: "lorenzo@tijerinafedlaw.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1911 Guadalupe",
    addressLocality: "San Antonio",
    addressRegion: "Texas",
    addressCountry: "United States",
    postalCode: "78207",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  url: "https://www.tijerinafedlaw.com/",
};
export default homeJsonLd;
