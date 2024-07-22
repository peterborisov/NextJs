import "@app/global.css";

import SidebarComponent from "@app-components/SidebarComponent";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-slate-200" lang="en">
      <body>
        <div className="container m-4 mx-auto flex gap-4">
          <div className="w-64 flex-none">
            <div className="relative h-40 w-64">
              <Image
                priority={false}
                src="/images/pebor-logo.png"
                alt="App logo"
                fill
              />
            </div>
            <SidebarComponent />
          </div>
          <div className="w-full flex-1 bg-gray-200">{children}</div>
        </div>
      </body>
    </html>
  );
}
