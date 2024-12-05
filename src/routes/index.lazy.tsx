import { buttonVariants } from "@/components/ui/button";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import activityImage from "@/assets/activity-image.png";
import { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { TitleContainer, Title } from "@/components/Title";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="space-y-16">
      <header className="flex flex-col items-center justify-center gap-4 text-center">
        <TitleContainer
          variant="page"
          className="border-b-0 pt-8"
        >
          <Title>Bringing All Of Cluj Together</Title>
        </TitleContainer>
      </header>
      <section className="space-y-12">
        <ul className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10">
          {new Array(8).fill(0).map((_, i) => (
            <li key={i}>
              <ActivityCard
                image={activityImage}
                title="Central Park Garbage Pickup"
                date="7th Nov. 2024"
                link="/#"
              />
            </li>
          ))}
        </ul>
        <Link
          to="/activities"
          className={cn(buttonVariants(), "mx-auto block w-fit")}
        >
          Browse Activities
        </Link>
      </section>
      <section>
        <TitleContainer variant="section">
          <Title className="underline decoration-primary">
            What We Believe
          </Title>
        </TitleContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          cumque delectus magni harum, distinctio quaerat commodi magnam
          similique beatae repellendus officia, fugit rem voluptatibus nobis
          totam, quia incidunt dolores facere! Aspernatur obcaecati optio fuga
          enim quidem totam mollitia in corporis saepe voluptate tempora libero,
          quis voluptas impedit, ea, nisi praesentium eum neque. Vitae porro
          aliquam nisi numquam, sint quam eos. Quas perspiciatis maiores quaerat
          ratione labore quo adipisci eveniet! Recusandae eum assumenda eaque
          ea, voluptas, molestiae iste quasi officiis totam velit quas, debitis
          aspernatur ab inventore eligendi pariatur vitae aut!
        </p>
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
            className="h-full w-full rounded-t-[var(--rounded)] object-cover"
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
