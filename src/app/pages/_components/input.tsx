import cssClasses from "@utils/css-classes"

const variants = {
  neutral: undefined,
  primary: "input-primary",
  error: "input-error",
}

export type InputProps = JSX.HtmlInputTag & {
  variant?: keyof typeof variants
}

export default function Input({
  variant = "neutral",
  class: className,
  ...props
}: InputProps) {
  return (
    <input
      class={cssClasses([
        "input",
        "input-bordered",
        variants[variant],
        className,
      ])}
      {...props}
    />
  )
}
