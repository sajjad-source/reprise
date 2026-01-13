# ScaleClip

A TikTok content testing and experimentation SaaS platform that helps creators systematically test different video hooks and captions to find what resonates with their audience.

## Live Demo

**URL:** [ADD YOUR HOSTED URL HERE]

## What I Learned

- **AI Integration for Video Content**: Learned how to integrate OpenAI's API to analyze video content and generate intelligent variations. This included using GPT-4o-mini for text generation and understanding how to craft prompts that produce authentic, creator-style hooks rather than generic AI-sounding content.

- **Video Processing Workflow**: Gained experience building a video upload pipeline with Vercel Blob storage, handling multiple video formats (MP4, MOV, WebM), and managing large file uploads up to 500MB.

- **AI-Powered Content Generation**: Implemented a system that generates multiple hook variations (questions, statements, pattern interrupts, relatable POVs) and caption variations (short, story-style, value-focused) - learning how to leverage AI to assist content creators in their workflow.

- **Full-Stack SaaS Architecture**: Built a complete authentication system with NextAuth, PostgreSQL database with Prisma ORM, rate limiting with Upstash Redis, and proper security practices like password hashing and input validation.

## What Went Well

- **UI/UX Design**: The landing page and dashboard turned out beautiful with a polished dark theme, smooth animations, and Aceternity-inspired effects. The visual design is professional and engaging.

- **Authentication System**: The email/password auth flow with NextAuth works reliably, including proper session management and protected routes.

- **AI Variant Generation**: The OpenAI integration successfully generates multiple hook and caption variations that sound natural and creator-authentic, not generic AI content.

- **Security Implementation**: Rate limiting, input validation, and proper password hashing were implemented from the start, making the app production-ready from a security standpoint.

## What Didn't Go Well

- **Video Content Analysis**: The main challenge was dealing with complex features like analyzing video content to generate more accurate captions. Extracting meaningful context from video to produce relevant, tailored variations proved to be more nuanced than expected.

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS 4, Radix UI
- **Backend**: Next.js API Routes, NextAuth 5, Prisma ORM
- **Database**: PostgreSQL (Neon)
- **AI**: OpenAI GPT-4o-mini
- **Storage**: Vercel Blob
- **Infrastructure**: Vercel, Upstash Redis (rate limiting)

## Features

- User authentication (signup/login)
- Video content upload with metadata
- AI-generated hook and caption variations
- Dashboard with content management
- Dark/light theme toggle
- Rate limiting and security protections

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your database URL, NextAuth secret, OpenAI API key, etc.

# Run database migrations
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
