const fs = require("fs");

const recommend = JSON.parse(fs.readFileSync("recommend.json", "utf-8"));
const art = JSON.parse(fs.readFileSync("art.json", "utf-8"));

const librarianRecommend = recommend.filter(item =>
    item.regDate?.startsWith("2025-03")
);

const recommendOnly = recommend.filter(item =>
    item.regDate?.startsWith("2025-05")
);

const unified = {
    librarianRecommend,
    recommend: recommendOnly,
    art
};

fs.writeFileSync("all.json", JSON.stringify(unified, null, 2), "utf-8");
console.log("✅ all.json 저장 완료!");
