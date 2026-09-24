import { PORTFOLIO_DATA } from "@/data/portfolio";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/sections/ProjectCaseStudy";
import type { Metadata } from "next";
import { getSiteUrl, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  return PORTFOLIO_DATA.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}/projects/${project.slug}`;
  const title = `${project.title} — Flutter Mobile App Case Study`;
  const description = `${project.title}: ${project.tagline} ${project.overview}`;

  return {
    title,
    description: description.slice(0, 160),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.overview,
      url: canonicalUrl,
      type: "article",
      siteName: `${siteConfig.name} — Mobile App Developer`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study — Sahil Mansuri`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.overview,
      images: ["/og-image.png"],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const projectUrl = `${siteUrl}/projects/${project.slug}`;

  // Map category to schema.org applicationCategory
  const categoryMap: Record<string, string> = {
    Astrology: "LifestyleApplication",
    Fitness: "HealthAndFitnessApplication",
    Community: "SocialNetworkingApplication",
  };

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    headline: `${project.title} — ${project.tagline}`,
    description: project.overview,
    applicationCategory: categoryMap[project.category] || "MobileApplication",
    operatingSystem: "Android, iOS",
    url: projectUrl,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteUrl,
    },
    featureList: project.features.join(", "),
    softwareRequirements: project.technologies.join(", "),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <ProjectCaseStudy project={project} />
    </>
  );
}
