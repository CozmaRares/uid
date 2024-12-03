import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/votes/all')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/votes/all"!</div>
}
