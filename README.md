# LeadSync Redesign - Awwwards 2026 Edition

This project is a high-performance, interactive redesign of LeadSync, built with Next.js 14, Tailwind CSS, GSAP, and Lenis.

## Features Implemented

1.  **Tech Stack**:
    *   Next.js 14 (App Router)
    *   Tailwind CSS (Custom Theme & Variables)
    *   GSAP 3 (ScrollTrigger, Timeline, custom SplitText)
    *   Lenis (Smooth Scrolling)
    *   Lucide React (Icons)

2.  **Design System**:
    *   **Typography**: Clash Display (Headings) + Inter (Body).
    *   **Aesthetics**: Glassmorphism, Deep Gradients, Dark/Light mode support.
    *   **Motion**: Magnetic Buttons, Text Reveals, Parallax.

3.  **Core Sections**:
    *   **Hero**: Sticky 3D visualization placeholder, split-text reveal, magnetic CTA.
    *   **Features**: Horizontal scroll interactive showcase with card reveals.
    *   **Pricing**: Interactive toggle & slider for dynamic pricing.

## Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run development server:
    ```bash
    npm run dev
    ```
3.  Open [http://localhost:3000](http://localhost:3000).

## Animations
*   **Hero**: Initial load timeline with staggered text.
*   **Scroll**: Smooth inertia scrolling via Lenis.
*   **Features**: Pinning horizontal scroll.
*   **Hover**: Magnetic button effect for primary CTA.

## Next Steps
*   Integrate actual 3D models via Spline/Three.js in `src/components/3d`.
*   Connect pricing calculator to checkout.
*   Add more micro-interactions (cursor trail, etc).
