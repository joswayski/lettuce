import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import "../styles.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "lettuce.talk is a chat app for your people: channels, voice, and too many emoji reactions.",
      },
      { name: "theme-color", content: "#f3f2ec" },
      { title: "lettuce.talk — talk about anything" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/assets/letty.png" },
      {
        rel: "preload",
        href: "/assets/fonts/satoshi-700.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" style={{ colorScheme: "light", backgroundColor: "#f3f2ec" }}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
