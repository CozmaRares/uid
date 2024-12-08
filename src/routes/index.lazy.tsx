import { buttonVariants } from "@/components/ui/button";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import activityImage from "@/assets/activity-image.png";
import { cn, formatDateWithHour } from "@/lib/utils";
import { TitleContainer, Title } from "@/components/Title";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, MapPin, Users } from "lucide-react";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="bounded-container space-y-16">
      <header className="flex flex-col items-center justify-center gap-4 text-center">
        <TitleContainer
          variant="page"
          className="border-b-0 pt-8"
        >
          <Title>Bringing All Of Cluj Together</Title>
        </TitleContainer>
      </header>
      <section className="space-y-12">
        <ul className="grid items-center justify-center gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {new Array(8).fill(0).map((_, i) => (
            <li key={i}>
              <ActivityCard
                image={activityImage}
                title="Central Park Garbage Pickup"
                date={new Date("2024-11-07T09:00:00")}
                location="Central Park, Cluj-Napoca"
                link="/"
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
  location: string;
  date: Date;
  link: string;
};

export default function ActivityCard({
  image,
  title,
  date,
  link,
  location,
}: ActivityCardProps) {
  return (
    <Card className="h-full w-full max-w-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="space-y-4 p-4">
        <div>
          <h3 className="text-xl font-semibold capitalize">{title}</h3>
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{formatDateWithHour(date)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>24 participants</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          className={cn(buttonVariants(), "w-full")}
          href={link}
        >
          Apply
        </Link>
      </CardFooter>
    </Card>
  );
}
