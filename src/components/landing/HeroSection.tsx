import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import TerminalOverlay from "./TerminalOverlay";
import Link from "next/link";
import Image from "next/image";

const LeftContent = () => (
  <div className="lg:col-span-7 py-24 space-y-6">
    {/* TEXT CONTENT */}
    <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl">
      <div>Transform</div>
      <div className="text-primary">Your Body</div>
      <div>With Advanced</div>
      <div>
        AI <span className="text-primary">Technology</span>
      </div>
    </h1>
    {/* SEPERATOR LINE */}
    <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
    {/* DESCRIPATION */}
    <p className="text-lg text-muted-foreground w-2/3 mb-2">
      Talk to our AI assistant and get personalized diet plans and workout
      routines designed just for you.
    </p>
    {/* STATS */}
    <div className="flex gap-3 sm:gap-10 py-6 text-mono items-center">
      <div className="flex flex-col">
        <div className="text-primary text-2xl">500+</div>
        <div className="text-xs tracking-wide">ACTIVE USERS</div>
      </div>
      <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
      <div className="flex flex-col">
        <div className="text-primary text-2xl">3min</div>
        <div className="text-xs tracking-wide">GENERATION</div>
      </div>
      <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
      <div className="flex flex-col">
        <div className="text-primary text-2xl">100%</div>
        <div className="text-xs tracking-wide">PERSONALIZED</div>
      </div>
    </div>
    {/* GENERATE BUTTON */}
    <Button
      size="lg"
      asChild
      className="px-8 py-6 text-lg font-medium font-mono"
    >
      <Link
        href="/generate-program"
        className="flex justify-center items-center gap-2"
      >
        Build Your Program <ArrowRightIcon className="size-5" />
      </Link>
    </Button>
  </div>
);

const RightContent = () => (
  <div className="lg:col-span-5 relative w-full max-w-2xl lg:max-w-lg mx-auto h-dvh lg:h-full max-h-[800px] lg:max-h-none">
    {/* CORNER PECIES */}
    <div className="absolute inset-x-0 inset-y-4">
      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border"></div>
    </div>
    {/* IMAGE CONTAINER */}
    <div className="h-full py-6 px-4">
      <div className="relative h-full">
        <Image
          src="/hero-ai3.png"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          alt="AI Fittnes Trainer"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0">
          {/* Scan Line */}
          <div className="absolute inset-0 bg-[linear-gradient(var(--cyber-glow-primary)_3px,transparent_3px)] bg-[size:100%_15px] animate-scanline" />
          {/* Targeting Lines */}
          <div className="absolute top-1/2 left-1/2 -translate-1/2 w-1/3 h-1/3 border border-primary/40 rounded-full"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1/4 w-px bg-primary/50"></div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 h-px w-1/4 bg-primary/50"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 h-px w-1/4 bg-primary/50"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1/4 w-px bg-primary/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"></div>
          {/* TERMINAL OVERLAY */}
          <TerminalOverlay />
        </div>
      </div>
    </div>
  </div>
);

const HeroSection = () => (
  <section className="grid grid-cols-1 lg:grid-cols-12 relative container mx-auto">
    {/* CORNER DECORATION */}
    <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-border"></div>
    {/* LEFT CONTENT */}
    <LeftContent />
    {/* RIGHT CONTENT */}
    <RightContent />
  </section>
);

export default HeroSection;
