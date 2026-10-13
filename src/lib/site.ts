export const siteConfig = {
  name: "Sahil Mansuri",
  title: "Sahil Mansuri | Mobile App Developer | Flutter & Kotlin Specialist",
  shortTitle: "Sahil Mansuri — Mobile App Developer",
  description:
    "Sahil Mansuri is a Mobile App Developer with 1 year 10 months of hands-on experience in Flutter, Dart, Kotlin, Jetpack Compose, Firebase, REST APIs, WebSockets, and 1M+ downloads production apps.",
  location: "Jaipur, Rajasthan, India",
  experienceYears: "1 Year 10 Months",
  email: "sahilmansuri2010@gmail.com",
  phone: "8890029227",
  github: "https://github.com/sahil8822",
  githubHandle: "github.com/sahil8822",
  linkedin: "https://www.linkedin.com/in/sahil-mansuri-74a9a0255",
  linkedinHandle: "linkedin.com/in/sahil-mansuri-74a9a0255",
  twitter: "https://x.com/Sahilmansur2010",
  twitterHandle: "@Sahilmansur2010",
  instagram: "https://www.instagram.com/light_dark_0123/?hl=en",
  instagramHandle: "instagram.com/light_dark_0123",
  company: "Appic Software LLP",
  resumePdfUrl: "/sahil_resume.pdf",
  keywords: [
    "Flutter Developer",
    "Flutter Developer in Jaipur",
    "Mobile App Developer",
    "Flutter Dart Developer",
    "Kotlin Developer",
    "Jetpack Compose",
    "Firebase Developer",
    "Mobile application development",
    "Clean Architecture",
    "Bloc Cubit Flutter",
    "Sahil Mansuri",
    "Balaji Astro Guide",
    "Sicfit",
    "Happiest Team",
  ],
};

export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.trim() !== "") {
    return envUrl.endsWith("/") ? envUrl.slice(0, -1) : envUrl;
  }
  return "https://sahil.mansuri.workers.dev";
}
