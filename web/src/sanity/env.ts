export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// Sanity nije podešen dok klijent ne napravi projekat (vidi tech-stack.md).
// Blog stranice u tom slučaju koriste fallback sadržaj iz src/lib/blog/fallback-posts.ts.
export const sanityConfigured = Boolean(projectId);
