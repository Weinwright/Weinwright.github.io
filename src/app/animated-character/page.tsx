import SimpleCaseStudy from "../components/SimpleCaseStudy";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Animated Character Study",
  description: "A character animation study exploring expressive motion, timing, and visual storytelling.",
  path: "/animated-character/",
  image: "/media/covers/animated-character.jpg",
  imageAlt: "Animated character motion study",
});

export default function AnimatedCharacter() {
  return <SimpleCaseStudy name="Animated Character" videoId="hbXJAy17l9Y" />;
}
