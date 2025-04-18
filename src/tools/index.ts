import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getBasicInfoTool } from "./getBasicInfoTool.js";
import { getCharcterInfoTool } from "./getCharcterInfoTool.js";
import { getWorldInfoTool } from "./getWorldInfoTool.js";

export function registerAllTools(server: McpServer) {
  getBasicInfoTool(server);
  getCharcterInfoTool(server);
  getWorldInfoTool(server);
}
