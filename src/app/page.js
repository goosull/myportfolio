"use client";

import { useState } from "react";
import About from "@/About";
import CursorGradient from "@/CursorGradient";
import Navbar from "@/Navbar";
import Card from "@/Card";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <>
      <div className="relative">
        <CursorGradient />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <a
            href="#content"
            className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
          >
            Skip to Content
          </a>

          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1
                  className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"
                  style={{ fontFamily: "Pretendard, sans-serif" }}
                >
                  김승원
                </h1>
                <h2
                  className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"
                  style={{ fontFamily: "Pretendard, sans-serif" }}
                >
                  프론트엔드 개발자
                </h2>
                <p
                  className="mt-4 max-w-xs leading-normal text-slate-200"
                  style={{ fontFamily: "Pretendard, sans-serif" }}
                >
                  직관적이고 접근 가능한 디지털 경험을 만듭니다.
                </p>

                {/* Navbar 컴포넌트를 여기서 호출 */}
                <Navbar
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                />
              </div>
            </header>

            {/* 오른쪽 스크롤 가능한 콘텐츠 영역 */}
            <main id="content" className="lg:w-1/2 lg:py-24">
              <section
                id="about"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                aria-label="About me"
              >
                <About />
                <About /> <About /> <About /> <About /> <About /> <About />s
              </section>
              <section
                id="experience"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                aria-label="Experience"
              >
                <About />
              </section>
              <section
                id="projects"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                aria-label="Projects"
              >
                <Card
                  title="Noteworthy technology acquisitions 2021"
                  description={
                    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                  }
                />
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
