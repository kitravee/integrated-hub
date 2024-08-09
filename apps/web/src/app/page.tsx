// /** @type {import('tailwindcss').Config} */
// import { Button } from "@repo/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/accordion";
import Image from "next/image";
// import {
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./components/accordion";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-3xl font-sans font-bold underline">Hello world!</h1>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Test />

        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>
          </li>
          <li>Save and see your changes instantly.</li>
          <li>{process.env.KEY1}</li>
          <li>{process.env.KEY2}</li>
        </ol>
      </main>
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
