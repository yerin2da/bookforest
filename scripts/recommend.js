const axios = require("axios");
const fs = require("fs");

const url = "http://api.kcisa.kr/openapi/service/rest/meta13/getNLKF0201";
const params = {
    serviceKey: "b6349ce7-4bb8-4ab8-8605-d7bcb9a4bc7c",
    numOfRows: 100000,
    pageNo: 1,
};

(async () => {
    try {
        const response = await axios.get(url, {
            params,
            headers: { Accept: "application/json" },
        });

        const items = response.data.response.body.items?.item ?? [];

        const filtered = items.filter(
            (item) => item.regDate && item.regDate.startsWith("2025")
        );

        fs.writeFileSync("recommend.json", JSON.stringify(filtered, null, 2), "utf-8");
        console.log(`✅ recommend.json 파일 저장 완료 (${filtered.length}건)`);
    } catch (error) {
        console.error("❌ 오류 발생:", error.message);
    }
})();
