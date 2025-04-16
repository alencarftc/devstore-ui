import { ReactNode, CSSProperties } from "react";

type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TypographyProps = {
  tag?: TagVariants;
  children: ReactNode;
  role?: "text" | "heading";
};

const HEADING_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];

/**
 * @tag will have default 'p' since it'll probably be our most used tag
 * @props have all our CSS
 */
export const Typography = ({
  tag = "p",
  children,
  role,
  ...props
}: TypographyProps & CSSProperties) => {
  const Component = tag;

  const finalRole = HEADING_TAGS.includes(tag) ? "heading" : role || undefined;

  return (
    <Component role={finalRole} style={{ ...props }}>
      {children}
    </Component>
  );
};
