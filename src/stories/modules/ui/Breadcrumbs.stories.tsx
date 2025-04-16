import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb } from "@/modules/ui/components";

const meta = {
  title: "UI/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pathes: [
      {
        label: "Profile",
        href: "/profile",
      },
      {
        label: "Notifications",
        href: "/profile/notifications",
      },
    ],
  },
};
