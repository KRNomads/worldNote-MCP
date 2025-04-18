import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getCharacterInfoResource } from "./getCharacterInfoResource.js";

export function registerAllResources(server: McpServer) {
  getCharacterInfoResource(server);
}
