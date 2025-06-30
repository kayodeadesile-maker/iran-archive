import { AppLayout } from "@/layouts/AppLayout";
import Home from "@/pages/home/home";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const Proverbs = lazy(
  () => import("@/pages/explore-archive/proverbs/proverbs")
);
const ParablesAndWiseSayings = lazy(
  () => import("@/pages/explore-archive/parables/parables-and-wise-saying")
);
const ProverbsExplaination = lazy(
  () => import("@/pages/explore-archive/proverbs/pages/proverb-explanation")
);
const ParablesbDetailExplaination = lazy(
  () => import("@/pages/explore-archive/parables/pages/parables-explaination")
);
const IndigenousPlants = lazy(
  () => import("@/pages/explore-archive/plants/plants")
);

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "explore-archive",
        children: [
          {
            path: "proverbs",
            children: [
              {
                index: true,

                element: (
                  <Suspense
                    fallback={
                      <p className="font-medium font-satoshi text-gray-800 px-2">
                        loading...
                      </p>
                    }
                  >
                    <Proverbs />
                  </Suspense>
                ),
              },
              {
                path: ":proverId",
                element: (
                  <Suspense
                    fallback={
                      <p className="font-medium font-satoshi text-gray-800 px-2">
                        loading...
                      </p>
                    }
                  >
                    <ProverbsExplaination />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "historical-moments",
            element: (
              <Suspense
                fallback={
                  <p className="font-medium font-satoshi text-gray-800 px-2">
                    loading...
                  </p>
                }
              >
                <></>
              </Suspense>
            ),
          },
          {
            path: "parables-and-wise-sayings",
            children: [
              {
                index: true,
                element: (
                  <Suspense
                    fallback={
                      <p className="font-medium font-satoshi text-gray-800 px-2">
                        loading...
                      </p>
                    }
                  >
                    <ParablesAndWiseSayings />
                  </Suspense>
                ),
              },
              {
                path: ":parablaId",
                element: (
                  <Suspense
                    fallback={
                      <p className="font-medium font-satoshi text-gray-800 px-2">
                        loading...
                      </p>
                    }
                  >
                    <ParablesbDetailExplaination />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "plants-and-vegetables",
            children: [
              {
                index: true,

                element: (
                  <Suspense
                    fallback={
                      <p className="font-medium font-satoshi text-gray-800 px-2">
                        loading...
                      </p>
                    }
                  >
                    <IndigenousPlants />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "heros-and-legends",
            element: (
              <Suspense
                fallback={
                  <p className="font-medium font-satoshi text-gray-800 px-2">
                    loading...
                  </p>
                }
              >
                <></>
              </Suspense>
            ),
          },
          {
            path: "oral-traditions",
            element: (
              <Suspense
                fallback={
                  <p className="font-medium font-satoshi text-gray-800 px-2">
                    loading...
                  </p>
                }
              >
                <></>
              </Suspense>
            ),
          },
          {
            path: "visual-archive",
            element: (
              <Suspense
                fallback={
                  <p className="font-medium font-satoshi text-gray-800 px-2">
                    loading...
                  </p>
                }
              >
                <></>
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
