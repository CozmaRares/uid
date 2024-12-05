import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/meetings/$meedingID')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/meetings/$meedingID"!</div>
}
