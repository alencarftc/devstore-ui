import { Breadcrumb } from "@/modules/ui/components";

export default () => (
  <Breadcrumb
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
