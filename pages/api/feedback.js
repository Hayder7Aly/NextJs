import fs from "fs";
import path from "path";

export function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

export const buildFeedbackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};

function handler(req, res) {
  
  const filePath = buildFeedbackPath();
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.feedback;

    const obj = { id: new Date().toISOString(), email, feedback };
    // store that in a database or in a file

    const data = extractFeedback(filePath);
    data.push(obj);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "success !", feedback: obj });
  } else {
    const data = extractFeedback(filePath);

    res.status(200).json({ message: "This works", feedback: data });
  }
}

export default handler;
