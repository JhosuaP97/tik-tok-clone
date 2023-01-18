import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "w27hrat7",
  dataset: "production",
  apiVersion: "2023-01-11",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
