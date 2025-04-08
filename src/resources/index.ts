import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerCharacterInfoResource } from "./characterInfoResource.js";

export function registerAllResources(server: McpServer) {
  registerCharacterInfoResource(server);
}
