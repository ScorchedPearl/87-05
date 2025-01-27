import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function DisplayInfoCard() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
const projects = [
 {
 title: "CodeChef",
 description: "CodeChef is a competitive programming platform offering contests like Long Challenges, Cook-Offs, and Lunchtime to enhance problem-solving skills. It also features a learning portal with tutorials and practice problems for all levels.",
 link: "https://codechef.com",
 },
 {
 title: "CodeForces",
 description: "Codeforces is a competitive programming platform known for regular contests (Div. 1 to Div. 4) and a dynamic rating system. It offers a vast problem archive, virtual contests, and an active community for learning and interaction.",
 link: "https://netflix.com",
 },
 {
 title: "LeetCode",
 description: "LeetCode is a platform for coding practice and interviews, offering a vast collection of problems across various topics. It also hosts contests, provides company-specific problem sets, and supports learning with curated study plans.",
 link: "https://google.com",
 },
 {
 title: "Github",
 description: "GitHub is a web-based platform for version control and collaboration, enabling developers to host and manage code using Git. It facilitates teamwork by providing tools for issue tracking, code reviews, and project management.",
 link: "https://meta.com",
 },
];

export { projects };
