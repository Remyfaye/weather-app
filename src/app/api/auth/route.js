// src/app/api/auth/route.js

export async function POST(req) {
  return new Response(JSON.stringify({ message: "Login sucessfull!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
