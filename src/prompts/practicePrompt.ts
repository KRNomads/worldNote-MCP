import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";

export function registerPormpt(server: McpServer) {
  server.prompt("practice", "연습용 프롬프트", async (extra) => {
    return {
      messages: [
        {
          role: "assistant",
          content: {
            type: "text",
            text: "이건 연습용 프롬프트 결과입니다!",
          },
        },
      ],
    };
  });
}
