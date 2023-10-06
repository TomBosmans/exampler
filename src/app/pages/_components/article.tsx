type Props = JSX.HtmlTag

export default function Article({ children, ...props }: Props) {
  return (
    <article class="prose" {...props}>
      {children}
    </article>
  )
}
