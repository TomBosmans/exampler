import Route from "./route"

type MatchResponse = {
  route: Route | null
  params: Record<string, string>
}

export default interface Router {
  match(request: Request): MatchResponse
  register(route: Route): Router
}
