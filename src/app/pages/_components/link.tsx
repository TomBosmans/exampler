import cssClasses from "@utils/css-classes"

const variants = {
  neutral: "link-neutral",
  primary: "link-primary",
  secondary: "link-secondary",
  accent: "link-accent",
  info: "link-info",
  success: "link-success",
  warning: "link-warning",
  error: "link-error",
  hover: "link-hover",
}

type Props = (JSX.HtmlButtonTag | JSX.HtmlAnchorTag) & {
  variant?: keyof typeof variants
}

export default function Link({
  children,
  variant = "neutral",
  class: className,
  ...props
}: Props) {
  const Tag = "href" in props ? "a" : "button"
  return (
    <Tag class={cssClasses(["link", variants[variant], className])} {...props}>
      {children}
    </Tag>
  )
}
