import { ContentNavItem, NavItem } from "@/types";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";

const content: ContentNavItem[] = [
  {
    title: "Blog",
    href: "/posts",
    description: "Blog posts. Mostly about AWS.",
  },
  {
    title: "Speaking",
    href: "/speaking",
    description: "My previous (and current) talks, workshops, and other speaking engagements.",
  },
  {
    title: "Videos",
    href: defaultAuthor.socialProfiles.find((platform) => platform.name === "youtube")?.link as string,
    description: "My YouTube channel where I talk about web development.",
  },
  {
    title: "Newsletter",
    href: siteMetadata.newsletterUrl as string,
    description: "My newsletter about the AWS cloud",
  },
];

export const navigationLinks: NavItem[] = [
  {
    title: "Content",
    content,
  },
  {
    title: "Projects",
    href: "/projects",
  },
  // {
  //   title: "Uses",
  //   href: "/uses",
  // },
  {
    title: "Now",
    href: "/now",
  },
];
