"use client";

import { useEffect, useRef } from "react";

// A trimmed cut of SmartPay's launch video (smartpay/brag-output/brag.mp4,
// 3.9s-23.6s: SMS arrives -> pick a fee -> MoMo or card -> done -> the
// school's dashboard updates), re-encoded to 1280x720 with no audio, ~400KB.
// Same pattern as Academia Hub's hero: autoplay, muted, looping, no
// controls, so it reads as a living screenshot. Muted + playsInline are
// what browsers require before they allow autoplay. Visitors who ask for
// reduced motion get the poster frame and controls instead.
export default function HeroVideo() {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      video.controls = true;
      return;
    }
    // Some mobile browsers ignore the autoplay attribute until play() is
    // called; a rejected promise (e.g. data saver) just leaves the poster.
    video.play().catch(() => {});
  }, []);

  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-blue/20 via-green-bright/15 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-border bg-[#F8FAFC] shadow-[var(--shadow-lift)]">
        <video
          ref={ref}
          src="/hero-demo.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          width={1280}
          height={720}
          className="block aspect-video w-full"
          aria-label="SmartPay in action: a parent receives the fee SMS, pays by Mobile Money, and the school's dashboard updates."
        />
      </div>
    </div>
  );
}
