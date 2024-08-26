"use client";

import { useTheme } from "next-themes";
import { FC } from "react";

export const AppFooter: FC = () => {
  const { setTheme } = useTheme();
  return (
    <header className="backdrop-blur-3xl sticky top-0 z-50 w-full border-border border-t-2">
      <div className="container">
        <div className="flex items-center h-16">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Designed by Kitravee (Trong) Siwatkittisuk
          </p>
        </div>
      </div>
    </header>
  );
};
