import { handle } from "../../openai";

export const GET = handle;
export const POST = handle;

// Reasoning models can take longer than the Edge runtime's first-byte limit.
export const runtime = "nodejs";
export const maxDuration = 300;
export const preferredRegion = "hnd1";
