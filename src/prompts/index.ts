import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { initWorldPrompt } from "./initWorldPrompt.js";

export function registerAllPrompts(server: McpServer) {
  initWorldPrompt(server);
}
