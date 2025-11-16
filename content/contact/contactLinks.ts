export type ContactLink = {
  label: string;
  value: string;
  href: string;
  description: string;
};

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    value: "github://ZealousEar",
    href: "https://github.com/ZealousEar",
    description: "Less pretty version of my portfolio, click to see my code repositories and research papers",
  },
  {
    label: "LinkedIn",
    value: "linkedin://farhad-chichgar",
    href: "https://www.linkedin.com/in/farhad-chichgar-9b7568175/",
    description: "Professional collaborations and connection requests",
  },
  {
    label: "Email",
    value: "farhad@chichgar.com",
    href: "mailto:farhad@chichgar.com",
    description: "Direct contact for opportunities and research conversations",
  },
];



