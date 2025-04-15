/** Roadmap component (Figma) */

import Link from "next/link";
import { Typography } from "../Typography";
import { usePathname } from "next/navigation";

type ExpectedPathes = "clothes";

type ExpectedPage = {
  label: string;
  href: string;
};

const BREADCRUMB_PATH_PAGES: Record<ExpectedPathes, ExpectedPage> = {
  clothes: {
    label: "Clothes",
    href: "/clothes",
  },
};

export const Breadcrumbs = ({ actual }: { actual: string }) => {
  const pathname = usePathname();
  const breadcrumbs = pathname?.split("/");

  if (breadcrumbs.length === 0) return <></>;

  return (
    <nav aria-label="Breadcrumb">
      <ol>
        {breadcrumbs.map((link) => {
          const breadcrumb = BREADCRUMB_PATH_PAGES[link as ExpectedPathes];

          return (
            <>
              <li key={breadcrumb.label}>
                <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
              </li>
              <li>
                <Typography tag="span" aria-current="page">
                  {actual}
                </Typography>
              </li>
            </>
          );
        })}
      </ol>
    </nav>
  );
};
