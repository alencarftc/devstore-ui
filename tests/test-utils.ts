import { render } from "@testing-library/react";
import { AppRouterContext } from "next/dist/server/route-modules/pages/vendored/contexts/entrypoints";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// app-router-context-provider-mock.tsx

import React from 'react';

export type AppRouterContextProviderMockProps = {
  router: Partial<AppRouterInstance>;
  children: React.ReactNode;
};

export const Providers = ({
  router,
  children,
}: AppRouterContextProviderMockProps): React.ReactNode => {
  const mockedRouter: AppRouterInstance = {
    back: jest.fn(),
    forward: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
    ...router,
  };
  return (
    <AppRouterContext.Provider value={mockedRouter}>
      {children}
    </AppRouterContext.Provider>
  );
};

// Add in any providers here if necessary:

const customRender = (ui: React.ReactNode, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };