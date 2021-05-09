const API_URL =
  "https://api.github.com/repos/MQU-MACS/first-commits/contributors";
const CACHE_TIME = 5000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

let lastCall = 0;
let memNames = [];

async function getContributors(): Promise<string[]> {
  lastCall = Date.now();

  const response = await fetch(API_URL, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });
  const data: any[] = await response.json();

  if (!data) {
    return [];
  }

  const names: string[] = data.map((contributor) => {
    return contributor.login;
  });

  memNames = names;
  return names;
}

async function getCommiters(_req, res) {
  if (Date.now() - lastCall < CACHE_TIME) {
    // If it hasn't been CACHE_TIME milliseconds since the last request
    console.log("cached");

    res.status(200).json({ names: memNames });
  } else {
    console.log("not cached");

    const names = await getContributors();

    res.status(200).json({ names: names });
  }
}

export default getCommiters;
