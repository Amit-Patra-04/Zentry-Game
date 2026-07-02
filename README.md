
# 🎮 Zentry - Modern Gaming Multiverse Landing Page

Welcome to the **Zentry Gaming Multiverse**, a premium, high-performance website inspired by Zentry's signature immersive web experiences. Built using **React 19**, **Vite**, **Tailwind CSS v4**, and **GSAP (GreenSock Animation Platform)**, this project demonstrates state-of-the-art frontend engineering, utilizing complex scroll-based clip-path morphs, interactive 3D parallax effects, custom loaders, and rich ambient audio integration.

---

## 📷 Website Preview

![Website Preview] <img width="1895" height="870" alt="Image" src="https://github.com/user-attachments/assets/df384e79-ddfc-41cd-9ba5-7a1e0be88996" />

---

## 🔗 Live View
*Experience the website live: [ [Website Live Link](https://zentry-gamming.netlify.app/)]*

---

## ✨ Features Breakdown

### 1. ⚡ Dynamic Video Frame Hero
* **Interactive Mini-Frame**: Clicking on the central hover-sensitive mini-frame switches seamlessly between a cycle of 4 premium loopable videos.
* **GSAP Transition Scale-Reveal**: Uses dynamic GSAP animations to expand the next video clip-path to 100% width and height in a beautiful circular transition, bringing the next clip to the forefront.
* **Smooth Load States**: Leverages custom loading state animations ("three-body" spinner) that hide once all assets are loaded.

### 2. 🌀 Scroll-Triggered Clip-Path Morphs
* **Hero Image Expansion**: As you scroll down from the Hero section, the polygon-shaped masked video frame smoothly morphs into a full-screen video with rounded borders.
* **About Clip-Path Expansion**: In the [About](file:///c:/Main/ZE/Zentry-Game/src/components/About.jsx) section, the image containers automatically transition from centered inset masks (`inset(20% 30% round 1.5rem)`) to fully un-masked sections pinning the content during scroll progression.
* **Dynamic Screen Adaptability**: Uses `gsap.matchMedia` for seamless scaling modifications across Mobile, Tablet, and Desktop viewports.

### 3. 🍱 Interactive 3D Bento Grid (BentoTilt & Spotlight Hover)
* **3D Perspective Tilt**: Elements wrapped in `BentoTilt` utilize high-fidelity mouse coordinate listeners to compute custom 3D rotations (`rotateX` and `rotateY` on a `perspective(700px)` viewport) reflecting the pointer's location.
* **Spotlight Gradient Effect**: Underneath the button triggers, a radial gradient follow-effect tracks mouse movements inside the Bento Cards to draw subtle visual emphasis.

### 4. 🔠 3D Splitted Typography Animations
* **Character/Word Splitting**: The [AnimatedTitle](file:///c:/Main/ZE/Zentry-Game/src/components/AnimatedTitle.jsx) component parses string nodes into words and applies a GSAP staggered timeline that animates 3D rotations, translations (`translate3d(10px, 51px, -60px) rotateY(60deg) rotateX(-40deg)`), and opacity on screen arrival.

### 5. 🎵 Ambient Loop Audio & Animated Music Bars
* **Sound Controller**: Clicking the music controller on the NavBar toggles ambient sound loops.
* **Animated Music Indicator**: An active audio status bar made of CSS-animated lines pulses with varying heights and randomized animation delays when audio is playing.

### 6. 🗺️ Gooey SVG Mask Filters (Story Section)
* **SVG Gaussian Blur Filter**: The [Story](file:///c:/Main/ZE/Zentry-Game/src/components/Story.jsx) section's floating image masks utilize a customized SVG `<filter>` block that blends elements to form gooey rounded edges using `feGaussianBlur` and `feColorMatrix`.

---

## 🛠️ Tech Stack & Dependencies

The project is built on the following technologies:

| Category | Technology | Usage / Purpose |
|---|---|---|
| **Core** | **React 19** | Component-driven UI framework with optimized rendering |
| **Build Tool** | **Vite 7** | Fast hot module replacement (HMR) and optimized build bundling |
| **Styling** | **Tailwind CSS v4** | Modern utility-first CSS styling engine |
| **Animations** | **GSAP & ScrollTrigger** | High-fidelity scroll animations, timelines, and 3D rotations |
| **Icons** | **React Icons** | Clean vector icons used for interactive buttons and layouts |
| **State Hooks** | **React Use & Custom hooks** | Utility hooks for tracking scroll offset (`useWindowScroll`), viewport size, etc. |

---

## 📁 Project Architecture

The directory tree is clean and structured as follows:

```text
Zentry-Game/
├── public/                  # Static assets: videos, images, audio, and custom fonts
├── src/
│   ├── components/          # Reusable UI & Layout Components
│   │   ├── About.jsx        # Introduces the gaming universe with scroll morphs
│   │   ├── AnimatedTitle.jsx# Word-by-word 3D entry animation utility
│   │   ├── Button.jsx       # Interactive sliding magnetic button with double text
│   │   ├── Contact.jsx      # Asymmetric layered call-to-action layout
│   │   ├── Features.jsx     # Main grid showcase wrapping BentoCards
│   │   ├── Footer.jsx       # Social links, licensing, and creator info
│   │   ├── Hero.jsx         # Video-previewing grid hero section
│   │   ├── Navbar.jsx       # Floating scroll-direction responsive NavBar & audio toggle
│   │   ├── Story.jsx        # Gooey SVG mask scroll visual section
│   │   └── VideoPreview.jsx # 3D parallax hover effect wrapper
│   ├── App.jsx              # Main page coordinator & layout
│   ├── index.css            # Custom CSS configurations, font faces, and scroll variables
│   └── main.jsx             # React framework entry point
├── package.json             # Build dependencies and script runner configurations
├── tailwind.config.js       # Styling theme extensions (Tailwind CSS configurations)
└── vite.config.js           # Vite bundle settings
```

---

## 🚀 Getting Started

To run the Zentry Game project locally on your machine, follow these instructions:

### 📋 Prerequisites
Ensure you have **Node.js** (v18.0.0 or higher recommended) and **npm** installed.

### 📥 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Amit-Patra-04/Zentry-Game.git
   cd Zentry-Game
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:5173` to explore the interactive sections.

4. **Build for Production**
   To compile and compress static files for deployment:
   ```bash
   npm run build
   ```
   To preview the compiled production build locally:
   ```bash
   npm run preview
   ```

---

## 💻 Code walkthrough & Architecture Reference

Here are links to the key components making up this project:

* **Global Styles**: [index.css](file:///c:/Main/ZE/Zentry-Game/src/index.css) - Defines typography (@font-face rules for *Zentry*, *General*, *Circular*, *Robert*), utility styling helpers (`.flex-center`, `.absolute-center`), custom clip-paths, and the audio visualizer keyframe animations.
* **Hero Experience**: [Hero.jsx](file:///c:/Main/ZE/Zentry-Game/src/components/Hero.jsx) - Combines video loaded indicators with GSAP clips morph.
* **3D Mouse Motion Parallax**: [VideoPreview.jsx](file:///c:/Main/ZE/Zentry-Game/src/components/VideoPreview.jsx) - Calculates client relative X/Y positions on hover to rotate frames and translate child elements for a 3D parallax effect.
* **Modular Bento Tiles**: [Features.jsx](file:///c:/Main/ZE/Zentry-Game/src/components/Features.jsx) - Provides layout grids for Bento showcase and houses `BentoTilt` and `BentoCard` elements.
* **Sound & Scroll Header**: [Navbar.jsx](file:///c:/Main/ZE/Zentry-Game/src/components/Navbar.jsx) - Controls the background loop player and applies scroll-up / scroll-down sliding behaviors.
* **Gooey Masking**: [Story.jsx](file:///c:/Main/ZE/Zentry-Game/src/components/Story.jsx) - Displays an SVG filter-based gooey mask frame that responds to 3D mouse tilts.
* **Magnetic Buttons**: [Button.jsx](file:///c:/Main/ZE/Zentry-Game/src/components/Button.jsx) - Animates two text layers during hover events to create a modern sliding text effect.
* **Core Page Component**: [App.jsx](file:///c:/Main/ZE/Zentry-Game/src/App.jsx) - Orchestrates sections sequentially inside a relative min-height layout.

---

## 📄 License & Attribution

* Design inspired by Zentry. All product imagery, videos, and trademark fonts belong to their respective copyright holders.
