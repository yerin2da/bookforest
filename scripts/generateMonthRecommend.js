const fs = require("fs");
const path = require("path");
const axios = require("axios");

const API_URL =
    "https://api.kcisa.kr/openapi/service/rest/convergence2018/conver6?serviceKey=4f44555c-9956-4e44-bc68-0ca98426de7c&numOfRows=10000&pageNo=1&_type=json";
const ALL_JSON_PATH = path.join(__dirname, "public/db/all.json");

async function updateMonthRecommend() {
    try {
        const response = await axios.get(API_URL);
        const items = response.data.response.body.items;

        if (!Array.isArray(items) || items.length === 0) {
            console.error("❌ API에서 가져온 데이터가 비어 있사옵니다.");
            return;
        }

        // 80개 자르기 (최신순 정렬 필요 시 contentsid 또는 pubDate 기준 정렬 가능)
        const sliced = items.slice(0, 80).map((item) => ({
            title: item.title || "",
            image: item.thumbUrl || "",
            description: item.description || "",
        }));

        // 기존 all.json 불러오기
        const allJson = JSON.parse(fs.readFileSync(ALL_JSON_PATH, "utf-8"));
        const monthRecs = allJson.monthRecommend;

        // code 1 유지
        const code1 = monthRecs.find((rec) => rec.code === "1");

        // code 2~5 교체 (label은 기존 유지)
        const updated = [2, 3, 4, 5].map((codeNum, i) => {
            const codeStr = codeNum.toString();
            const existing = monthRecs.find((rec) => rec.code === codeStr);
            return {
                code: codeStr,
                label: existing?.label || `${codeStr}월 추천`,
                items: sliced.slice(i * 20, (i + 1) * 20),
            };
        });

        // 최종 구성
        allJson.monthRecommend = [code1, ...updated];

        // 저장
        fs.writeFileSync(ALL_JSON_PATH, JSON.stringify(allJson, null, 2), "utf-8");
        console.log("✅ monthRecommend 코드 2~5가 JSON 데이터로 성공적으로 갱신되었사옵니다.");

    } catch (error) {
        console.error("❌ 처리 중 오류 발생:", error.message);
    }
}

updateMonthRecommend();
