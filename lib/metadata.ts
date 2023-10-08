import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Steven Selolo",
  handle: "@stevenselolo",
  socialProfiles,
  email: "steven@stevenselolo.com",
  website: "https://stevenselolo.com",
  jobTitle: "Cloud Engineer",
  company: "Liquid Intelligent Technologies",
  availableForWork: true,
  location: {
    city: "Johannesburg",
    media: "/joburg.jpg",
  },
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}, a dragon slayer passionate about AWS, Security, and GenAI.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/StevenPss/website-2023",
  newsletterProvider: "mailerlite",
  newsletterUrl: "#",
  analyticsProvider: "umami",
  defaultTheme: "system",
  activeAnnouncement: false,
  announcement: {
    buttonText: "Support on DevHunt →",
    link: "https://devhunt.org/tool/modern-developer-blog-template-digital-garden-starter",
  },
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
