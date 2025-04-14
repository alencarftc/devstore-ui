export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      this is a common layout <br />
      <br />
      <br />
      <br />
      <br />
      {children}
    </div>
  );
}
