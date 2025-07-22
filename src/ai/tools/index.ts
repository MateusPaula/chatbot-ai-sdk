import { ToolCallUnion, ToolResultUnion } from "ai"
import { githubProfile } from "./github-profile"
import { httpFetch } from "./http-fetch"

export type AIToolSet = ToolCallUnion<typeof tools> // Determina basicamente quais tools existem na ai
export type AIToolResult = ToolResultUnion<typeof tools> // Cria uma union com o possível resultado de cada uma das tools

export const tools = {
  githubProfile,
  httpFetch
}