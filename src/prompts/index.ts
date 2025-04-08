import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerPormpt } from "./practicePrompt";

export function registerAllPrompts(server: McpServer) {
  registerPormpt(server);
}
