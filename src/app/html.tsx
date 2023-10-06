import { PropsWithChildren } from "@kitajs/html"

type Props = PropsWithChildren<{
  title: string
}>

export default function HTML({ title, children }: Props) {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html class="h-full" lang="en"></html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://unpkg.com/htmx.org@1.9.6"
          integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni"
          crossorigin="anonymous"
        />
        <script src="assets/web-components.js"></script>
        <link href="/assets/tailwind.css" rel="stylesheet" />
        <title>{title}</title>
      </head>
      <body class="h-full">{children}</body>
    </>
  )
}
