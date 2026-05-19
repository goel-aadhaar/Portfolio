import { NextResponse } from "next/server";

const HANDLE = "goel-aadhaar";

export async function GET() {
  try {
    const [userRes, ratingRes, statusRes] = await Promise.all([
      fetch(`https://codeforces.com/api/user.info?handles=${HANDLE}`, {
        next: { revalidate: 3600 },
      }),
      fetch(`https://codeforces.com/api/user.rating?handle=${HANDLE}`, {
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://codeforces.com/api/user.status?handle=${HANDLE}&count=5000`,
        { next: { revalidate: 3600 } }
      ),
    ]);

    const [userData, ratingData, statusData] = await Promise.all([
      userRes.json(),
      ratingRes.json(),
      statusRes.json(),
    ]);

    let solvedCount: number | null = null;
    if (statusData.status === "OK") {
      const solved = new Set<string>();
      for (const s of statusData.result) {
        if (s.verdict === "OK") {
          const key = `${s.problem.contestId ?? s.contestId}-${s.problem.index}`;
          solved.add(key);
        }
      }
      solvedCount = solved.size;
    }

    return NextResponse.json({
      user: userData.status === "OK" ? userData.result[0] : null,
      rating: ratingData.status === "OK" ? ratingData.result : null,
      solvedCount,
    });
  } catch {
    return NextResponse.json({ user: null, rating: null, solvedCount: null });
  }
}
