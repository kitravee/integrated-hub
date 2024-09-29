import { CopyIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogTrigger,
  Button,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  buttonVariants,
} from "@repo/ui";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex">
      {/* <button onClick={() => {}}>test</button> */}
      <aside
        className="fixed top-0 z-30 -ml-2 hidden h-[calc(100vh)] w-full shrink-0 md:sticky md:block"
        aria-label="Sidenav"
      >
        <div className="w-56 py-5 px-3 h-full border">
          <ul className="space-y-2">
            <li>
              <Button asChild variant="ghost">
                <Link href="/" className="flex p-4 items-center gap-2">
                  <GitHubLogoIcon />
                  Workplace
                </Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="ghost">
                <Link href="/" className="flex p-4 items-center gap-2">
                  <GitHubLogoIcon />
                  Workplace
                </Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="ghost">
                <Link href="/" className="flex p-4 items-center gap-2">
                  <GitHubLogoIcon />
                  Workplace
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
