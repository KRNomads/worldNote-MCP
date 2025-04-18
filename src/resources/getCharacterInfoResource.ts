import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";

export function getCharacterInfoResource(server: McpServer) {
  server.resource(
    "get_character_info",
    new ResourceTemplate("character://{name}", { list: undefined }),
    async (uri, { name }) => {
      const character = dummyCharacters[name as string];

      const responseText = character
        ? JSON.stringify(character, null, 2)
        : `'${name}'에 대한 정보를 찾을 수 없습니다.`;

      return {
        contents: [
          {
            uri: uri.href,
            mimeType: "text/plain",
            text: responseText,
          },
        ],
      };
    }
  );
}

// 더미데이터
const dummyCharacters: Record<string, Record<string, any>> = {
  에이든블랙우드: {
    이름: "에이든블랙우드",
    나이: 32,
    성별: "남성",
    역할: "탐정",
    성격: "침착함, 분석적, 내성적",
    배경: "전직 군 정보 요원 출신으로, 지금은 네오 느와르 도시에서 개인 탐정으로 활동 중이다.",
    기술: ["관찰력", "맨손 전투", "심문"],
    목표: "연속 실종 사건의 진실을 밝히는 것",
  },
  레나모로: {
    이름: "레나모로",
    나이: 28,
    성별: "여성",
    역할: "해커",
    성격: "냉소적, 천재적, 반항적",
    배경: "디지털 암흑가에서 자란 자수성가 해커. 부패한 기업에 대한 개인적인 원한을 품고 있다.",
    기술: ["해킹", "은신", "사회 공학"],
    목표: "거대 기업의 불법 감시 프로그램을 세상에 폭로하는 것",
  },
};
