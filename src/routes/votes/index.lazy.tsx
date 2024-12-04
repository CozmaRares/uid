import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { votes, Vote } from "@/lib/data";
import { CSSProperties, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PageTitle } from "@/components/headings";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createLazyFileRoute("/votes/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedVote, setSelectedVote] = useState<Vote>(votes[0]);
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <main>
      <div className="mb-8">
        <PageTitle
          title="Vote"
          description="Vote on the most important decisions"
        />
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {votes.slice(0, 6).map(vote => (
              <Card
                key={vote.id}
                className={cn(
                  "p-6",
                  selectedVote.id === vote.id
                    ? "bg-primary text-primary-foreground"
                    : "cursor-pointer transition-colors hover:bg-primary/40",
                )}
                onClick={
                  selectedVote.id === vote.id
                    ? undefined
                    : () => {
                        setSelectedVote(vote);
                        setHasVoted(false);
                      }
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
        <div className="h-[3px] w-full bg-muted lg:hidden" />
        <div className="h-full space-y-6">
          <Card className="h-full p-6">
            <h2 className="mb-4 text-xl font-medium">{selectedVote.title}</h2>
            <p
              className="relative isolate mb-6 overflow-hidden select-none after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-[var(--line-height)] after:bg-gradient-to-l after:from-card"
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
                <Button
                  className={cn(
                    "flex-1",
                    hasVoted && "cursor-auto bg-secondary hover:bg-secondary",
                  )}
                  onClick={
                    hasVoted
                      ? undefined
                      : () => {
                          setHasVoted(true);
                          toast.success("Thank you for voting!");
                        }
                  }
                >
                  {hasVoted ? "Signed" : "Sign here"}
                </Button>
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
