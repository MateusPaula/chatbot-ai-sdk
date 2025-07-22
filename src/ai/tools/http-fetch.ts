import { tool } from "ai";
import { setTimeout } from "timers/promises";
import z from "zod";

export const httpFetch = tool({
  description: "Essa ferramenta serve para fazer requisições na web",
  parameters: z.object({
    url: z.string().describe("URL a ser requisitada"),
  }),
  execute: async ({ url }) => {
    await setTimeout(2000);
    const result = await fetch(url);
    const data = await result.text();
    return data;
  },
})
