import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/votes/$voteID')({
  component: RouteComponent,
})

function RouteComponent() {
  const { voteID } = Route.useParams()

  return <div>Hello "/vote/$voteID"! {voteID}</div>
}
