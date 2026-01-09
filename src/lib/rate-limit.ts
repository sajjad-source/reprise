// Simple in-memory rate limiter for development
// For production, use @upstash/ratelimit with Redis

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

interface RateLimitOptions {
  interval: number; // in milliseconds
  maxRequests: number;
}

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

export function rateLimit(
  identifier: string,
  options: RateLimitOptions = { interval: 60000, maxRequests: 10 }
): RateLimitResult {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  // Clean up old entries periodically
  if (Math.random() < 0.01) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!entry || now > entry.resetTime) {
    // Create new entry or reset expired entry
    const newEntry: RateLimitEntry = {
      count: 1,
      resetTime: now + options.interval,
    };
    rateLimitMap.set(identifier, newEntry);
    return {
      success: true,
      limit: options.maxRequests,
      remaining: options.maxRequests - 1,
      reset: newEntry.resetTime,
    };
  }

  if (entry.count >= options.maxRequests) {
    return {
      success: false,
      limit: options.maxRequests,
      remaining: 0,
      reset: entry.resetTime,
    };
  }

  // Increment count
  entry.count++;
  return {
    success: true,
    limit: options.maxRequests,
    remaining: options.maxRequests - entry.count,
    reset: entry.resetTime,
  };
}

// Auth rate limit: 5 attempts per minute per IP
export function authRateLimit(ip: string): RateLimitResult {
  return rateLimit(`auth:${ip}`, { interval: 60000, maxRequests: 5 });
}

// Signup rate limit: 3 attempts per hour per IP (stricter)
export function signupRateLimit(ip: string): RateLimitResult {
  return rateLimit(`signup:${ip}`, { interval: 3600000, maxRequests: 3 });
}

// General API rate limit: 60 requests per minute per IP
export function apiRateLimit(ip: string): RateLimitResult {
  return rateLimit(`api:${ip}`, { interval: 60000, maxRequests: 60 });
}
