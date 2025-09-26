"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Desktop Apps Development",
    description:
      "Hire us for development of desktop applications as per your business needs.",
    image: "/homepage/slider1.jpg",
  },
  {
    id: 2,
    title: "On-Site Support",
    description: "Our programmers can come to your location if needed.",
    image: "/homepage/slider2.jpg",
  },
  {
    id: 3,
    title: "Web Development",
    description: "We use Laravel, ASP.NET and Razor for modern web apps.",
    image: "/homepage/slider3.jpg",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "We create iOS and Android apps with the latest technologies.",
    image: "/homepage/slider4.jpg",
  },
  {
    id: 5,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud solutions for your business.",
    image: "/homepage/slider2.jpg",
  },
];

const AUTOPLAY_MS = 4000;
const TRANSITION_MS = 500;

export default function ServicesSlider() {
  // responsive cards per view
  const [cardsPerView, setCardsPerView] = useState(4);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // clones based on current cardsPerView for smooth infinite
  const clonesCount = Math.max(1, cardsPerView);
  const extendedSlides = useMemo(() => {
    const head = courses.slice(0, clonesCount);
    const tail = courses.slice(-clonesCount);
    return [...tail, ...courses, ...head];
  }, [clonesCount]);

  // index starts after prepended clones
  const [currentIndex, setCurrentIndex] = useState(clonesCount);
  const [transitioning, setTransitioning] = useState(true);

  // Reset index when cardsPerView changes (rebuild clones)
  useEffect(() => {
    setTransitioning(false);
    setCurrentIndex(clonesCount);
    const id = requestAnimationFrame(() => setTransitioning(true));
    return () => cancelAnimationFrame(id);
  }, [clonesCount]);

  // derive normalized active index (0..courses.length-1) for dots
  const normalizedIndex =
    (((currentIndex - clonesCount) % courses.length) + courses.length) %
    courses.length;

  // autoplay with pause on hover / tab hidden
  const intervalRef = useRef(null);
  const isHoverRef = useRef(false);

  const startAutoplay = () => {
    if (intervalRef.current) return;
    intervalRef.current = window.setInterval(() => {
      if (!isHoverRef.current) next();
    }, AUTOPLAY_MS);
  };
  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) stopAutoplay();
      else startAutoplay();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const next = () => {
    setTransitioning(true);
    setCurrentIndex((i) => i + 1);
  };
  const prev = () => {
    setTransitioning(true);
    setCurrentIndex((i) => i - 1);
  };

  // wrap-around without visible jump
  useEffect(() => {
    // last index before head clones begin
    const maxIndex = clonesCount + courses.length - 1;
    if (currentIndex > maxIndex) {
      // after transition completes, jump back silently
      const t = setTimeout(() => {
        setTransitioning(false);
        setCurrentIndex(clonesCount);
        // re-enable transition next frame
        const id = requestAnimationFrame(() => setTransitioning(true));
        return () => cancelAnimationFrame(id);
      }, TRANSITION_MS);
      return () => clearTimeout(t);
    }
    if (currentIndex < clonesCount) {
      const t = setTimeout(() => {
        setTransitioning(false);
        setCurrentIndex(clonesCount + courses.length - 1);
        const id = requestAnimationFrame(() => setTransitioning(true));
        return () => cancelAnimationFrame(id);
      }, TRANSITION_MS);
      return () => clearTimeout(t);
    }
  }, [currentIndex, clonesCount]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // drag/swipe support via framer-motion
  const handleDragEnd = (_, info) => {
    const dx = info?.offset?.x ?? 0;
    const threshold = 50;
    if (dx < -threshold) next();
    else if (dx > threshold) prev();
    else {
      // snap back by re-setting same index to animate to position
      setCurrentIndex((i) => i);
    }
  };

  const slideWidthPercent = 100 / cardsPerView;
  const trackX = -currentIndex * slideWidthPercent;

  return (
    <section
      className="w-full bg-muted/50 py-16"
      role="region"
      aria-label="Courses slider"
      onMouseEnter={() => {
        isHoverRef.current = true;
        stopAutoplay();
      }}
      onMouseLeave={() => {
        isHoverRef.current = false;
        startAutoplay();
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-pretty">
            {"COURSES "}
            <span className="text-amber-600">WE</span>
            {" OFFER"}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
        </header>

        <div className="relative">
          {/* viewport */}
          <div className="overflow-hidden rounded-lg ">
            <motion.div
              className="flex select-none"
              style={{ touchAction: "pan-y" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.06}
              onDragEnd={handleDragEnd}
              animate={{ x: `${trackX}%` }}
              transition={
                transitioning
                  ? {
                      type: "tween",
                      duration: TRANSITION_MS / 1000,
                      ease: "easeInOut",
                    }
                  : { type: "tween", duration: 0 }
              }
            >
              {extendedSlides.map((course, idx) => (
                <div
                  key={`${course.id}-${idx}`}
                  className="p-3"
                  style={{ flex: `0 0 ${slideWidthPercent}%` }}
                >
                  <article className="h-full bg-card text-card-foreground rounded-md shadow-lg overflow-hidden flex flex-col">
                    <div className="h-44 md:h-48 overflow-hidden">
                      <img
                        src={
                          course.image ||
                          "/placeholder.svg?height=192&width=320&query=courses%20slide"
                        }
                        alt={course.title}
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold mb-2">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                    <div className=" pb-[2rem]">
                    <button className="flex items-center  w-[90%] mx-auto  group h-12 bg-[#f8fafc] transition-all ease-linear delay-150 hover:bg-amber-600 relative overflow-hidden group">
                      {/* Left side */}
                      <span className="flex-1 flex items-center justify-center text-gray-800 font-medium group-hover:text-white   transition">
                        Read More <span className="ml-2">›</span>
                      </span>

                      {/* Right side */}
                      <span
                        className="w-20 h-full bg-amber-600 group-hover:bg-black flex text-3xl items-center justify-center text-white"
                        style={{
                          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
                        }}
                      >
                        →
                      </span>
                    </button>
                    </div>
                  </article>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute top-1/2 left-2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-amber-600 text-foreground text-white  shadow hover:bg-primary hover:text-primary-foreground transition"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute top-1/2 right-2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-amber-600 text-white text-foreground  shadow hover:bg-primary hover:text-primary-foreground transition"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {courses.map((_, i) => {
            const isActive = i === normalizedIndex;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrentIndex(clonesCount + i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  isActive ? "bg-primary" : "bg-muted"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
