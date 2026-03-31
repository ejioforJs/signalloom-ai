# SignalLoom AI

SignalLoom is a Next.js startup product for decision rehearsal, built by James Solomon. Teams can run a launch, pricing move, market expansion, or crisis-response idea through an AI-generated stakeholder room before the real market reacts.

## What It Does

- Generates a structured rehearsal packet for a proposed initiative
- Scores launch readiness and names the sharpest flashpoints
- Produces synthetic stakeholder voices, drills, proof points, and an execution checklist
- Saves recent rehearsal rooms in the browser so teams can revisit and compare runs
- Falls back to a local simulation engine when no model key is configured

## Stack

- Next.js App Router
- TypeScript
- React 19
- CSS Modules
- Route Handlers for the rehearsal API
- OpenAI Responses API for live structured outputs

## Local Development

1. Install dependencies with `npm install`
2. Copy `.env.example` to `.env.local`
3. Add `OPENAI_API_KEY` if you want live model-backed rehearsal runs
4. Start the app with `npm run dev`
5. Open `http://localhost:3000`

## Environment

- `OPENAI_API_KEY`
  Required for live AI-backed rehearsal generation
- `OPENAI_MODEL`
  Optional override for the model name
  Default: `gpt-5.2-chat-latest`

If no API key is set, SignalLoom automatically uses the built-in local simulation engine so the product still works in development and offline workflows.

## Routes

- `/` landing page for the startup narrative
- `/rehearse` full rehearsal workspace with saved recent rooms
- `/api/rehearse` rehearsal engine endpoint with AI mode and local fallback mode

## Project Structure

- `src/app` app router pages, layout, API route, and global styles
- `src/components` shared interactive product UI
- `src/data` marketing copy and scenario templates
- `src/lib` shared rehearsal types, structured schema, AI engine, and fallback engine

## Product Direction

This repo now behaves like a real product foundation. The next natural startup layers would be authentication, team workspaces, database-backed room history, billing, collaboration, analytics, and evals for rehearsal quality.
