"use client";
import { FrameIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@repo/ui";
import Link from "next/link";
import { FC } from "react";

type Props = typeof FrameIcon;

export const AppIcon: FC<Props> = (rest) => {
  return <FrameIcon width={24} height={24} {...rest} />;
};
