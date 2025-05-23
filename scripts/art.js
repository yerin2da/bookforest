const axios = require("axios");
const fs = require("fs");

const url = "http://api.kcisa.kr/openapi/API_CCA_145/request";
const params = {
    serviceKey: "5f91a911-5afc-4cd6-b2a8-b23d9a156074",
    numOfRows: 10000,
    pageNo: 1,
};

(async () => {
    try {
        const response = await axios.get(url, {
            params,
            headers: { Accept: "application/json" }, // JSON 형식 요청
        });

        const items = response.data.response.body.items?.item ?? [];

        const filtered = items.filter(
            (item) => item.CNTC_INSTT_NM === "국립어린이청소년도서관"
        );

        fs.writeFileSync("art.json", JSON.stringify(filtered, null, 2), "utf-8");
        console.log(`✅ art.json 파일 저장 완료 (${filtered.length}건)`);
    } catch (error) {
        console.error("❌ 오류 발생:", error.message);
    }
})();
