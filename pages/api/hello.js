// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");
export default function handler(req, res) {
  fs.writeFileSync("./users.json", JSON.stringify(req.body));
  return res.status(200).json({ success: true });
}
