export const navLinks = [
 {
   id: 1,
   name: 'Home',
   href: '/',
 },
 {
   id: 2,
   name: 'About',
   href: '/profile',
 },
 {
   id: 3,
   name: 'Explore',
   href: '/explore',
 },
 {
   id: 4,
   name: 'Contact',
   href: '/contact',
 },
];



interface Sizes {
 deskScale: number;
 deskPosition: [number, number, number];
 cubePosition: [number, number, number];
 reactLogoPosition: [number, number, number];
 ringPosition: [number, number, number];
 targetPosition: [number, number, number];
}

export const calculateSizes = (isSmall: boolean, isMobile: boolean, isTablet: boolean): Sizes => {
 return {
  deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
  deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
  cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [15, -5.5, 0],
  reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
  ringPosition: isSmall ? [-5, 6, 0] : isMobile ? [-10,7, 0] : isTablet ? [-12, 10, 0] : [-24, 7, 0],
  targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
 };
};


export const Skill_data = [
  {
    skill_name: "Html 5",
    Image: "public/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "public/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "public/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "public/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "public/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: "public/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    Image: "public/reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Type Script",
    Image: "public/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js 13",
    Image: "public/next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    Image: "public/framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node js",
    Image: "public/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express js",
    Image: "public/express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "public/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Material UI",
    Image: "public/mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Postger SQL",
    Image: "public/postger.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    Image: "public/prisma.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    Image: "public/graphql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    Image: "public/figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Vite",
    Image: "public/vite.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "gsap",
    Image: "public/gsap.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "threejs",
    Image: "public/threejss.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "aws",
    Image: "public/aws.webp",
    width: 50,
    height: 50,
  },
  {
    skill_name: "turbopack",
    Image: "public/turbopack.webp",
    width: 100,
    height: 100,
  },
];

export const Socials = [
  {
    name: "Discord",
    src: "public/instagram.svg",
  },
  {
    name: "Facebook",
    src: "public/facebook.svg",
  },
  {
    name: "Instagram",
    src: "public/discord.svg",
  },
];




