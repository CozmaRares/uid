import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/issues/my-issues')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/issues/my-issues"!</div>
}
