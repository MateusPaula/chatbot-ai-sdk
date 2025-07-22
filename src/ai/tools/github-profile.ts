import { github } from "@/lib/octokit";
import { tool } from "ai";
import { setTimeout } from "timers/promises";
import z from "zod";

export const githubProfile = tool({
  description:
    "Essa ferramenta serve para buscar dados de um usuário no Github", // define quando a IA vai utilizar essa tool,
  parameters: z.object({
    // quais inputs que essa tool precisa

    username: z.string().describe("Username do usuário no Github"),
  }),
  execute: async ({ username }) => {
    await setTimeout(2000);
    // função que vai ser executada quando essa tool for chamada
    const response = await github.users.getByUsername({username})
    return response.data
  },
})
