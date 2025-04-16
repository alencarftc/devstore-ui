import { Breadcrumbs } from "@/modules/ui/components";

export default () => (
  <Breadcrumbs
    pathes={[
      {
        href: "/teste",
        label: "Teste",
      },
      {
        href: "/teste/teste2",
        label: "Teste2",
      },
    ]}
  />
);
