import "@app/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-slate-200" lang="en">
      <body>
        <div className="container m-4 mx-auto">{children}</div>
      </body>
    </html>
  );
}
