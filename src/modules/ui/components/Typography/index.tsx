import { ReactNode, CSSProperties } from "react";

type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TypographyProps = {
  tag?: TagVariants;
  children: ReactNode;
};

/**
 * @tag will have default 'p' since it'll probably be our most used tag
 * @props have all our CSS
 */
export const Typography = ({
  tag = "p",
  children,
  ...props
}: TypographyProps & CSSProperties) => {
  const Component = tag;

  return <Component style={{ ...props }}>{children}</Component>;
};
