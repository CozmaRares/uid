import { PageTitle } from "@/components/headings";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { votes } from "@/lib/data";
import { Card } from "@/components/ui/card";

export const Route = createLazyFileRoute("/vote/all")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <PageTitle
        title="Browse Votes"
        className="mb-8"
      />
      <section className="grid gap-4 md:grid-cols-2">
        <ul className="contents">
          {votes.map(vote => (
            <li key={vote.id}>
              <Card className="h-full w-full">
                <Link
                  className="focus-ring block h-full w-full cursor-pointer rounded-xl p-6 text-left transition-colors hover:bg-primary/40"
                  href={`/vote/${vote.id}`}
                >
                  <h3 className="font-medium">{vote.title}</h3>
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
