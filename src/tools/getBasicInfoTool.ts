import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { z } from "zod";

export function getBasicInfoTool(server: McpServer) {
  server.tool(
    "getBasicInfo",
    "기본 정보를 가져옴",
    { projectName: z.string() },
    async ({ projectName }) => {
      const info = dummyBasicInfo[projectName];

      const responseText = info
        ? JSON.stringify(info, null, 2)
        : `'${projectName}'에 대한 기본 정보를 찾을 수 없습니다.`;

      return {
        content: [
          {
            type: "text",
            text: responseText,
          },
        ],
      };
    }
  );
}

// 더미데이터
const dummyBasicInfo: Record<string, Record<string, any>> = {
  "잿빛 성의 아이": {
    title: "잿빛 성의 아이",
    genre: "판타지",
    conflict: {
      main_conflict: "고대 마법 무기를 두고 인간과 불사의 군단 사이의 전쟁",
      internal_conflict:
        "주인공은 자신의 정체성과 운명을 받아들일 수 있을지 고민함",
    },
    tone: "어둡고 진지하나 희망적인 분위기도 공존",
    themes: ["정체성", "희생", "우정", "운명"],
  },
};
