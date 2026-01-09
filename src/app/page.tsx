"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [activeVariant, setActiveVariant] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveVariant((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const variants = [
    { hook: "What if I told you the secret to...", views: "12.4K", engagement: "8.2%", winner: true },
    { hook: "Most people don't know this about...", views: "8.1K", engagement: "5.7%", winner: false },
    { hook: "Here's something that changed my...", views: "6.3K", engagement: "4.9%", winner: false },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background layers */}
      <div className="fixed inset-0">
        {/* Base grid */}
        <div className="absolute inset-0 bg-grid" />

        {/* Aurora effect */}
        <div className="aurora opacity-60" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />

        {/* Beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent beam" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent beam" style={{ animationDelay: "2s" }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-2xl" />
        <div className="relative max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-6">
            <Link href="#product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Product
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Log in
            </Link>
            <ThemeToggle />
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>

          <Button size="sm" className="md:hidden bg-white text-black hover:bg-zinc-200" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Spotlight on hero */}
          {mounted && <div className="spotlight left-1/2 top-1/2" />}

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8 opacity-0 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-muted-foreground">TikTok content testing engine</span>
          </div>

          {/* Headline with reveal effect */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="opacity-0 animate-fade-up animation-delay-100 inline-block">
              Find what works.
            </span>
            <br />
            <span className="opacity-0 animate-fade-up animation-delay-200 inline-block text-gradient-purple">
              Scale what wins.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up animation-delay-300">
            Stop guessing which hooks perform. Run controlled experiments,
            get clear insights, and double down on proven patterns.
          </p>

          {/* CTA with moving border effect */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 opacity-0 animate-fade-up animation-delay-400">
            <div className="relative group">
              {/* Animated border glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-50 blur transition duration-500" />

              <div className="relative flex bg-black rounded-xl">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-72 sm:w-80 h-12 rounded-r-none border-0 bg-zinc-900 text-white placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button className="h-12 rounded-l-none px-6 bg-white text-black hover:bg-zinc-200 font-medium" asChild>
                  <Link href={`/signup${email ? `?email=${encodeURIComponent(email)}` : ""}`}>
                    Start Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground opacity-0 animate-fade-up animation-delay-500">
            Free 7-day trial · No credit card required
          </p>
        </div>

        {/* Product Preview */}
        <div className="max-w-5xl mx-auto mt-20 opacity-0 animate-fade-up animation-delay-700">
          <div className="relative group">
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />

            {/* Main container */}
            <div className="relative rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-zinc-900/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-red-500 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-yellow-500 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-green-500 transition-colors cursor-pointer" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-zinc-800/80 text-xs text-zinc-400">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="font-mono">app.reprise.so</span>
                  </div>
                </div>
              </div>

              {/* App interface */}
              <div className="p-6 sm:p-8 bg-gradient-to-b from-zinc-900/50 to-zinc-950">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-medium text-white">Experiments</div>
                    <div className="px-2 py-0.5 rounded-full bg-zinc-800 text-xs text-zinc-400 font-medium">3 active</div>
                  </div>
                  <Button size="sm" className="bg-zinc-800 hover:bg-zinc-700 text-white border-0 text-xs font-medium">
                    + New Experiment
                  </Button>
                </div>

                {/* Experiment card */}
                <div className="rounded-xl border border-white/10 bg-zinc-900/50 overflow-hidden">
                  <div className="p-5 border-b border-white/5">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <div className="font-medium text-white">Hook Comparison Test</div>
                          <div className="px-2.5 py-1 rounded-full text-xs bg-emerald-500/20 text-emerald-400 font-semibold">
                            Complete
                          </div>
                        </div>
                        <div className="text-sm text-zinc-500">
                          3 variants · 4 days ago · Motivation niche
                        </div>
                      </div>
                      <Button size="sm" className="text-xs bg-white/5 hover:bg-white/10 text-white border border-white/10">
                        Scale Winner
                        <ArrowRight className="w-3 h-3 ml-1.5" />
                      </Button>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="p-2">
                    {variants.map((variant, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between p-4 rounded-lg transition-all duration-500 ${
                          variant.winner
                            ? "bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-500/30"
                            : activeVariant === i
                            ? "bg-white/[0.03]"
                            : "hover:bg-white/[0.02]"
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          {variant.winner ? (
                            <div className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center flex-shrink-0 ring-2 ring-emerald-500/20">
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-zinc-800 flex-shrink-0" />
                          )}
                          <span className={`text-sm truncate ${variant.winner ? "text-white font-medium" : "text-zinc-400"}`}>
                            "{variant.hook}"
                          </span>
                        </div>
                        <div className="flex items-center gap-8 text-sm flex-shrink-0 ml-4">
                          <div className={`${variant.winner ? "text-white" : "text-zinc-500"} tabular-nums`}>
                            {variant.views}
                          </div>
                          <div className={`w-16 text-right font-mono tabular-nums ${variant.winner ? "text-emerald-400 font-medium" : "text-zinc-500"}`}>
                            {variant.engagement}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Insight */}
                  <div className="p-4 border-t border-white/5 bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-transparent">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 ring-1 ring-white/10">
                        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-zinc-500 mb-1 font-medium">AI Insight</div>
                        <div className="text-sm text-zinc-300 leading-relaxed">
                          Question-style hooks outperformed statements by <span className="text-white font-semibold">53%</span> in engagement rate. Consider using more curiosity-driven openers.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { value: "500+", label: "Active creators", sublabel: "testing daily" },
              { value: "10K+", label: "Experiments run", sublabel: "last 30 days" },
              { value: "2.5M+", label: "Views generated", sublabel: "from winning hooks" },
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="text-6xl font-bold text-foreground mb-2 group-hover:text-gradient-purple transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-foreground/80 font-medium">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="product" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-6">
              How it works
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-foreground">
              The testing loop
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              A simple workflow to find what resonates with your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {[
              {
                num: "01",
                title: "Upload & Generate",
                desc: "Drop your video. AI generates hook and caption variations based on your content and niche.",
                color: "purple",
              },
              {
                num: "02",
                title: "Test Safely",
                desc: "We schedule variants with smart spacing on your account. No spam, no risk to your reach.",
                color: "blue",
              },
              {
                num: "03",
                title: "Scale Winners",
                desc: "See which patterns win. Generate more variations from proven hooks and post automatically.",
                color: "emerald",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-border bg-card/50 p-8 hover:border-border/80 transition-all duration-500 hover-lift"
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  step.color === "purple" ? "from-purple-500/10 to-transparent" :
                  step.color === "blue" ? "from-blue-500/10 to-transparent" :
                  "from-emerald-500/10 to-transparent"
                }`} />

                <div className="relative">
                  <div className={`text-7xl font-bold mb-6 transition-colors duration-300 ${
                    step.color === "purple" ? "text-muted-foreground/40 group-hover:text-purple-500/60" :
                    step.color === "blue" ? "text-muted-foreground/40 group-hover:text-blue-500/60" :
                    "text-muted-foreground/40 group-hover:text-emerald-500/60"
                  }`}>
                    {step.num}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-6">
                Features
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                <span className="text-foreground">Built for creators</span>
                <br />
                <span className="text-gradient-purple">who want results</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Not another scheduler. A testing engine that helps you understand
                what actually works on TikTok.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 font-medium" asChild>
                <Link href="/signup">
                  Start testing free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 stagger-children">
              {[
                {
                  title: "AI-powered variants",
                  desc: "Generate dozens of hook and caption variations in seconds. Multiple styles, fully customizable.",
                  icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                },
                {
                  title: "Safe posting",
                  desc: "Smart rate limiting and spacing protects your account. Test on your main account without worry.",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                },
                {
                  title: "Plain-language insights",
                  desc: "Not just numbers. Clear explanations of what worked and why, so you can replicate success.",
                  icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                },
                {
                  title: "One-click scaling",
                  desc: "Found a winning pattern? Generate more variations and schedule them instantly.",
                  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group flex gap-4 p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-border/80 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/80 transition-colors">
                    <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-6">
              Pricing
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-foreground">
              Simple pricing
            </h2>
            <p className="text-muted-foreground text-lg">
              Start free. Upgrade when you need more.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "$19",
                desc: "For getting started",
                features: ["1 TikTok account", "10 experiments/month", "AI variants", "Basic insights"],
                highlight: false,
              },
              {
                name: "Pro",
                price: "$49",
                desc: "For serious creators",
                features: ["3 TikTok accounts", "50 experiments/month", "Advanced AI", "Detailed analytics", "Priority support"],
                highlight: true,
              },
              {
                name: "Scale",
                price: "$99",
                desc: "For agencies",
                features: ["10 TikTok accounts", "Unlimited experiments", "API access", "Dedicated support"],
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-6 transition-all duration-300 hover-lift ${
                  plan.highlight
                    ? "border-2 border-purple-500/50 bg-gradient-to-b from-purple-500/10 to-transparent"
                    : "border border-border bg-card/50 hover:border-border/80"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <div className="font-semibold text-foreground text-lg mb-1">{plan.name}</div>
                  <div className="text-sm text-muted-foreground">{plan.desc}</div>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full h-11 font-medium ${
                    plan.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                  asChild
                >
                  <Link href="/signup">Get started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-purple-500/5 to-transparent dark:from-purple-500/20 dark:via-purple-500/5" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]" />

        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Ready to stop guessing?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join creators who are growing with data, not luck.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-base font-medium" asChild>
            <Link href="/signup">
              Start your free trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <p className="mt-4 text-muted-foreground text-sm">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo />
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="mailto:hello@reprise.so" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
}
