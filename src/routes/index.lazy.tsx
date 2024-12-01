import { buttonVariants } from "@/components/ui/button";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import activityImage from "@/assets/activity-image.png";
import { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="bounded">
      <header className="flex flex-col items-center justify-center gap-4 pb-24 pt-8 text-center">
        <h1 className="py-8 text-2xl sm:text-4xl lg:text-6xl">
          Bringing All Of Cluj Together
        </h1>
        <Link
          to="/"
          className={buttonVariants()}
        >
          Browse Activities
        </Link>
      </header>
      <section className="grid grid-cols-2 gap-10 md:gap-8 lg:gap-10 md:grid-cols-3 lg:grid-cols-4">
        {new Array(8).fill(0).map((_, i) => (
          <ActivityCard
            key={i}
            image={activityImage}
            title="Central Park Garbage Pickup"
            date="7th Nov. 2024"
            link="/#"
          />
        ))}
      </section>
    </main>
  );
}

type ActivityCardProps = {
  image: string;
  title: string;
  date: string;
  link: string;
};

export default function ActivityCard({
  image,
  title,
  date,
  link,
}: ActivityCardProps) {
  return (
    <article className="space-y-3">
      <div
        className="space-y-1 rounded-[calc(var(--rounded)+var(--padding))] border bg-card p-[var(--padding)] text-card-foreground"
        style={{ "--rounded": "4px", "--padding": "8px" } as CSSProperties}
      >
        <div>
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded-[var(--rounded)] object-cover"
          />
        </div>
        <p className="font-semibold">{title}</p>
        <p className="font-light">{date}</p>
      </div>
      <Link
        href={link}
        className={cn(buttonVariants(), "mx-auto block w-fit")}
      >
        Apply
      </Link>
    </article>
  );
}
