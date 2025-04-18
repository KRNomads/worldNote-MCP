import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerAllResources } from "./resources/index.js";
import { registerAllTools } from "./tools/index.js";
import { registerAllPrompts } from "./prompts/index.js";

const server = new McpServer(
  {
    name: "worldNote",
    version: "1.0.0",
  },
  {
    capabilities: {
      resources: {},
      prompts: {},
      tools: {},
    },
  }
);

registerAllTools(server);

registerAllResources(server);

registerAllPrompts(server);

const transport = new StdioServerTransport();
await server.connect(transport);
