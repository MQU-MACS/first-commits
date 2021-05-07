export default async (req, res) => {
  // const response = await fetch("https://raw.githubusercontent.com/MQU-MACS/first-commits/main/README.md");
  const response = await fetch("https://api.github.com/repos/MQU-MACS/first-commits/contributors");
  const data: any[]= await response.json();

  if (!data) {
    res.status(200).json({names: []})
  }

  const names = data.map(contributor => {
    return contributor.login
  })

  res.status(200).json({ names: names })
}
