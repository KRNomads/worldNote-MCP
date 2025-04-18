import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { z } from "zod";

export function getWorldInfoTool(server: McpServer) {
  server.tool(
    "getWorldInfo",
    "세계관 정보를 가져옴",
    { worldName: z.string() },
    async ({ worldName }) => {
      const responseText = JSON.stringify(dummyWorldInfo, null, 2);

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
const dummyWorldInfo = {
  world: {
    name: "엘리세움",
    type: "판타지",
    era: "중세 후기",
    description:
      "마법과 기술이 공존하는 세계. 고대 문명의 유산과 다양한 종족이 얽힌 대륙에서 여러 왕국과 세력이 대립하고 있다.",
  },
  geography: {
    continents: [
      {
        name: "알티라 대륙",
        regions: [
          {
            name: "벨가르 왕국",
            climate: "온대",
            capital: "실버린",
            notableLocations: ["왕궁의 마도탑", "사자의 계곡"],
          },
          {
            name: "카르니아 제국",
            climate: "건조",
            capital: "네메시스",
            notableLocations: ["붉은 사막", "황제의 철성"],
          },
        ],
      },
    ],
  },
  factions: [
    {
      name: "성기사단 루멘",
      type: "기사단",
      alignment: "질서 선",
      goals: "고대의 악을 봉인하고 세상의 균형을 지키는 것",
    },
    {
      name: "검은 달의 의회",
      type: "비밀 결사",
      alignment: "혼돈 악",
      goals: "고대 금기를 풀고 세상을 지배하려는 것",
    },
  ],
  races: [
    {
      name: "엘프",
      traits: ["수명 수천 년", "자연과의 교감", "마법 적성 높음"],
    },
    {
      name: "인간",
      traits: ["적응력 뛰어남", "단명하지만 다양함", "기술 발달"],
    },
    {
      name: "드워프",
      traits: ["강인한 체력", "광산과 대장간 기술", "보수적 성향"],
    },
  ],
  magicSystem: {
    source: "마나",
    types: ["원소 마법", "정령계약", "고대 룬"],
    rules: [
      "마나는 자연에서 추출되며 소모성이다.",
      "마법사는 마나 흐름을 이해하고 조율할 수 있어야 한다.",
      "룬 마법은 고대어를 필요로 하며 위험성이 높다.",
    ],
  },
  history: [
    {
      era: "태초의 시대",
      events: ["세계수의 탄생", "초대 드래곤과 인간의 계약"],
    },
    {
      era: "분열의 시대",
      events: ["엘프와 인간의 전쟁", "룬 문명의 멸망"],
    },
  ],
};
