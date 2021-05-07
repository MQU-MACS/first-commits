// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const response = await fetch("https://pastebin.com/raw/t51QTMEQ");
  const data = await response.text();

  if (!data) {
    res.status(200).json({names: []})
  }

  const names = data.split("\n");

  res.status(200).json({ names: names })
}
