import SimpleCaseStudy from "../components/SimpleCaseStudy";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Animated Explainer — How Do We See?",
  description: "An animated explainer that makes the science of human vision clear through accessible visual storytelling.",
  path: "/how-do-we-see/",
  image: "/media/covers/how-do-we-see.jpg",
  imageAlt: "Animated explainer about how human vision works",
});

export default function HowDoWeSee() {
  return <SimpleCaseStudy name="Animated Explainer — How Do We See" videoId="NkI2qc8ZUK0" />;
}
