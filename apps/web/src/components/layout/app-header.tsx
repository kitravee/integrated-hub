"use client";

import { FrameIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Badge, buttonVariants } from "@repo/ui";
import Link from "next/link";
import { FC } from "react";
import { ModeToggle } from "../ui";

export const AppHeader: FC = () => {
  return (
    <header className="backdrop-blur-3xl sticky top-0 z-50 w-full border-border border-b-2">
      <div className="container">
        <div className="flex items-center h-16">
          <div className="flex items-center grow gap-4">
            <Link
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              href="https://github.com/kitravee/integrated-hub"
              target="_blank"
            >
              <FrameIcon width={24} height={24} />
            </Link>
            <div>
              <h1 className="text-1xl font-bold">Integrated-hub</h1>
            </div>
            <Badge variant="default">Beta</Badge>
          </div>

          <div className="flex items-center justify-between gap-2">
            <Link
              className={buttonVariants({ variant: "ghost", size: "icon" })}
              href="https://github.com/kitravee/integrated-hub"
              target="_blank"
            >
              <GitHubLogoIcon />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
