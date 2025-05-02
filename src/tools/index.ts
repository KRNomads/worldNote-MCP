import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { makeCharacterTool } from "./makeCharacterTool.js";
import { makeWorldDetailsTool } from "./makeWorldDetailsTool.js";

export function registerAllTools(server: McpServer) {
  makeCharacterTool(server);
  makeWorldDetailsTool(server);
}
