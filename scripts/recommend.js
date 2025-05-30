const axios = require("axios");
const fs = require("fs");

const url = "http://api.kcisa.kr/openapi/API_LIB_048/request";
const params = {
    serviceKey: "f9918080-a14d-40d2-ad2f-8b700827e893",
    numOfRows: 343,
    pageNo: 1,
};

(async () => {
    try {
        const response = await axios.get(url, {
            params,
            headers: { Accept: "application/json" },
        });

        const items = response.data.response.body.items?.item ?? [];

        // ❗ unified 변수 대신 items를 사용
        fs.writeFileSync("public/db/all.json", JSON.stringify(items, null, 2), "utf-8");

        console.log(`✅ all.json 파일 저장 완료 (${items.length}건)`);
    } catch (error) {
        console.error("❌ 오류 발생:", error.message);
    }
})();
