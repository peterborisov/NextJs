"use client";

import "@app/global.css";

import { Provider } from "react-redux";
import { store } from "@app/store/store";

import { SidebarComponent } from "@components/index";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-slate-200" lang="en">
      <body>
        <div className="container mx-auto my-8 flex gap-4">
          <div className="w-64 flex-none">
            <div className="relative mb-4 h-20 w-auto">
              <Image
                priority={false}
                src="/images/logo-transparent.png"
                alt="App logo"
                fill
              />
            </div>
            <SidebarComponent />
          </div>
          <div className="w-full flex-1 bg-gray-200">
            <Provider store={store}>{children}</Provider>
          </div>
        </div>
      </body>
    </html>
  );
}
