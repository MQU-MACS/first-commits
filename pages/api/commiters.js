// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const response = await fetch("https://raw.githubusercontent.com/MQU-MACS/first-commits/main/README.md");
  const data = await response.text();

  if (!data) {
    res.status(200).json({names: []})
  }

  const names = data.split("\n");

  res.status(200).json({ names: names.slice(2) })
}
