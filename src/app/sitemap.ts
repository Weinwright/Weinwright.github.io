import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";

export const dynamic = "force-static";

const routes = [
  { path: "/", priority: 1, images: ["/opengraph-image.png"] },
  { path: "/oss4ai/", priority: 0.9, images: ["/media/posters/agents-together.jpg", "/media/posters/rag-agentic.jpg"] },
  { path: "/seattle-startup-summit/", priority: 0.8, images: ["/media/covers/seattle.png"] },
  { path: "/claude/", priority: 0.8, images: ["/media/covers/claude.png"] },
  { path: "/lucid-bots/", priority: 0.8, images: ["/media/covers/lucid-bots.png"] },
  { path: "/heygen/", priority: 0.8, images: ["/media/heygen/poster.png"] },
  { path: "/sony-music-entertainment/", priority: 0.8, images: ["/media/covers/sony.png"] },
  { path: "/double-slit-experiment/", priority: 0.7, images: ["/media/covers/double-slit.jpg"] },
  { path: "/how-do-we-see/", priority: 0.7, images: ["/media/covers/how-do-we-see.jpg"] },
  { path: "/animated-character/", priority: 0.7, images: ["/media/covers/animated-character.jpg"] },
  { path: "/logo-animation-summit-invest/", priority: 0.7, images: ["/media/covers/summit-invest.png"] },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, images }) => {
    const videos = path === "/oss4ai/"
      ? [
          {
            title: "How AI Agents Work Together",
            description: "An animated short-form explainer showing how multiple AI agents coordinate to complete a task.",
            thumbnail_loc: `${SITE_URL}/media/posters/agents-together.jpg`,
            content_loc: `${SITE_URL}/media/agents-together-final.mp4`,
          },
          {
            title: "What Makes RAG Agentic?",
            description: "A short-form motion explainer about the difference between standard and agentic retrieval-augmented generation.",
            thumbnail_loc: `${SITE_URL}/media/posters/rag-agentic.jpg`,
            content_loc: `${SITE_URL}/media/what-makes-rag-agentic-final.mp4`,
          },
          {
            title: "Does the LLM Execute the Code?",
            description: "An animated architecture explainer about how an LLM uses function calling to request code execution.",
            thumbnail_loc: `${SITE_URL}/media/posters/llm-code.jpg`,
            content_loc: `${SITE_URL}/media/does-llm-execute-the-code-final.mp4`,
          },
          {
            title: "How Small AI Errors Become Big Failures",
            description: "A short-form motion explainer about compounding errors in AI production systems.",
            thumbnail_loc: `${SITE_URL}/media/posters/compounding-errors.jpg`,
            content_loc: `${SITE_URL}/media/compounding-errors-final.mp4`,
          },
        ]
      : undefined;

    return {
      url: `${SITE_URL}${path}`,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority,
      images: images.map((image) => `${SITE_URL}${image}`),
      ...(videos ? { videos } : {}),
    };
  });
}
