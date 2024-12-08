import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/issues/my-issues")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/issues/my-issues"!</div>;
}
