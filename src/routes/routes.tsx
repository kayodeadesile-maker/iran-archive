import { AppLayout } from "@/layouts/AppLayout";
import Home from "@/pages/home/home";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

// Proverbs Imports
const Proverbs = lazy(() => import("@/pages/explore-archive/proverbs/proverbs"));
const ProverbsExplaination = lazy(
  () => import("@/pages/explore-archive/proverbs/pages/proverb-explanation")
);

// Parables Imports
const ParablesAndWiseSayings = lazy(
  () => import("@/pages/explore-archive/parables/parables-and-wise-saying")
);
const ParablesbDetailExplaination = lazy(
  () => import("@/pages/explore-archive/parables/pages/parables-explaination")
);

// Plants and Vegatbles Imports
const IndigenousPlants = lazy(() => import("@/pages/explore-archive/plants-and-vegetables/plants"));
const PlantAndVegetableExplanation = lazy(
  () =>
    import("@/pages/explore-archive/plants-and-vegetables/pages/plant-and-vegetable-explanation")
);

// Historical Moments and Events Imports
const HistoricalMomentsAndEvents = lazy(
  () =>
    import("@/pages/explore-archive/historical-moments-and-events/historical-moments-and-events")
);

// Heros and Legends Imports
const HeroesAndLegends = lazy(
  () => import("@/pages/explore-archive/heroes-and-legends/heroes-and-legends")
);
const HeroOrLegendExplanation = lazy(
  () => import("@/pages/explore-archive/heroes-and-legends/pages/hero-or-legend-explanation")
);

// Oral Tradition Imports
const OralTraditions = lazy(
  () => import("@/pages/explore-archive/oral-traditions/oral-traditions")
);

// Visual Archive Imports
const VisualArchive = lazy(() => import("@/pages/explore-archive/visual-archive/visual-archive"));

// Photo Gallery
const PhotoGallery = lazy(() => import("@/pages/explore-archive/photo-gallery/photo-gallery"));

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
                      <p className="font-medium font-satoshi text-gray-800 px-2">loading...</p>
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
                      <p className="font-medium font-satoshi text-gray-800 px-2">loading...</p>
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
                fallback={<p className="font-medium font-satoshi text-gray-800 px-2">loading...</p>}
              >
                <HistoricalMomentsAndEvents />
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
                      <p className="font-medium font-satoshi text-gray-800 px-2">loading...</p>
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
                      <p className="font-medium font-satoshi text-gray-800 px-2">loading...</p>
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
                      <p className="font-medium font-satoshi text-gray-800 px-2">loading...</p>
                    }
                  >
                    <IndigenousPlants />
                  </Suspense>
                ),
              },
              {
                path: ":plantId",

                element: (
                  <Suspense
                    fallback={
                      <p className="font-medium font-satoshi text-gray-800 px-2">loading...</p>
                    }
                  >
                    <PlantAndVegetableExplanation />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "heroes-and-legends",
            children: [
              {
                index: true,
                element: (
                  <Suspense
                    fallback={
                      <p className="font-medium font-satoshi text-gray-800 px-2">loading...</p>
                    }
                  >
                    <HeroesAndLegends />
                  </Suspense>
                ),
              },
              {
                path: ":heroOrLegendId",
                element: (
                  <Suspense
                    fallback={
                      <p className="font-medium font-satoshi text-gray-800 px-2">Loading...</p>
                    }
                  >
                    <HeroOrLegendExplanation />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "oral-traditions",
            element: (
              <Suspense
                fallback={<p className="font-medium font-satoshi text-gray-800 px-2">loading...</p>}
              >
                <OralTraditions />
              </Suspense>
            ),
          },
          {
            path: "visual-archive",
            element: (
              <Suspense
                fallback={<p className="font-medium font-satoshi text-gray-800 px-2">loading...</p>}
              >
                <VisualArchive />
              </Suspense>
            ),
          },
          {
            path: "gallery",
            element: (
              <Suspense
                fallback={<p className="font-medium font-satoshi text-gray-800 px-2">loading...</p>}
              >
                <PhotoGallery />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
