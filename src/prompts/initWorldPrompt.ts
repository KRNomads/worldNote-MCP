import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { z } from "zod";

export function initWorldPrompt(server: McpServer) {
  server.prompt(
    "init_world_info",
    "세계관 정보를 초기화 합니다.",
    { worldName: z.string() },
    async ({ worldName }) => {
      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `${worldName} 정보를 불러와서 세계관 정보를 초기화해줘.`,
            },
          },
        ],
      };
    }
  );
}
