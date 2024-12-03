import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { votes, Vote } from "@/lib/data";
import { CSSProperties, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PageTitle } from "@/components/headings";
import { cn } from "@/lib/utils";

export const Route = createLazyFileRoute("/votes/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedVote, setSelectedVote] = useState<Vote>(votes[0]);

  return (
    <main>
      <div className="mb-8">
        <PageTitle
          title="Vote"
          description="Vote on the most important decisions"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {votes.slice(0, 6).map(vote => (
              <Card
                key={vote.id}
                className={cn(
                  "p-6",
                  selectedVote.id === vote.id
                    ? "cursor-auto bg-primary text-primary-foreground"
                    : "cursor-pointer transition-colors hover:bg-primary/40",
                )}
                onClick={
                  selectedVote.id === vote.id
                    ? undefined
                    : () => setSelectedVote(vote)
                }
              >
                <h3 className="font-medium">{vote.title}</h3>
              </Card>
            ))}
          </div>
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
            href="/votes/all"
          >
            Browse more votes
          </Link>
        </div>

        <div className="h-full space-y-6">
          <Card className="h-full p-6">
            <h2 className="mb-4 text-xl font-medium">{selectedVote.title}</h2>
            <p
              className="relative isolate mb-6 overflow-hidden after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-[var(--line-height)] after:bg-gradient-to-l after:from-card"
              style={
                {
                  "--line-height": "1.5rem",
                  fontSize: "1rem",
                  lineHeight: "var(--line-height)",
                  height: "calc(var(--line-height) * 7)",
                } as CSSProperties
              }
            >
              {selectedVote.description}
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-black/80">Progress</span>
                  <span className="font-medium">
                    {selectedVote.numVotes} votes out of{" "}
                    {selectedVote.necessaryVotes}
                  </span>
                </div>
                <Progress
                  value={
                    (selectedVote.numVotes / selectedVote.necessaryVotes) * 100
                  }
                />
              </div>
              <div className="flex gap-4">
                <Button className="flex-1">Sign here</Button>

                <Link
                  className={buttonVariants({ variant: "outline" })}
                  href={`/votes/${selectedVote.id}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
