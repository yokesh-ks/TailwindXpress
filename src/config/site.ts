import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "TailwindXpress",
  description:
    "An modern example app built using Astro v4 & shadcn/ui. Inspired by shadcn/taxonomy.",
  url: "https://tailwind.ingeniousclan.com/",
  ogImage: "https://tailwind.ingeniousclan.com/og.jpg",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "IngeniousClan",
    items: [
      { title: "About", href: "https://www.ingeniousclan.com/" },
      { title: "Mission & Vision", href: "https://www.ingeniousclan.com/#about-us" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "TailwindXpress", href: "https://tailwind.ingeniousclan.com" },
      { title: "Timestamp", href: "https://timestamp.ingeniousclan.com" },
      { title: "Readme", href: "https://readme.ingeniousclan.com/" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "Accessibility", href: "/guides/accessibility" },
      { title: "Backgrounds", href: "/guides/backgrounds" },
      { title: "Borders", href: "/guides/borders" },
      { title: "Effects", href: "/guides/effects" },
    ],
  },
];