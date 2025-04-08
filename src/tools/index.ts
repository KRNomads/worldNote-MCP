import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerAddTool } from "./addTool.js";

export function registerAllTools(server: McpServer) {
  registerAddTool(server);
}
