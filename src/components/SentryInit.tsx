"use client";

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c3fa8a0675803af698f71c51b2a4b26d@o4509966520221696.ingest.us.sentry.io/4509966520942592",

  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
      showBranding: false,
      triggerSelector: ".sentry-feedback-trigger",
    }),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Define how likely Replay events are sampled. Adjust this value in production, or use tracesSampler for greater control.
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

export default function SentryInit() {
  return null;
}
