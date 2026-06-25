import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1025px)",
        isTablet: "(min-width: 768px) and (max-width: 1024px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        let { isDesktop, isTablet } = context.conditions;

        const clipAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: "#clip",
            start: "center center",
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
          },
        });

        let initialClipPath = "inset(20% 30% round 1.5rem)";
        if (isTablet) {
          initialClipPath = "inset(15% 15% round 1.5rem)";
        } else if (!isDesktop) {
          initialClipPath = "inset(25% 10% round 1.5rem)";
        }

        clipAnimation.fromTo(
          ".about-image",
          {
            clipPath: initialClipPath,
          },
          {
            clipPath: "inset(0% 0% round 0px)",
            ease: "power1.inOut",
          }
        );
      }
    );
  });

  return (
    <div id="about" className="min-h-screen w-full">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div className="h-screen h-dvh w-full" id="clip">
        <div className="about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;