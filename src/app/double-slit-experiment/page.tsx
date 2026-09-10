import SimpleCaseStudy from "../components/SimpleCaseStudy";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Animated Explainer — Double-Slit Experiment",
  description: "An animated explainer that turns the double-slit experiment into a clear, engaging visual story.",
  path: "/double-slit-experiment/",
  image: "/media/covers/double-slit.jpg",
  imageAlt: "Animated explainer about the double-slit experiment",
});

export default function DoubleSlitExperiment() {
  return <SimpleCaseStudy name="Animated Explainer — Double-Slit Experiment" videoId="KqCH8Yty0u8" />;
}
