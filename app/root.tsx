import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  type MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";

import { HttpStatusCode } from "axios";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import ErrorPage from "./common/components/error/erorr.page";
import { cn } from "./common/lib/utils";
import styles from "./styles/globals.css";
import { themeSessionResolver } from "./theme.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Le-Insight | Admin" },
    {
      name: "description",
      content:
        "The intuitive dashboard provides real-time insights and streamlined workflows, giving complete control over the website's performance. Manage your content, users, and settings with ease, and make data-driven decisions to drive your business forward.",
    },
  ];
};

export const links: LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
  },
  {
    rel: "icon",
    href: "svg/logo-light.svg",
    media: "(prefers-color-scheme: light)",
    sizes: "any",
    type: "image/svg+xml",
  },
  {
    rel: "icon",
    href: "svg/logo-dark.svg",
    media: "(prefers-color-scheme: dark)",
    sizes: "any",
    type: "image/svg+xml",
  },
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

// Wrap your app with ThemeProvider.
// `specifiedTheme` is the stored theme in the session storage.
// `themeAction` is the action name that's used to change the theme in the session storage.
export default function ThemedApp() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider
      specifiedTheme={data.theme}
      themeAction="/action/set-theme"
    >
      <App />
    </ThemeProvider>
  );
}

export function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  return (
    <html
      lang="en"
      className={cn(theme)}
      style={{
        fontFamily: '"Open Sans", Roboto, sans-serif',
      }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <Outlet />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html
      lang="en"
      style={{
        fontFamily: '"Open Sans", Roboto, sans-serif',
      }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {isRouteErrorResponse(error) ? (
          <ErrorPage
            code={
              error instanceof Error
                ? HttpStatusCode.InternalServerError
                : error.status
            }
            message={
              error instanceof Error
                ? error.message
                : error.status === HttpStatusCode.NotFound
                  ? "Oops! Looks like you have stumble across a page that does not exist in our universe."
                  : error.status > HttpStatusCode.InternalServerError
                    ? "There was a problem with our server. Please try again later."
                    : error.statusText
            }
          />
        ) : (
          <Outlet />
        )}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
