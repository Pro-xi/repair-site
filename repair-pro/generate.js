const { GoogleSpreadsheet } = require('google-spreadsheet'); // To read sheets
const { GoogleGenerativeAI } = require("@google/generative-ai"); // Gemini API
const fs = require('fs');

async function run() {
  // 1. Access Google Sheet
  const doc = new GoogleSpreadsheet('YOUR_SHEET_ID');
  await doc.useServiceAccountAuth(JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON));
  await doc.loadInfo();
  const sheet = doc.sheetsByTitle['Content'];
  const rows = await sheet.getRows();

  // 2. Find "Pending" row
  const rowToProcess = rows.find(r => r.Status.toLowerCase() === 'pending');
  if (!rowToProcess) return console.log("No pending topics.");

  // 3. Ask Gemini to write
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
  const prompt = `Write a professional 800-word blog post about: ${rowToProcess.Topic}. Use Markdown.`;
  
  const result = await model.generateContent(prompt);
  const articleBody = result.response.text();

  // 4. Save to your local repo folder
  const fileName = `posts/${rowToProcess.Slug}.md`;
  fs.writeFileSync(fileName, articleBody);

  // 5. Mark as Ready in Sheet
  rowToProcess.Status = 'Published';
  await rowToProcess.save();
}
run();