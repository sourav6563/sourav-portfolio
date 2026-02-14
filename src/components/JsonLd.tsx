export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sourav Mahato",
    url: "https://souravmahato.in",
    image: "https://souravmahato.in/profile.png",
    sameAs: [
      "https://github.com/sourav6563",
      "https://www.linkedin.com/in/sourav3900",
      "https://dev.to/sourav_mahato_3900",
      "https://blog.souravmahato.in",
      "https://twitter.com/souravmahato",
    ],
    jobTitle: "Software Developer",
    knowsAbout: ["Next.js", "React", "Node.js", "Dancely"],
    description: "Full Stack Developer specialized in Next.js, Node.js, and modern web technologies. Creator of Dancely.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
