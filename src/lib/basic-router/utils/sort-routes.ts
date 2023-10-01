import Route from "../core/route"

export default function sortRoutes(routes: Route[]) {
  return routes.sort((a, b) => {
    const aHasParams = a.path.includes(":")
    const bHasParams = b.path.includes(":")

    if (aHasParams && !bHasParams) {
      return 1
    } else if (!aHasParams && bHasParams) {
      return -1
    } else {
      return 0
    }
  })
}
