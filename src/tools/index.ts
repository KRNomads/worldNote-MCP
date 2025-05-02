import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { makeCharacterTool } from "./makeCharacterTool.js";
import { makeWorldDetailsTool } from "./makeWorldDetailsTool.js";
import { getUserProjectsTool } from "./getUserProjectsTool.js";
import { getProjectMetaInfoTool } from "./getProjectMetaInfoTool.js";
import { readNoteTool } from "./readNoteTool.js";

export function registerAllTools(server: McpServer) {
  makeCharacterTool(server);
  makeWorldDetailsTool(server);
  getUserProjectsTool(server);
  getProjectMetaInfoTool(server);
  readNoteTool(server);
}
