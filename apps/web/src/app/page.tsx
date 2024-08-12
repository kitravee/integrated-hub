import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/accordion";
import { AppHeader } from "./components/layout/app-header";
import { ShinyButton } from "@repo/ui/shiny-button";
import { AnimatedBeamDemo } from "./presentation/animated-beam-demo";
import { AppFooter } from "./components/layout";

export default function Home() {
  return (
    <div className="">
      <AppHeader />
      <main>
        <section id="hero" className="container">
          <div className="flex flex-col gap-6 md:gap-8 justify-center align-middle pt-5 md:pt-28">
            <h1 className="text-black dark:text-white relative mx-0 max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2 text-left tracking-tighter text-balance md:text-center font-semibold md:text-7xl lg:text-7xl sm:text-7xl text-5xl">
              Unify Your Digital Ecosystem
            </h1>
            <div className="flex md:justify-center">
              <div className="max-w-xl text-left md:text-center">
                <p className="text-balance text-base tracking-tight text-black/75 dark:font-medium dark:text-white/75 md:text-lg ">
                  streamlines your business by unifying digital tools and
                  processes into a seamless, easy-to-manage platform, empowering
                  you to optimize operations and drive growth effortlessly.
                </p>
              </div>
            </div>

            <div className="flex md:justify-center gap-2">
              <ShinyButton text="Road map" className="px-12" />
            </div>
          </div>
        </section>
        <section id="demo">
          <div className="pb-20">
            <AnimatedBeamDemo />
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}

const Test = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
