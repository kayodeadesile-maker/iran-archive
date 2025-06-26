import { classNames } from "@/utils";
import { DisclosurePanel } from "@headlessui/react";
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { navigateRoutesOne, navigateRoutesTwo, type RouteProps } from "./routes";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import LogoImage from "@/assets/Iran-logo.png";
import {
  framerIcon,
  framerNavItems,
  framerSidebarBackground,
  framerSidebarPanel,
  framerText,
} from "@/utils/framer";
import { useLocation, useNavigate } from "react-router-dom";

type AppNavigationPropsType = {
  close: (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>) => void;
  open: boolean;
};

export const AppNavigation = ({ open, close }: AppNavigationPropsType) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const menuRefs = useRef<HTMLDivElement[]>([]);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const page = pathname.split("/");

  console.log(page);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openMenuIndex !== null) {
        const clickedElement = event.target as Node;
        const menuRef = menuRefs.current[openMenuIndex];
        const buttonRef = buttonRefs.current[openMenuIndex];

        if (
          menuRef &&
          !menuRef.contains(clickedElement) &&
          buttonRef &&
          !buttonRef.contains(clickedElement)
        ) {
          setOpenMenuIndex(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenuIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && openMenuIndex !== null) {
        setOpenMenuIndex(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [openMenuIndex]);

  const handleMenuToggle = useCallback(
    (index: number, route: RouteProps[0]) => {
      if (route.menuComponent && openMenuIndex !== index) {
        setOpenMenuIndex(openMenuIndex === index ? null : index);
      }

      if (route.openMenu && !route.menuComponent) {
        route.openMenu();
      }
    },
    [openMenuIndex]
  );

  return (
    <Fragment>
      <nav className="hidden lg:block fixed left-0 w-80 bg-lightgoldcolorsix h-[calc(100vh-5rem)] top-20 border-r border-gray-300 z-30 overflow-hidden">
        <div>
          <div className="flex flex-col items-center w-full">
            {React.Children.toArray(
              navigateRoutesOne.map((route, index) => {
                const { label, Icon, current } = route;
                // const openMenu = navigateRoutesOne.find((route) => route.label === label)?.openMenu;
                const isMenuOpen = openMenuIndex! === index;

                return (
                  <div
                    ref={(el) => {
                      if (el) {
                        menuRefs.current[index] = el;
                      }
                    }}
                    key={`${label}-${index}`}
                    className="relative w-full"
                  >
                    <button
                      ref={(el) => {
                        if (el) {
                          buttonRefs.current[index] = el;
                        }
                      }}
                      onClick={() => {
                        route.label === "home" ? navigate("/home") : handleMenuToggle(index, route);
                      }}
                      className={classNames(
                        "flex items-center space-x-4 relative w-full py-4 px-7",
                        current ? "hover:bg-gray-50" : "",
                        isMenuOpen && "bg-gray-50",
                        page.includes(label) ||
                          (page?.[0].split("-").includes(label) && !isMenuOpen && "bg-gray-50")
                      )}
                      aria-current={current ? "page" : undefined}
                    >
                      <>
                        <span className={classNames("h-6")}>{Icon}</span>
                        <span
                          className={classNames(
                            "text-base sm:text-lg font-satoshi capitalize",
                            isMenuOpen ? "text-goldcolor font-medium" : "text-[#0C0C0D] font-normal"
                          )}
                        >
                          {label}
                        </span>
                      </>
                    </button>

                    {route.menuComponent && isMenuOpen && (
                      <div className="w-full">
                        {typeof route.menuComponent === "function" ? (
                          <route.menuComponent buttonRef={{ current: buttonRefs.current[index] }} />
                        ) : (
                          route.menuComponent
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          <hr className="w-full border-[#956D30] my-6" />

          <div className="mb-1 flex flex-col items-center w-full">
            {React.Children.toArray(
              navigateRoutesTwo.map(({ label, Icon, current }, index) => (
                <button
                  key={`${label}-${index}`}
                  className={classNames(
                    "flex items-center space-x-4 relative w-full py-4 px-7",
                    current ? "hover:bg-gray-50 " : ""
                  )}
                  aria-current={current ? "page" : undefined}
                >
                  <>
                    <span
                      className={classNames(
                        // isActive ? "stroke-goldcolor dark:stroke-white" : "stroke-[#7B7B7B]",
                        "h-6"
                      )}
                    >
                      {Icon}
                    </span>
                    <span
                      className={classNames(
                        "text-base sm:text-lg font-normal font-satoshi capitalize"
                        // isActive ? "text-goldcolor font-medium" : "text-[#0C0C0D] font-normal"
                      )}
                    >
                      {label}
                    </span>
                  </>
                </button>
              ))
            )}
          </div>
        </div>
      </nav>

      {/* Mobile navigation starts */}
      <AnimatePresence initial={false} mode="wait">
        {open && (
          <DisclosurePanel
            static
            className={classNames("fixed lg:hidden left-0 top-0 z-20 h-full w-full")}
          >
            <motion.div
              {...framerSidebarBackground(open)}
              className="absolute inset-0 bg-black bg-opacity-50 -z-10"
              onClick={() => close()}
            />

            <motion.div
              {...framerSidebarPanel}
              className={classNames(
                "relative h-full w-full sm:max-w-sm bg-lightgoldcolorsix overflow-y-scroll"
              )}
            >
              <button className="absolute right-4 top-6 lg:hidden z-30" onClick={() => close()}>
                <span className="sr-only">Close Side menu</span>
                <XMarkIcon className="h-8 w-8 text-goldcolor" />
              </button>

              <div className="flex flex-col w-full">
                <div className="flex items-center my-4 ml-5">
                  <div className="flex-1 lg:flex-none h-16 lg:justify-start flex justiffy-center items-center">
                    <img src={LogoImage} alt="app logo" className="h-full" />
                  </div>
                </div>

                <motion.div className="space-y-2">
                  {React.Children.toArray(
                    navigateRoutesOne.map(({ label, Icon, current }, idx) => (
                      <motion.button
                        key={`${label}-${idx}`}
                        {...framerNavItems(idx, open)}
                        className={classNames(
                          "flex items-center space-x-4 relative w-full py-4 px-7",
                          current ? "hover:bg-gray-50 " : ""
                        )}
                        aria-current={current ? "page" : undefined}
                      >
                        <>
                          <motion.div
                            {...framerIcon(open)}
                            className={classNames(
                              // isActive ? "stroke-goldcolor dark:stroke-white" : "stroke-[#7B7B7B]",
                              "h-6"
                            )}
                          >
                            {Icon}
                          </motion.div>

                          <motion.div
                            {...framerText(idx, open)}
                            className={classNames(
                              "text-base sm:text-lg font-satoshi font-medium capitalize"
                              // isActive ? "text-goldcolor font-medium" : "text-[#0C0C0D] font-normal"
                            )}
                          >
                            {label}
                          </motion.div>
                        </>
                      </motion.button>
                    ))
                  )}
                </motion.div>

                <motion.hr
                  initial={{
                    // x: 0,
                    width: 0,
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    delay: 0.5 + navigateRoutesOne.length / 10,
                  }}
                  className="w-full border-[#956D30] my-6 border-2"
                />

                <motion.div className="space-y-2">
                  {React.Children.toArray(
                    navigateRoutesTwo.map(({ label, Icon, current }, idx) => (
                      <motion.button
                        key={`${label}-${idx}`}
                        {...framerNavItems(idx + navigateRoutesOne.length, open)}
                        className={classNames(
                          "flex items-center space-x-4 relative w-full py-4 px-7",
                          current ? "hover:bg-gray-50 " : ""
                        )}
                        aria-current={current ? "page" : undefined}
                      >
                        <>
                          <motion.div
                            {...framerIcon(open)}
                            className={classNames(
                              // isActive ? "stroke-goldcolor dark:stroke-white" : "stroke-[#7B7B7B]",
                              "h-6"
                            )}
                          >
                            {Icon}
                          </motion.div>

                          <motion.div
                            {...framerText(idx + navigateRoutesOne.length, open)}
                            className={classNames(
                              "text-base sm:text-lg font-satoshi font-medium capitalize"
                              // isActive ? "text-goldcolor font-medium" : "text-[#0C0C0D] font-normal"
                            )}
                          >
                            {label}
                          </motion.div>
                        </>
                      </motion.button>
                    ))
                  )}
                </motion.div>
              </div>
            </motion.div>
          </DisclosurePanel>
        )}
      </AnimatePresence>
    </Fragment>
  );
};
