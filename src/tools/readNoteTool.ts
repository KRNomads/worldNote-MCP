import axios from "axios";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import dotenv from "dotenv";
import https from "https";

dotenv.config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

const agent = new https.Agent({
  rejectUnauthorized: false, // 인증서 검증을 하지 않음
});

export function readNoteTool(server: McpServer) {
  // 캐릭터 생성 툴
  server.tool(
    "read_note",
    "특정 노트를 조회함",
    {
      noteId: z.string(),
    },
    async ({ noteId }) => {
      try {
        const response = await axios.get(
          `${apiUrl}/api/v1/llm/note/${noteId}`,
          {
            headers: {
              "X-API-KEY": apiKey, // API 키를 요청 헤더에 추가
            },
            httpsAgent: agent,
          }
        );

        const responseText = `노트 정보:\n${JSON.stringify(
          response.data,
          null,
          2
        )}`;

        return {
          content: [
            {
              type: "text",
              text: `note content: ${responseText}`,
            },
          ],
        };
      } catch (error) {
        let errorMessage = "알 수 없는 오류가 발생했습니다.";

        if (error instanceof Error) {
          errorMessage = error.message;
        }

        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `Error: ${errorMessage}`,
            },
          ],
        };
      }
    }
  );
}
