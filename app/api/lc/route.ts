import { NextResponse } from "next/server";

const USERNAME = "goel-aadhaar";

export async function GET() {
  try {
    const [profileRes, solvedRes] = await Promise.all([
      fetch(`https://alfa-leetcode-api.onrender.com/${USERNAME}`, {
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://alfa-leetcode-api.onrender.com/${USERNAME}/solved`,
        { next: { revalidate: 3600 } }
      ),
    ]);

    const [profileData, solvedData] = await Promise.all([
      profileRes.json(),
      solvedRes.json(),
    ]);

    return NextResponse.json({
      totalSolved: solvedData?.solvedProblem ?? null,
      easySolved: solvedData?.easySolved ?? null,
      mediumSolved: solvedData?.mediumSolved ?? null,
      hardSolved: solvedData?.hardSolved ?? null,
      ranking: profileData?.ranking ?? null,
      reputation: profileData?.reputation ?? null,
      totalSubmissions: profileData?.totalSubmissions ?? null,
    });
  } catch {
    return NextResponse.json({
      totalSolved: null,
      easySolved: null,
      mediumSolved: null,
      hardSolved: null,
      ranking: null,
    });
  }
}
