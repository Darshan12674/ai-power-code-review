// app/api/test-github/route.ts

import { getGithubApp } from "@/features/github/utils/github-app";

export async function GET() {
  try {
    const app = getGithubApp();

    const res = await app.octokit.request("GET /app");

    return Response.json(res.data);
  } catch (e) {
    console.error(e);
    return Response.json(e);
  }
}