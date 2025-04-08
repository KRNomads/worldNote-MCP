import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerAllResources } from "./resources/index.js";
import { registerAllTools } from "./tools/index.js";

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

// 분리한 Tool 등록
registerAllTools(server);

// 분리한 리소스 등록
registerAllResources(server);

const transport = new StdioServerTransport();
await server.connect(transport);
