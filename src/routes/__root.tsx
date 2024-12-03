import MainNav from "@/components/nav/MainNav";
import MobileNav from "@/components/nav/MobileNav";
import SliderLink from "@/components/SliderLink";
import { buttonVariants } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { lazy } from "react";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/router-devtools").then(res => ({
          default: res.TanStackRouterDevtools,
        })),
      );

export const Route = createRootRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <Nav />
      <div className="py-8 px-4 lg:px-0">
        <Outlet />
      </div>
      <TanStackRouterDevtools position="bottom-right" />
      <TailwindIndicator />
    </div>
  );
}

function Nav() {
  const list = navLinks.map(({ text, to }) => (
    <li key={text}>
      <SliderLink
        to={to}
        text={text}
      />
    </li>
  ));
  list.push(
    <li key="my-activities">
      <Link
        to="/"
        className={buttonVariants()}
      >
        My Activities
      </Link>
    </li>,
  );

  return (
    <nav className="sticky top-0 z-50 flex flex-row items-center justify-between gap-8 border-b border-border/40 bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link
        to="/"
        className="focus-ring rounded-sm p-0.5 text-lg font-semibold text-primary"
      >
        MyCluj
      </Link>
      <MainNav>{list}</MainNav>
      <MobileNav>{list}</MobileNav>
    </nav>
  );
}

function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-4 font-mono text-xs text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
