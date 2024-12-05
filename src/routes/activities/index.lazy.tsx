import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/activities/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/activities/"!</div>
}
