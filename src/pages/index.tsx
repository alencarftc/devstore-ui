import type { NextPageWithLayout } from "./_app";
import RootLayout from "./layout";

const Page: NextPageWithLayout = () => {
  return <p className="text-3xl font-bold underline">hello world</p>;
};

Page.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default Page;
