import { ModeToggle } from "@/components/ui";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui";
import { signIn } from "../lib";

export default function Page() {
  return (
    <div className="md:container">
      <section id="login">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-screen">
          <aside className="grid gap-4 p-4 justify-between md:p-8">
            <ModeToggle />

            <div className="self-center">
              <h1 className="font-cal text-3xl text-foreground">
                Integrations made easy
              </h1>
              <p className="font-cal text-muted-foreground">
                Spend less time integrating and more time growing your business.
                Let us handle the integration for you.
              </p>
            </div>
            <div className="p-4 md:p-8 hidden md:inline-grid" />
          </aside>
          <main>
            <div className="grid place-items-center md:min-h-screen p-4 md:p-0">
              <Card className="w-full md:w-[350px]">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">
                    Sign in to LastConnect
                  </CardTitle>
                  <CardDescription className="text-center">
                    Explore the product now.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <form
                    action={async () => {
                      "use server";
                      await signIn("google", { redirectTo: "/" });
                    }}
                    className="w-full"
                  >
                    <Button type="submit" className="w-full">
                      Signin with Google <GlobeIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                  <form
                    action={async () => {
                      "use server";
                      await signIn("github", { redirectTo: "/" });
                    }}
                    className="w-full"
                  >
                    <Button type="submit" className="w-full">
                      Signin with GitHub{" "}
                      <GitHubLogoIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-xs text-muted-foreground">
                    Terms of Service and Privacy Policy.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
