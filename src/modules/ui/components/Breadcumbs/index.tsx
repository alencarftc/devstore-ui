/** Roadmap component (Figma) */

import Link from "next/link";

export type BreadcrumbsProps = {
  pathes: Array<{
    label: string;
    href: string;
  }>;
};

export const Breadcrumbs = ({ pathes = [] }: BreadcrumbsProps) => (
  <nav aria-label="Breadcrumb">
    <ol className="flex">
      {pathes.map((path, index) => {
        const isActual = index + 1 === pathes.length;

        return (
          <li key={path.label} className="flex-initial">
            <Link
              href={path.href}
              style={{ color: isActual ? "#000000" : "#00000080" }}
              aria-current={isActual ? "page" : null}
              className="pt-1 pb-1 pl-3 pr-3 hover:underline"
            >
              {path.label}
            </Link>

            {!isActual && (
              <span style={{ color: "#00000080" }} className="cursor-default">
                /
              </span>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);
