import { createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
const Route$1 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Soni Films —  Bringing Stories to Life" },
      { name: "description", content: "Soni Films is a premium creative production house based in Delhi, India. Specializing in Music Videos, Short Films, Commercials, Brand Films, Web Series, Fashion Shoots, and Digital Campaigns." },
      { name: "keywords", content: "Soni Films, , Film Production Delhi, Music Video Production, Cinematographer India, DOP Delhi, Brand Films, Web Series Production" },
      { property: "og:title", content: "Soni Films —  Bringing Stories to Life" },
      { property: "og:description", content: "Premium creative production house based in Delhi, India." },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#0a0a0a" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600&family=Bebas+Neue&display=swap" }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "bg-black text-white antialiased", children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter = () => import("./index-BmlCJ9B4.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
