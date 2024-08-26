import { AppHeader, AppFooter } from "@/components/layout";
import { ShinyButton } from "@repo/ui";
import { AnimatedBeamDemo } from "./presentation/animated-beam-demo";

import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <AppHeader />
      <main>
        <section id="hero" className="container">
          <div className="flex flex-col gap-6 md:gap-8 justify-center align-middle pt-5 md:pt-28">
            <h1 className="font-sans text-black dark:text-white relative mx-0 max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2 text-left tracking-tighter text-balance md:text-center font-semibold md:text-7xl lg:text-7xl sm:text-7xl text-5xl">
              Integrations made easy
            </h1>
            <div className="flex md:justify-center">
              <div className="max-w-xl text-left md:text-center">
                <p className="font-mono text-balance text-base tracking-tight text-black/75 dark:font-medium dark:text-white/75 md:text-lg ">
                  Spend less time integrating and more time growing your
                  business. Let us handle the integration for you.
                </p>
              </div>
            </div>

            <div className="flex md:justify-center gap-2">
              <Link
                href="https://github.com/users/kitravee/projects/4"
                target="_blank"
              >
                <ShinyButton text="Road map" className="px-12" />
              </Link>
            </div>
          </div>
        </section>
        <section id="demo">
          <div className="container pb-20">
            <AnimatedBeamDemo />
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}
