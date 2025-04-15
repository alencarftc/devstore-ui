import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppContext, AppProps } from "next/app";

import "@/styles/globals.css";

import { IncomingMessage, ServerResponse } from "http";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type ComponentProps = {
  errorCode?: number;
  refreshUrl?: string;
  isRedirect?: boolean;
};

type AppInitialProps = Awaited<
  ReturnType<typeof DevStoreApp.getInitialProps>
>["pageProps"] &
  ComponentProps &
  AppProps & { Component: NextPageWithLayout };

type AppLocals = {
  profile: {
    name: string;
    userId: string;
    age: number;
    // [...]
  };
  device: {
    type: "mobile" | "desktop";
    os: "android" | "iOS";
  };
};

type CustomServerResponse = ServerResponse<IncomingMessage> & {
  locals: AppLocals;
};

function DevStoreApp({ Component, pageProps }: AppInitialProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  // const { device, profile, refreshUrl, isRedirect, errorCode } = pageProps;

  return getLayout(<Component {...pageProps} />);
}

DevStoreApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const res = ctx?.res as CustomServerResponse;
  const componentProps =
    (Component.getInitialProps && (await Component.getInitialProps(ctx))) ||
    ({} as ComponentProps);
  const { device, profile } = res?.locals || {};

  const pageProps = {
    ...componentProps,
    profile,
    device,
  };

  return { pageProps };
};

export default DevStoreApp;
