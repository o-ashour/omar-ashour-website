import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-VariableFont_wght.ttf",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Omar Ashour | Frontend & Full-Stack Developer",
  description: "Explore the portfolio of Omar Ashour, a frontend and full-stack developer based in Halifax, Nova Scotia with expertise in modern web development technologies and a passion for crafting interactive, high-performance web applications.",
  keywords: [
    'Next.js', 'React', 'JavaScript', 'TypeScript', 'Full-Stack Developer', 'Frontend Developer', 'Backend Developer', 'Firebase', 'PostgreSQL', 'MongoDB',
    'GraphQL', 'SQL', 'NoSQL', 'REST API', 'API Development', 'Chakra UI', 'SCSS', 'CSS3', 'HTML5', 'Software Engineer', 'Freelancer', 'Web Development',
    'Responsive Design', 'UX/UI Design', 'Coding', 'Software Development'
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
