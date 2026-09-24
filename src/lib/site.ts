export const siteConfig = {
  name: "Sahil Mansuri",
  title: "Sahil Mansuri | Flutter Developer in Jaipur | Mobile App Developer",
  shortTitle: "Sahil Mansuri — Flutter Developer",
  description:
    "Sahil Mansuri is a Flutter Developer in Jaipur specializing in Flutter, Dart, Kotlin, Jetpack Compose, Firebase, REST APIs and production mobile apps.",
  location: "Jaipur, Rajasthan, India",
  experienceYears: "1+ year",
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
  ],
};

export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.trim() !== "") {
    return envUrl.endsWith("/") ? envUrl.slice(0, -1) : envUrl;
  }
  return "https://sahil.mansuri.workers.dev";
}
