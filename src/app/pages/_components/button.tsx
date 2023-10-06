import cssClasses from "@utils/css-classes"

const variants = {
  neutral: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
}

type Props = (JSX.HtmlButtonTag | JSX.HtmlAnchorTag) & {
  variant?: keyof typeof variants
  outlined?: boolean
}

export default function Button({
  children,
  outlined,
  variant = "primary",
  class: className,
  ...props
}: Props) {
  const Tag = "href" in props ? "a" : "button"
  return (
    <Tag
      class={cssClasses([
        "btn",
        outlined && "btn-outline",
        variants[variant],
        className,
      ])}
      {...props}
    >
      {children}
    </Tag>
  )
}
