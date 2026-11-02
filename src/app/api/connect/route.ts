// WebSocket/SSE Connect endpoint skeleton. Authenticate on connect, validate messages.
export async function GET() {
  return new Response("connect endpoint", { status: 200 });
}
